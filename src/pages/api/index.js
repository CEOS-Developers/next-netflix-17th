import axios from "axios";

export const movieAxios = axios.create({
  baseURL: "api/movie/",
});

export const serverAxios = axios.create({
  baseUrl: "http://localhost:3000/",
});
