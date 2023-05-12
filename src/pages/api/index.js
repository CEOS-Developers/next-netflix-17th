import axios from "axios";

export const movieAxios = axios.create({
  baseURL: "api/movie/",
});
