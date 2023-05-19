/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {

  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/api/movies/trending',
        destination: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
      },
      {
        source: '/api/movies/:type',
        destination: `https://api.themoviedb.org/3/movie/:type?api_key=${API_KEY}`,
      },

    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',

        pathname: '/t/p/w500/**',
      },
       {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',

        pathname: '/t/p/original/**',
      }
    ],
  },


};

module.exports = nextConfig;
