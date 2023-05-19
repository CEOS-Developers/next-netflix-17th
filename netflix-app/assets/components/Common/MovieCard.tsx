'use client';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export default function MovieCard({movieData} : any) {
  return (
    <>
      <Movies>
        {movieData.map((movie: any) => (
          <WrapMovie key= {movie.id}>
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              width={146}
              height={76}
              alt={movie.title}
            />
            <WrapTitle href={`/detail/${movie.id}`}>
              <MovieTitle>{movie.title}</MovieTitle>
            </WrapTitle>
          </WrapMovie>
        ))}
      </Movies>
    </>
  );
}
const WrapTitle = styled(Link)`
  cursor: pointer;
  text-decoration-line: none;
  margin-left: 10px;
`;
const WrapMovie = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 375px;
  height: 76px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #424242;
`;
const MovieTitle = styled.p`
  color: white;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 180px;
`;
const Movies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom : 60px;
`;