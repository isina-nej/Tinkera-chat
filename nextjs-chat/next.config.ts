import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/app",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/chat",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
