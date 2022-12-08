/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: 'https',
        hostname: "bulma.io",
      },
      {
        protocol: 'https',
        hostname: "www.adobe.com",
      },
      {
        protocol: 'https',
        hostname: "res.cloudinary.com",
      },
      {
        protocol: 'https',
        hostname: "asset.brandfetch.io",
      },
      {
        protocol: 'https',
        hostname: "cdn2.iconfinder.com",
      },
    ]
  },
}

module.exports = nextConfig
