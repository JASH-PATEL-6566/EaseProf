/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    EMAIL_SERVICE_ID: "easeprof_contactus",
    EMAIL_TEMPLATE_ID: "template_1plwyu4",
    EMAIL_PUBLIC_KEY: "fLPGwHB1FRsrCxeCk",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
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
      {
        protocol: 'https',
        hostname: "cdn.iconscout.com",
      },
    ]
  },
}

module.exports = nextConfig
