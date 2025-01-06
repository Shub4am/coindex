/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.coingecko.com"],
    remotePatterns: [
      {
        hostname: "coin-images.coingecko.com",
      },
    ],
  },
};

module.exports = nextConfig;
