//import httpClient from './httpClient';

const baseURL = 'https://api.themoviedb.org/3';

export const getAnimations = async () => {
  const response = await fetch(
    `${baseURL}/discover/tv?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}&with_genres=16`,
    {
      cache: 'no-store',
    },
  );
  const data = await response.json();
  return data.results;
};

export const getTopRatedTvShows = async () => {
  const response = await fetch(
    `${baseURL}/tv/top_rated?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}`,
    {
      cache: 'no-store',
    },
  );
  const data = await response.json();
  return data.results;
};

/*
export const getAnimations = async () => {
  return httpClient
    .get('/discover/tv', { params: { with_genres: 16 } })
    .then(res => res.data.results);
};

export const getTopRatedTvShows = async () => {
  return httpClient.get('/tv/top_rated').then(res => res.data.results);
};
*/
