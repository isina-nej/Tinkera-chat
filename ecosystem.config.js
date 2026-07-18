module.exports = {
  apps: [
    {
      name: 'chat-tinkera',
      script: 'npm',
      args: 'run start -- --hostname 0.0.0.0 --port 3001',
      cwd: '/opt/chat',
      env: {
        NODE_ENV: 'production',
        PORT: '3001',
        NEXT_PUBLIC_CHAT_APP_URL: 'http://localhost:3002/auth/login'
      },
      autorestart: true,
      watch: false,
      max_memory_restart: '500M'
    },
    {
      name: 'chat-tinkera-subapp',
      script: 'npm',
      args: 'run start -- --hostname 0.0.0.0 --port 3002',
      cwd: '/opt/chat/nextjs-chat',
      env: {
        NODE_ENV: 'production',
        PORT: '3002'
      },
      autorestart: true,
      watch: false,
      max_memory_restart: '500M'
    }
  ]
};
