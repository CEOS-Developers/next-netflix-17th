import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IMovie } from '@/interfaces/interfaces';
import { IMAGE_BASE_URL } from '@/utils/constants';
const FlatList = ({
  movieLists,
  round,
}: {
  movieLists: IMovie[];
  round: boolean;
}) => {
  return (
    <div className="container">
      {movieLists.map((movie, idx) => (
        <FlatListItem item={movie} key={idx} round={round} />
      ))}
      <style jsx>{`
        .container {
          display: flex;
          gap: 0.5rem;
          width: 40rem;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
};

const FlatListItem = ({ item, round }: { item: IMovie; round: boolean }) => {
  const { title, id, poster_path } = item;

  const size = round ? 'round' : 'default';

  const sizes = {
    default: {
      width: 100,
      height: 160,
    },
    round: {
      width: 104,
      height: 104,
    },
  };
  return (
    <Link href={`/detail/${id}?name=${title}`} key={id}>
      <Image
        src={`${IMAGE_BASE_URL}${poster_path}`}
        width={sizes[size].width}
        height={sizes[size].height}
        alt={title || 'movie_img'}
        style={{
          objectFit: 'cover',
          borderRadius: round ? '10rem' : 0,
        }}
      />
    </Link>
  );
};
export default FlatList;
