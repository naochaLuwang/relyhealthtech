/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "relyhealthtech.com",
      "cdn.sanity.io",
      "website.relyth.com",
      "admin.relyhealthtech.com",
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "admin.relyhealthtech.com",
        port: "",
        pathname: "/gallery/event/**",
      },
    ],
    unoptimized: false,
  },
};

module.exports = nextConfig;
