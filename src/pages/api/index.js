import axios from "axios";

// 실제 사용할 axios 인스턴스
// next.config.js에서 rewrites를 통해 /api/movie/...로 url요청이 들어오면
// https://api.themoviedb...으로 연결해줌
// **caution** : clientSide에서 요청 보내는 것만 rewrites가 적용됨.
export const movieAxios = axios.create({
  baseURL: "api/movie/",
});
