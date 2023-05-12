import { movieAxios } from ".";

export const getUpcoming = async () => {
  return movieAxios.get(`upcoming`);
};

export const getNowPlaying = async () => {
  return movieAxios.get(`now_playing`);
};

export const getTopRated = async () => {
  return movieAxios.get(`top_rated`);
};

export const getPopular = async () => {
  return movieAxios.get(`popular`);
};
