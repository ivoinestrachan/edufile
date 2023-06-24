/** @type {import('next').NextConfig} */
const { withSuperjson } = require("next-superjson");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com","lh3.googleusercontent.com"],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = withSuperjson()(nextConfig);