import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow dev server access from other devices on your network (e.g. phone at 192.168.18.94)
  allowedDevOrigins: ["http://localhost:3000", "http://192.168.18.94:3000"],
};

export default nextConfig;
