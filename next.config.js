/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  webpack: (config, { dev, isServer }) => {
    // Suppress the webpack cache warning in development
    config.infrastructureLogging = {
      level: 'error',
    };
    
    return config;
  },
};

module.exports = nextConfig;
