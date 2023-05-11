/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  publicRuntimeConfig: {
    PUBLIC_MOVIE_API: process.env.NEXT_PUBLIC_MOVIE_API,
    PUBLIC_MOVIE_TOKEN: process.env.NEXT_PUBLIC_MOVIE_TOKEN,
  },
  images: {
    domains: ["image.tmdb.org"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
