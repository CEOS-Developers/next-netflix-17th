import { movieAxios } from ".";

export const getUpcoming = async () => {
  return movieAxios.get(`upcoming`);
};

export const getNowPlaying = async () => {
  return movieAxios.get(`now_playing`);
};

export const getNowPlayingWithPage = async (page) => {
  const { data } = await movieAxios.get(
    `movie/now_playing?page=${page.pageParam}`
  );
  return data;
};

export const searchMovie = async (query) => {
  return movieAxios.get(`search/movie?query=${query}`);
};

export const getTopRated = async () => {
  return movieAxios.get(`top_rated`);
};

export const getPopular = async () => {
  return movieAxios.get(`popular`);
};
