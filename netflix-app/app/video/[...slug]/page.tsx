'use client';
import React, { use, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { fetchVideos, fetchDetails } from '@/assets/api/requests';
import { ShowDetail } from '@/assets/components/Common/ShowDetail';
import { Frame } from '@/assets/components/Video/Frame';
async function getMovieVideo(movieId: string) {
  const getVideo = await fetchVideos(movieId);

  return { getVideo };
}

async function getMovieDetails(movieId: string) {
  const getMovieDetail = await fetchDetails(movieId);

  return { getMovieDetail };
}

interface VideoResult {
  key: string;
}

interface MovieInfo {
  title: string;
  overview: string;
}

interface MovieVideo {
  getVideo: {
    results: VideoResult[];
  };
}

interface DetailPageProps {
  params: {
    slug: string[];
  };
}

const DetailPage: React.FC<DetailPageProps> = ({ params }) => {
  const router = useRouter();
  const [movieDetail, setMovieDetail] = useState<MovieVideo | null>(null);
  const [movieInfo, setMovieInfo] = useState<MovieInfo | null>(null);
  const [movieKey, setMovieKey] = useState<string>('');

  useEffect(() => {
    async function fetchInfo() {
      const getMovieDetail = await getMovieVideo(params.slug[0]);
      setMovieDetail(getMovieDetail);
      setMovieKey(getMovieDetail.getVideo.results[0].key);
    }
    fetchInfo();
    async function fetchData() {
      const getMovieInfo = await getMovieDetails(params.slug[0]);
      setMovieInfo(getMovieInfo.getMovieDetail);
    }
    fetchData();
  }, []);

  if (!movieInfo) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Header>
        <Frame movieKey = {movieKey}/>
        <ShowDetail movieInfo = {movieInfo}/>
      </Header>
    </Container>
  );
};

const Header = styled.div`
  width: 375px;
  height: 415px;
  padding-top: 10px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(0, 0, 0, 0) 87.26%,
    #000000 100%
  );
`;

const Container = styled.div``;

export default DetailPage;
