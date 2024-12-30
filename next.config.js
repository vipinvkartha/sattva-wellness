/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/sattva-wellness',
  assetPrefix: '/sattva-wellness/',
  images: {
    unoptimized: true,
  },
  // Add this to ensure static files are handled correctly
  trailingSlash: true,
  distDir: 'build',
};

module.exports = nextConfig;
