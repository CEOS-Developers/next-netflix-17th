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

  useEffect(() => {
    getMovieData();
    setTimeout(() => {
      setOpened(true);
    }, 4000);
  }, []);

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  const getMovieData = () => {
    getUpcoming()
      .then((res) => {
        res.data.results.map((item) => {
          setPreviewList((prev) => [
            ...prev,
            {
              id: item.id,
              poster_path: item.poster_path,
              // title: item.title,
              // backdrop_path: item.backdrop_path,
            },
          ]);
        });
      })
      .catch((err) => console.log(err));
    getNowPlaying().then((res) => {
      res.data.results.map((item) => {
        setNowPlayingList((prev) => [
          ...prev,
          {
            id: item.id,
            poster_path: item.poster_path,
            // title: item.title,
            // backdrop_path: item.backdrop_path,
          },
        ]);
      });
    });
    getTopRated().then((res) => {
      res.data.results.map((item) => {
        setTopRatedList((prev) => [
          ...prev,
          {
            id: item.id,
            poster_path: item.poster_path,
            // title: item.title,
            // backdrop_path: item.backdrop_path,
          },
        ]);
      });
    });
    getPopular().then((res) => {
      res.data.results.map((item) => {
        setPopularList((prev) => [
          ...prev,
          {
            id: item.id,
            poster_path: item.poster_path,
            // title: item.title,
            // backdrop_path: item.backdrop_path,
          },
        ]);
      });
    });
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
        <div ref={ref} />
        <Header render={inView ? 1 : 0} />
        <MainContent />
        <ControlPanel />
        <GenreList
          type={1}
          name="Previews"
          data={previewList}
        />
        <GenreList
          type={2}
          name="Now Playing"
          data={nowPlayingList}
        />
        <GenreList
          type={2}
          name="Top Rated"
          data={topRatedList}
        />
        <GenreList
          type={2}
          name="Popular"
          data={popularList}
        />
      </main>
    </>
  );
}
