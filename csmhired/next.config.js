/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // assetPrefix: './', // req for css stylesheet paths to work - enable this when using npm export
  trailingSlash: true,
}

module.exports = nextConfig
