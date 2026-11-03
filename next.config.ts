import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/projects/triforce-software",
        destination: "/projects/saguaro-technology",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
