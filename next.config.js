/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["s2.googleusercontent.com"],
  },
}

module.exports = nextConfig
