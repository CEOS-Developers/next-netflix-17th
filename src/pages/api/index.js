import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const movieAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
