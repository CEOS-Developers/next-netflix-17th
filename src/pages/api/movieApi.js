import { movieAxios } from ".";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const getUpcoming = async () => {
  return movieAxios.get(
    `movie/upcoming?api_key=${publicRuntimeConfig.PUBLIC_MOVIE_API}`
  );
};

export const getNowPlaying = async () => {
  return movieAxios.get(
    `movie/now_playing?api_key=${publicRuntimeConfig.PUBLIC_MOVIE_API}`
  );
};

export const getTopRated = async () => {
  return movieAxios.get(
    `movie/top_rated?api_key=${publicRuntimeConfig.PUBLIC_MOVIE_API}`
  );
};

export const getPopular = async () => {
  return movieAxios.get(
    `movie/popular?api_key=${publicRuntimeConfig.PUBLIC_MOVIE_API}`
  );
};
