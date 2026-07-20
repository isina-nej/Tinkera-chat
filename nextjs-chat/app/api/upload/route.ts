import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { verifyToken, extractTokenFromHeader } from '@/lib/auth';
import { errorResponse, successResponse } from '@/lib/utils';

const UPLOAD_DIR = join(process.cwd(), 'public', 'uploads');
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    const token = extractTokenFromHeader(authHeader);

    if (!token) {
      return NextResponse.json(
        errorResponse('Unauthorized'),
        { status: 401 }
      );
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json(
        errorResponse('Invalid token'),
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        errorResponse('فایل الزامی است'),
        { status: 400 }
      );
    }

    // بررسی نوع فایل
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        errorResponse('فقط فایل‌های تصویری مجاز هستند'),
        { status: 400 }
      );
    }

    // بررسی اندازه فایل
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        errorResponse('اندازه فایل نباید بیشتر از 5MB باشد'),
        { status: 400 }
      );
    }

    const buffer = await file.arrayBuffer();
    const filename = `${Date.now()}-${payload.userId}.${file.type.split('/')[1]}`;
    const filepath = join(UPLOAD_DIR, filename);

    // ایجاد دایرکتوری اگر وجود نداشته باشد
    await mkdir(UPLOAD_DIR, { recursive: true });

    // ذخیره فایل
    await writeFile(filepath, Buffer.from(buffer));

    const imageUrl = `/uploads/${filename}`;

    return NextResponse.json(
      successResponse({ imageUrl }, 'تصویر با موفقیت آپلود شد'),
      { status: 201 }
    );
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      errorResponse('خطای سرور'),
      { status: 500 }
    );
  }
}
