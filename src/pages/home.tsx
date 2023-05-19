// 메인 페이지
import FlatList from '../components/FlatList';
// import { WEB_SERVER_URL } from '@/utils/constants';
import Header from '../components/Header';
import MainImage from '../components/MainImage';
import PlayBar from '../components/PlayBar';

const Home = ({
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
  trendingMovies,
}: any) => {
  const sections = [
    {
      title: 'Now Playing',
      data: nowPlayingMovies,
    },
    {
      title: 'Top Rated',
      data: topRatedMovies,
    },
    {
      title: 'Popular',
      data: popularMovies,
    },
    {
      title: 'Upcoming',
      data: upcomingMovies,
    },
  ];
  return (
    <div className="container">
      <Header />
      <MainImage movies={trendingMovies} />
      <PlayBar />
      <div className="section">
        <h3>{'Previews'}</h3>
        <FlatList movieLists={upcomingMovies} round />
      </div>

      {sections.map(({ title, data }) => {
        return (
          <div className="section" key={title}>
            <h3>{title}</h3>
            <FlatList movieLists={data} round={false} />
          </div>
        );
      })}

      <style jsx>{`
        .container {
          width: 375px;
          height: 100%;
          background-color: black;
          overflow-y: scroll;
        }

        h3 {
          font-size: 21px;
          margin: 1.5rem 0rem 0.5rem 1rem;
          font-weight: 900;
          color: white;
        }

        .section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
      `}</style>
    </div>
  );
};

export async function getServerSideProps() {
  const { results: nowPlayingMovies } = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}`
    )
  ).json();

  const { results: popularMovies } = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    )
  ).json();

  const { results: topRatedMovies } = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`
    )
  ).json();

  const { results: upcomingMovies } = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}`
    )
  ).json();

  const { results: trendingMovies } = await (
    await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}`
    )
  ).json();

  return {
    props: {
      nowPlayingMovies,
      popularMovies,
      topRatedMovies,
      upcomingMovies,
      trendingMovies,
    },
  };
}

export default Home;
