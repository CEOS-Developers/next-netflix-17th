import { useEffect, useState } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import { useRecoilState } from "recoil";
import { useInView } from "react-intersection-observer";

import Header from "../../components/header/header";
import GenreList from "../../components/genreList/genreList";
import LottieFile from "../../components/lottieFile/lottieFile";
import MainContent from "../../components/mainContent/mainContent";
import ControlPanel from "../../components/controlPanel/controlPanel";

import { openState } from "../../states/states";

import {
  getUpcoming,
  getNowPlaying,
  getTopRated,
  getPopular,
} from "./api/movieApi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [ref, inView] = useInView();
  const [opened, setOpened] = useRecoilState(openState);
  const [previewList, setPreviewList] = useState([]);
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const [topRatedList, setTopRatedList] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const renderGenre = [
    {
      id: 1,
      type: 1,
      name: "Previews",
      data: previewList,
    },
    {
      id: 2,
      name: "Now Playing",
      data: nowPlayingList,
    },
    {
      id: 3,
      name: "Top Rated",
      data: topRatedList,
    },
    {
      id: 4,
      name: "Popular",
      data: popularList,
    },
  ];

  // 처음 페이지가 로드될 때, 4개의 장르에 대한 데이터를 불러옴.
  // openState는 recoil으로 관리함으로서 페이지를 새로고침하지 않는 이상
  // 다시 '/'의 url로 접속하여도 lottieFile이 렌더링 되지 않도록 함.
  useEffect(() => {
    getMovieData();
    const openTimeout = setTimeout(() => {
      setOpened(true);
    }, 4000);
    return () => clearTimeout(openTimeout);
  }, []);

  // fetchFunction : axios get하는 함수
  // updateFunction: index.js에서 사용할 state를 업데이트하는 함수
  // fetchFunction으로부터 data를 받아와서 필요한 data만 골라서 state에 저장함.
  const fetchMovieData = async (fetchFunction, updateFunction) => {
    try {
      const res = await fetchFunction();
      const movieData = res.data.results.map((item) => ({
        id: item.id,
        poster_path: item.poster_path,
        // title: item.title,
        // backdrop_path: item.backdrop_path,
      }));
      updateFunction((prev) => [...prev, ...movieData]);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieData = async () => {
    await fetchMovieData(getUpcoming, setPreviewList);
    await fetchMovieData(getNowPlaying, setNowPlayingList);
    await fetchMovieData(getTopRated, setTopRatedList);
    await fetchMovieData(getPopular, setPopularList);
  };

  return (
    <>
      <Head>
        <title>Hooking_Netflix</title>
        <meta
          name="description"
          content="Netflix cloned by Hooking_FE"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className={`${inter.className}`}>
        {!opened ? <LottieFile /> : <></>}
        {/* Header의 render를 결정하기 위해 렌더링여부 감지되는 div */}
        <div ref={ref} />
        <Header render={inView ? 1 : 0} />
        <MainContent type={"main"} />
        <ControlPanel />
        {renderGenre.map((item) => (
          <GenreList
            key={item.id}
            type={item.type ?? 2}
            name={item.name}
            data={item.data}
          />
        ))}
      </main>
    </>
  );
}
