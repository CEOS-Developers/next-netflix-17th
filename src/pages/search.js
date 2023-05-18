import { useEffect, useRef, useState } from "react";
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

// utils
import { useObserver } from "../../hooks/useObserver";
import useLocalStorage from "use-local-storage";

const Search = () => {
  // 바닥 ref를 위한 useRef 선언
  const bottomRef = useRef(null);
  const router = useRouter();

  const [scrollY] = useLocalStorage("movie_list_scroll", 0);
  const { search } = router.query;

  const {
    status: searchStatus,
    error: searchError,
    data: searchData,
  } = useGetMovieSearch(search);

  // fetchNextPage: 다음 페이지를 불러오는 함수
  const {
    data: movieData,
    error: movieError,
    fetchNextPage,
    isFetchingNextPage,
    status: movieStatus,
  } = useGetMovieLists();

  // useObserver로 넘겨줄 callback, entry로 들어오는 HTMLElement가
  // isIntersecting이라면 무한 스크롤을 위한 fetchNextPage가 실행됨
  const onIntersect = ([entry]) => entry.isIntersecting && fetchNextPage();

  useObserver({
    target: bottomRef,
    onIntersect,
  });

  return (
    <Layout>
      <Spacing size={44} />
      <Searchbar />
      <Spacing size={20} />
      <GenreListTitle type={1}>Top Searches</GenreListTitle>
      {/* search가 undefined인 경우, 기본 api에 따라 렌더링 */}
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

      {/* 바닥 ref를 위한 div를 만들어준다. */}
      <div ref={bottomRef} />
      {isFetchingNextPage && <Loading />}
    </Layout>
  );
};

export default Search;
