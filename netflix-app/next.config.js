/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode : false,
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['image.tmdb.org'],
  },
};

module.exports = nextConfig;
