import { movieAxios } from ".";

export const getUpcoming = async () => {
  return movieAxios.get(`upcoming`);
};

export const getNowPlaying = async () => {
  return movieAxios.get(`now_playing`);
};

export const getNowPlayingWithPage = async (page = { pageParam: 1 }) => {
  const { data } = await fetch(
    `http://127.0.0.1:3000/api/movie/now_playing/:${page}`
  );
  console.log("page data", data);
  //const { data } = await movieAxios.get(`now_playing?page=${page.pageParam}`);
  return data;
};

export const searchMovie = async (query = "test") => {
  return movieAxios.get(`search/:${query}`);
};

export const getTopRated = async () => {
  return movieAxios.get(`top_rated`);
};

export const getPopular = async () => {
  return movieAxios.get(`popular`);
};
