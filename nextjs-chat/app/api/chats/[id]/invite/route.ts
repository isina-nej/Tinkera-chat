import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'default-secret';

function getUserFromToken(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  const token = authHeader.substring(7);
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: string; email: string; role: string };
  } catch {
    return null;
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = getUserFromToken(request);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id: chatId } = await params;

  try {
    const membership = await prisma.chatMember.findFirst({
      where: { chatId, userId: user.userId, role: 'ADMIN' }
    });

    if (!membership) {
      return NextResponse.json({ error: 'Only admins can invite members' }, { status: 403 });
    }

    const body = await request.json();
    const { userIds } = body;

    if (!Array.isArray(userIds) || userIds.length === 0) {
      return NextResponse.json({ error: 'userIds array is required' }, { status: 400 });
    }

    const existingMembers = await prisma.chatMember.findMany({
      where: { chatId, userId: { in: userIds } }
    });
    const existingUserIds = existingMembers.map(m => m.userId);

    const newUserIds = userIds.filter(id => !existingUserIds.includes(id));

    if (newUserIds.length === 0) {
      return NextResponse.json({ message: 'All users are already members' }, { status: 200 });
    }

    await prisma.chatMember.createMany({
      data: newUserIds.map(userId => ({
        chatId,
        userId,
        role: 'MEMBER'
      }))
    });

    return NextResponse.json({ 
      message: `${newUserIds.length} member(s) added`,
      addedUserIds: newUserIds 
    }, { status: 201 });
  } catch (error) {
    console.error('Error inviting members:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
