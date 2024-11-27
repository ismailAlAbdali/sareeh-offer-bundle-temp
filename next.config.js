/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: false, // Disable SWC minification to avoid build issues
};

module.exports = nextConfig;