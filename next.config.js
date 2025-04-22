/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig; 