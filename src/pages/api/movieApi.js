import { movieAxios } from ".";

export const getUpcoming = async () => {
  return movieAxios.get(`movie/upcoming/`);
};

export const getNowPlaying = async () => {
  return movieAxios.get(`movie/now_playing/`);
};

export const getTopRated = async () => {
  return movieAxios.get(`movie/top_rated/`);
};

export const getPopular = async () => {
  return movieAxios.get(`movie/popular/`);
};
