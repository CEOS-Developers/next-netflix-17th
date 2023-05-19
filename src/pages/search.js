import { useRef } from "react";
import { useRouter } from "next/router";

// components
import Layout from "../../components/layout";
import Searchbar from "../../components/searchbar/searchbar";
import MovieCard from "../../components/movieCard/movieCard";
import { GenreListTitle } from "../../components/genreList/genreList.element";
import Spacing from "../../components/spacing";
import Loading from "../../components/movieCard/skeleton";

// api
import { useGetMovieSearch, useGetMovieLists } from "./api/query";
import { getPrefetchNowPlaying } from "./api/movieApi";

// utils
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { queryKeys } from "../assets/constants";
import { useObserver } from "../../hooks/useObserver";
import useLocalStorage from "use-local-storage";

const Search = ({ movieList }) => {
  const bottomRef = useRef(null);
  const router = useRouter();

  // const [scrollY] = useLocalStorage("movie_list_scroll", 0);
  const { search } = router.query;

  // ssr로 받아온 데이터를 prefetch
  const {
    data: movieData,
    error: movieError,
    fetchNextPage,
    isFetchingNextPage,
    status: movieStatus,
  } = useGetMovieLists();

  // 키워드 검색 api를 통해서 실시간 검색 구현
  const {
    status: searchStatus,
    error: searchError,
    data: searchData,
  } = useGetMovieSearch(search);

  const onIntersect = ([entry]) => entry.isIntersecting && fetchNextPage();

  useObserver({
    target: bottomRef,
    onIntersect,
  });

  return (
    <Layout
      title="search"
      description="search"
    >
      <Spacing size={44} />
      <Searchbar />
      <Spacing size={20} />
      <GenreListTitle type={1}>Top Searches</GenreListTitle>
      {search === undefined ? (
        <>
          {movieStatus === "loading" && <Loading />}
          {movieStatus === "error" && <p>{movieError.message}</p>}
          {movieStatus === "success" &&
            movieData.pages.map((page) =>
              page.results.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster={movie.poster_path}
                />
              ))
            )}
        </>
      ) : (
        <>
          {searchStatus === "loading" && <Loading />}
          {searchStatus === "error" && <p>{searchError.message}</p>}
          {searchStatus === "success" &&
            searchData.pages.map((page) =>
              page.data.results.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster={movie.poster_path}
                />
              ))
            )}
        </>
      )}

      <div ref={bottomRef} />
      {isFetchingNextPage && <Loading />}
    </Layout>
  );
};

export default Search;

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(
    queryKeys.movieList,
    getPrefetchNowPlaying,
    { staleTime: 1000 }
  );

  return {
    props: {
      movieList: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
