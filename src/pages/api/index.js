import axios from "axios";

export const movieAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
