import { useEffect } from "react";
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

import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

// 하단의 getStaticProps에서 받아온 데이터를 props로 받아옴.
export default function Home({
  previewList,
  nowPlayingList,
  topRatedList,
  popularList,
}) {
  const [ref, inView] = useInView();
  const [opened, setOpened] = useRecoilState(openState);
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
    const openTimeout = setTimeout(() => {
      setOpened(true);
    }, 4000);

    return () => clearTimeout(openTimeout);
  }, []);

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
        {/* DONE: image 배열 넘겨줄것 */}
        <MainContent
          type={"main"}
          imgList={renderGenre[0].data.map((item) => item.poster_path)}
        />
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

// TEST: getStaticProps vs getServerSideProps vs Incremental Static Regeneration (ISR)
// getStaticProps: 빌드타임에 실행되어서 빌드된 페이지에 props를 전달함. -> 빠른 렌더링 / static한 데이터
// getServerSideProps: 런타임에 실행되어서 요청이 들어올 때마다 props를 전달함. -> 느린 렌더링 / dynamic한 데이터
// Incremental Static Regeneration (ISR): 런타임 실행되지만, 특정 시간동안은 같은 요청이 들어와도 fetch하지 않음 -> 보통 렌더링 / dynamic한 데이터

// getStaticProps를 통해 데이터 받아온 후 고정 -> ISR과 같으므로 대체
// getServerSideProps를 통해 데이터 받아온 후 고정 -> ISR이 더 나으므로 대체

// DONE: ISR : getStaticProps + revalidate prop

// 중복로직 피하기 위해 fetchData function으로 분리
const fetchData = async (path) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${path}?api_key=${process.env.NEXT_PUBLIC_MOVIE_API}`
  );
  return response.data.results.map((item) => ({
    id: item.id,
    poster_path: item.poster_path,
  }));
};

// getStaticProps로 빌드시에 json데이터를 생성하여 props로 전달함.
// revalidate를 통해 24시간 이전의 요청은 json데이터로 대체, 이후의 요청시 새로운 json 데이터 생성
export async function getStaticProps() {
  const previewList = await fetchData("upcoming");
  const nowPlayingList = await fetchData("now_playing");
  const topRatedList = await fetchData("top_rated");
  const popularList = await fetchData("popular");

  return {
    props: {
      previewList,
      nowPlayingList,
      topRatedList,
      popularList,
    },
    revalidate: 60 * 60 * 24, // 24시간마다 재생성 (단위 : 초)
  };
}

/* original code */

// import { useEffect, useState } from "react";
// import Head from "next/head";
// import { Inter } from "next/font/google";
// import { useRecoilState } from "recoil";
// import { useInView } from "react-intersection-observer";

// import Header from "../../components/header/header";
// import GenreList from "../../components/genreList/genreList";
// import LottieFile from "../../components/lottieFile/lottieFile";
// import MainContent from "../../components/mainContent/mainContent";
// import ControlPanel from "../../components/controlPanel/controlPanel";

// import { openState } from "../../states/states";

// import {
//   getUpcoming,
//   getNowPlaying,
//   getTopRated,
//   getPopular,
// } from "./api/movieApi";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home({}) {
//   const [ref, inView] = useInView();
//   const [opened, setOpened] = useRecoilState(openState);
//   const [previewList, setPreviewList] = useState([]);
//   const [nowPlayingList, setNowPlayingList] = useState([]);
//   const [topRatedList, setTopRatedList] = useState([]);
//   const [popularList, setPopularList] = useState([]);
//   const renderGenre = [
//     {
//       id: 1,
//       type: 1,
//       name: "Previews",
//       data: previewList,
//     },
//     {
//       id: 2,
//       name: "Now Playing",
//       data: nowPlayingList,
//     },
//     {
//       id: 3,
//       name: "Top Rated",
//       data: topRatedList,
//     },
//     {
//       id: 4,
//       name: "Popular",
//       data: popularList,
//     },
//   ];

//   // 처음 페이지가 로드될 때, 4개의 장르에 대한 데이터를 불러옴.
//   // openState는 recoil으로 관리함으로서 페이지를 새로고침하지 않는 이상
//   // 다시 '/'의 url로 접속하여도 lottieFile이 렌더링 되지 않도록 함.
//   useEffect(() => {
//     getMovieData();
//     const openTimeout = setTimeout(() => {
//       setOpened(true);
//     }, 4000);

//     return () => clearTimeout(openTimeout);
//   }, []);

//   // fetchFunction : axios get하는 함수
//   // updateFunction: index.js에서 사용할 state를 업데이트하는 함수
//   // fetchFunction으로부터 data를 받아와서 필요한 data만 골라서 state에 저장함.
//   const fetchMovieData = async (fetchFunction, updateFunction) => {
//     try {
//       const res = await fetchFunction();
//       let resData = [];
//       res.data.results.map((item) => {
//         resData.push({
//           id: item.id,
//           poster_path: item.poster_path,
//           // title: item.title,
//           // backdrop_path: item.backdrop_path,
//         });
//       });
//       updateFunction(resData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getMovieData = async () => {
//     await fetchMovieData(getUpcoming, setPreviewList);
//     await fetchMovieData(getNowPlaying, setNowPlayingList);
//     await fetchMovieData(getTopRated, setTopRatedList);
//     await fetchMovieData(getPopular, setPopularList);
//   };

//   return (
//     <>
//       <Head>
//         <title>Hooking_Netflix</title>
//         <meta
//           name="description"
//           content="Netflix cloned by Hooking_FE"
//         />
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1"
//         />
//         <link
//           rel="icon"
//           href="/favicon.ico"
//         />
//       </Head>
//       <main className={`${inter.className}`}>
//         {!opened ? <LottieFile /> : <></>}
//         {/* Header의 render를 결정하기 위해 렌더링여부 감지되는 div */}
//         <div ref={ref} />
//         <Header render={inView ? 1 : 0} />
//         <MainContent type={"main"} />
//         <ControlPanel />
//         {renderGenre.map((item) => (
//           <GenreList
//             key={item.id}
//             type={item.type ?? 2}
//             name={item.name}
//             data={item.data}
//           />
//         ))}
//       </main>
//     </>
//   );
// }
