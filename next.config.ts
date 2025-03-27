import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  output: 'export',
  
  // This ensures images work with static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
