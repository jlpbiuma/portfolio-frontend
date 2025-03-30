import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Add the env variable to the Next.js config
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    MAX_DATA_POINTS: process.env.MAX_DATA_POINTS,
    RECONNECT_PERIODICITY: process.env.RECONNECT_PERIODICITY,
  },
};

export default nextConfig;
