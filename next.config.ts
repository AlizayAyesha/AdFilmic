import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the Next.js Dev Tools / indicator UI in local development.
  // nextjs-portal is a framework element — it never ships in production builds.
  devIndicators: false,
};

export default nextConfig;
