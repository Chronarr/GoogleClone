/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["s2.googleusercontent.com", "encrypted-tbn0.gstatic.com"],
  },
}

module.exports = nextConfig
