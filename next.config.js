/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.imgur.com"],
  },
  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig;
