import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Remote imagery used across the marketing site (Unsplash CDN).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
