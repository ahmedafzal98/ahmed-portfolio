/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // Compression
  compress: true,
  // Performance optimizations
  poweredByHeader: false,
  // Optimize fonts
  optimizeFonts: true,
  // Note: avoid experimental optimizeCss in dev if it slows startup/compilation
}

module.exports = nextConfig

