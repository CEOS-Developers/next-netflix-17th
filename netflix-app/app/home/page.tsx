'use client';
import styled from 'styled-components';
import { Banner } from '@/assets/components/Home/Banner';
import { Button } from '@/assets/components/Home/Button';
import { Row } from '@/assets/components/Home/Row';
import {
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
  fetchUpComing,
} from '@/assets/api/requests';
import Header from '@/assets/components/Common/Header';

async function getMovieData() {
  const getBannerData = await fetchNowPlaying();

  const upComingData = await fetchUpComing();

  const nowPlayingData = await fetchNowPlaying();

  const topRatedData = await fetchTopRated();

  const popularData = await fetchPopular();

  return {
    getBannerData,
    upComingData,
    nowPlayingData,
    topRatedData,
    popularData,
  };
}

export default async function main() {
  const movies = await getMovieData();
  return (
    <Container>
      <Header />
      <Banner fetchUrl={movies.getBannerData} />
      <Button fetchId={movies.getBannerData[1].id} />
      <Rows>
        <Row title="Previews" id="Ps" movies={movies.upComingData} isRoundRow />
        <Row title="NowPlaying" id="NP" movies={movies.nowPlayingData} />
        <Row title="Top Rated" id="TR" movies={movies.topRatedData} />
        <Row title="Popular" id="Pr" movies={movies.popularData} />
      </Rows>
    </Container>
  );
}

const Container = styled.div`
  background-color: #000000;
`;

const Rows = styled.div`
  padding-bottom: 30px;
`;
