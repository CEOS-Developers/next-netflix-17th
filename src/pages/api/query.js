import { searchMovie, getNowPlayingWithPage } from "./movieApi";
import { useInfiniteQuery } from "react-query";
import { queryKeys, maxPageNum } from "../../assets/constants";

// This query was not prefetched on the server and will not start
// fetching until on the client, both patterns are fine to mix
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

// This query will be prefetch
export const useGetMovieLists = () => {
  return useInfiniteQuery([queryKeys.movieList], getNowPlayingWithPage, {
    getNextPageParam: (latestPage) => {
      // TODO: 데이터 잘 넘어오는지 확인하기 위해 주석처리함
      // 마지막 페이지인 경우 종료
      //if (latestPage > maxPageNum) return false;
      //return latestPage.page + 1;
      return 1;
    },
    staleTime: 1000, // 어느 시점에서 stale 상태로 바꿀지 결정
  });
};
