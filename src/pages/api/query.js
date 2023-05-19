import { searchMovie, getPrefetchNowPlaying } from "./movieApi";
import { useInfiniteQuery } from "react-query";
import { queryKeys, maxPageNum } from "../../assets/constants";

// This query was not prefetched on the server and will not start
// fetching until on the client, both patterns are fine to mix
export const useGetMovieSearch = (search) =>
  useInfiniteQuery(
    [queryKeys.movieSearch, search],
    ({ pageParam = 1 }) => searchMovie(search, pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.searchPage + 1 || undefined,
    }
  );

// This query will be prefetch
export const useGetMovieLists = () =>
  useInfiniteQuery([queryKeys.movieList], getPrefetchNowPlaying, {
    getNextPageParam: (latestPage) => {
      if (latestPage > maxPageNum) return false;
      return latestPage.page + 1;
    },
    staleTime: 1000,
  });
