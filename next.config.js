/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["relyhealthtech.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
