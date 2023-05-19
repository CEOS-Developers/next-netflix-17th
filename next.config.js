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
  async rewrites() {
    return [
      {
        source: "/api/movie/search/:query",
        destination: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_MOVIE_API}&query=:query`,
      },
      {
        source: "/api/movie/now_playing/:page",
        destination: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_MOVIE_API}&page=:page`,
      },
      {
        source: "/api/movie/:path",
        destination: `https://api.themoviedb.org/3/movie/:path?api_key=${process.env.NEXT_PUBLIC_MOVIE_API}`,
      },
    ];
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
