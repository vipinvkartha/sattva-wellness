/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/sattva-wellness',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/sattva-wellness/',
}

module.exports = nextConfig
