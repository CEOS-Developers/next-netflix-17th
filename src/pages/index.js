import Head from "next/head";
import { Inter } from "next/font/google";
import GenreList from "../../components/genreList/genreList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
        <>testtest123</>
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
