import { searchMovie, getNowPlayingWithPage } from "./movieApi";
import { useInfiniteQuery } from "react-query";
import { queryKeys, maxPageNum } from "../../assets/constants";

export const useGetMovieSearch = (search) => {
  const queryFn = async (search, searchPage) => {
    const { data } = await searchMovie(search, searchPage);
    return { data, searchPage: searchPage };
  };

  return useInfiniteQuery(
    [queryKeys.movieSearch, search],
    ({ pageParam = 1 }) => queryFn(search, pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.searchPage + 1 || undefined,
    }
  );
};

export const useGetMovieLists = () => {
  return useInfiniteQuery([queryKeys.movieList], getNowPlayingWithPage, {
    getNextPageParam: (latestPage) => {
      // 마지막 페이지인 경우 종료
      if (latestPage === maxPageNum) return false;
      return latestPage.page + 1;
    },
  });
};
