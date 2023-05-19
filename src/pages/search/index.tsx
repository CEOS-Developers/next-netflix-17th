import Image from 'next/image';
import SearchCard from '@/components/SearchCard';
import { IMovie } from '@/interfaces/interfaces';
import { useEffect, useState } from 'react';
import { BASE_URL } from '@/utils/constants';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const Search = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [fetchPage, setFetchPage] = useState<number>(1);
  const [movieList, setMovieList] = useState([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCloseClick = () => {
    setInputValue('');
  };

  useEffect(() => {
    const fetchMovieList = async () =>
      await fetch(
        inputValue
          ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${inputValue}&page=${fetchPage}`
          : `${BASE_URL}/movie/popular?api_key=${API_KEY}`
      )
        .then((res) => res.json())
        .then((res) => setMovieList(res.results));

    fetchMovieList();
  }, [inputValue, fetchPage]);

  return (
    <div className="container">
      <div className="section-input">
        <Image
          src={`/icons/search2.svg`}
          width={20}
          height={20}
          alt="search"
        ></Image>
        <input
          value={inputValue}
          onChange={handleInputChange}
          type="text"
          placeholder="Search for movies ..."
          spellCheck={false}
        ></input>
        <Image
          src={`/icons/close.svg`}
          width={15}
          height={15}
          alt="close"
          onClick={handleCloseClick}
          style={{ cursor: 'pointer' }}
        ></Image>
      </div>

      <div className="section-result">
        <span>Top Searches</span>
        <div className="card-container">
          {movieList.map((movie: IMovie) => {
            return <SearchCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          background-color: black;
          display: flex;
          flex-direction: column;
          overflow-y: scroll;
        }

        .section-input {
          width: 100%;
          height: 52px;
          margin-top: 44px;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: var(--gray-bg-tag);
        }

        .section-input input {
          width: calc(100% - 40px - 20px - 15px);
          height: 52px;
          padding: 0;
          font-family: SF Pro Display;
          font-size: 16px;
          font-weight: 400;
          color: var(--gray-font-tag);
          background-color: transparent;
          border: none;

          &:focus {
            outline: none;
          }
        }

        .section-result {
          display: flex;
          flex-direction: column;
          background-color: black;
        }

        .section-result span {
          margin: 20px 10px;
          color: white;
          font-size: 26px;
          font-weight: 700;
        }

        .card-container {
          margin: -3px 0;
        }
      `}</style>
    </div>
  );
};

// export async function getServerSideProps() {
//   const { results:searchedMovies } = await (
//     await fetch(`${BASE_URL}/search/movie?api_key=${process.env.API_KEY}&query=${inputValue}&page=${fetchPage}`)
//   ).json();
//   return {
//     props: { searchedMovies },
//   };
// }

export default Search;
