'use client';
import React, { use } from 'react';
import styled from 'styled-components';
import { fetchDetails } from '@/assets/api/requests';
import { ShowDetail } from '@/assets/components/Common/ShowDetail';
import { PlayButton } from '@/assets/components/Detail/PlayButton';
import { Poster } from '@/assets/components/Detail/Poster';
interface MovieDetail {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
}

async function getMovieDetails(movieId: string) {
  const getMovieDetail = await fetchDetails(movieId);
  return { getMovieDetail };
}

interface DetailPageProps {
  params: { slug: string[] };
}

const DetailPage: React.FC<DetailPageProps> = ({ params }) => {
  const { getMovieDetail }: { getMovieDetail: MovieDetail } = use(getMovieDetails(params.slug[0]));
  return (
    <>
      <Header>
        <Poster getMovieDetail = {getMovieDetail} />
        <PlayButton getMovieDetail = {getMovieDetail}/>
        <ShowDetail movieInfo = {getMovieDetail} />
      </Header>
    </>
  );
};

const Header = styled.div`
  width: 375px;
  height: 415px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(0, 0, 0, 0) 87.26%,
    #000000 100%
  );
`;

export default DetailPage;