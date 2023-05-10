import Head from "next/head";
import { Inter } from "next/font/google";
import GenreList from "../../components/genreList/genreList";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { openState } from "../../states/states";
import LottieFile from "../../components/lottieFile/lottieFile";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [opened, setOpened] = useRecoilState(openState);
  useEffect(() => {
    setTimeout(() => {
      setOpened(true);
    }, 4000);
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
        <GenreList
          type={1}
          name="Previews"
        />
        <GenreList
          type={2}
          name="Now Playing"
        />
        <GenreList
          type={2}
          name="Top Rated"
        />
        <GenreList
          type={2}
          name="Popular"
        />
      </main>
    </>
  );
}
