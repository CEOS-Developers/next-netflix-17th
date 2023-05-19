import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// components
import Layout from "../../components/layout";
import Searchbar from "../../components/searchbar/searchbar";
import MovieCard from "../../components/movieCard/movieCard";
import { GenreListTitle } from "../../components/genreList/genreList.element";
import Spacing from "../../components/spacing";
import Loading from "../../components/movieCard/skeleton";

// api
import { useGetMovieSearch, useGetMovieLists } from "./api/query";
import { getNowPlayingWithPage } from "./api/movieApi";

// utils
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { queryKeys } from "../assets/constants";
import { useObserver } from "../../hooks/useObserver";
import useLocalStorage from "use-local-storage";
import { serverAxios } from "./api";

const Search = (props) => {
  console.log("props", props);

  // TODO: 데이터 넘어오는 것 확인
  console.log("props", props.dehydratedState.queries);
  const bottomRef = useRef(null);
  const router = useRouter();

  const [scrollY] = useLocalStorage("movie_list_scroll", 0);
  const { search } = router.query;

  const {
    status: searchStatus,
    error: searchError,
    data: searchData,
  } = useGetMovieSearch(search);

  const {
    data: movieData,
    error: movieError,
    fetchNextPage,
    isFetchingNextPage,
    status: movieStatus,
  } = useGetMovieLists();

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
      {/* search가 undefined인 경우, 기본 api에 따라 렌더링 */}

      {/* TODO: 데이터 잘 넘어오는지 확인하기 위해 주석처리해놨습니다
      {search === undefined ? (
        <>
          {movieStatus === "loading" && <Loading />}
          {movieStatus === "error" && <p>{movieError.message}</p>}
          {movieStatus === "success" &&
            movieData.pages.map((page) =>
              page.results.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id} // 상세 페이지 전환용 id
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

              */}

      {/* 바닥 ref를 위한 div를 만들어준다. */}
      <div ref={bottomRef} />
      {isFetchingNextPage && <Loading />}
    </Layout>
  );
};

export default Search;

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  const getPrefetchNowPlaying = async () => {
    const { data } = await fetch(
      `http://127.0.0.1:3000/api/movie/now_playing/1`
    );
    return data;
  };

  await queryClient.prefetchInfiniteQuery(
    queryKeys.movieList,
    () => getPrefetchNowPlaying(),
    { staleTime: 1000 }
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
