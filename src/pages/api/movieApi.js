import { movieAxios } from ".";
import axios from "axios";

export const getUpcoming = async () => {
  return movieAxios.get(`upcoming`);
};

export const getNowPlaying = async () => {
  return movieAxios.get(`now_playing`);
};

// getServerSideProps) 외부 api 주소로 요청
export const getPrefetchNowPlaying = async () => {
  const { data } = await axios.get(
    `http://api.themoviedb.org/3/movie/now_playing?page=1&api_key=${process.env.NEXT_PUBLIC_MOVIE_API}`
  );
  return data;
};

// getServerSideProps) 외부 api 주소로 요청
export const getPrefetchSearchMovie = async (query = "test") => {
  const { data } = await axios.get(
    `http://api.themoviedb.org/3/search/movie&api_key=${process.env.NEXT_PUBLIC_MOVIE_API}?query=${query}`
  );

  return data;
};

export const getNowPlayingWithPage = async (page = { pageParam: 1 }) => {
  const { data } = await fetch(
    `http://127.0.0.1:3000/api/movie/now_playing/:${page}`
  );
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
