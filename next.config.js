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
  // Add webpack configuration for CSS
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });
    return config;
  },
};

module.exports = nextConfig;
