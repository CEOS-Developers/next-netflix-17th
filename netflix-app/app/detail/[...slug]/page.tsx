'use client';
import React, { use } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import playButton from '@/assets/components/images/Button/play.svg';
import { fetchDetails } from '@/assets/api/requests';
import Link from 'next/link';

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
  const router = useRouter();

  const { getMovieDetail }: { getMovieDetail: MovieDetail } = use(getMovieDetails(params.slug[0]));
  return (
    <Container>
      <Header>
        <Poster>
          { getMovieDetail.poster_path !== undefined ? ( 
          <BackImg
            imageurl={`https://image.tmdb.org/t/p/original${getMovieDetail.poster_path}`}
          />) : (
          <BackImg
            imageurl="/not_found.jpg"
          />)}
          
          <BackButton
            onClick={() => {
              router.push('/home');
            }}
          >
            x
          </BackButton>
        </Poster>
        {getMovieDetail.id !== undefined ? (
        <Button>
          <PlayButton>
            <Link key={getMovieDetail.id} href={`/video/${getMovieDetail.id}`} className="link">
              <ButtonImage src={playButton.src} />
              <div className="text">{'Play'}</div>
            </Link>
          </PlayButton>
        </Button>) : ( <></>)}
        {getMovieDetail.title !== undefined ? (
          <>
        <Title>{getMovieDetail.title}</Title>
        <Preview>{getMovieDetail.overview}</Preview>
        </>) : ( <AlertText>존재하지 않는 ID입니다.</AlertText>)}
      </Header>
    </Container>
  );
};

const Button = styled.div`
  :hover {
    transform: scale(0.95);
    transition: transform 0.35s;
  }
`;
const Poster = styled.div`
  position: relative;
  display: flex;
`;
const BackButton = styled.button`
  position: absolute;
  border: none;
  top: 5%;
  left: 90%;
  background: none;
  color: white;
  font-size: 1.3rem;
  cursor: pointer;
`;
const PlayButton = styled.div`
  height: 45px;
  background: #c4c4c4;
  border-radius: 5.625px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 19px;
  margin: 13px 36px 0 36px;
  cursor: pointer;
  .link {
    text-decoration: none;
    display: flex;
  }
  .text {
    width: 39px;
    height: 30px;
    padding-left: 15px;
    font-weight: 600;
    font-size: 20.4624px;
    line-height: 30px;
    color: #000000;
  }
`;
const Title = styled.div`
  left: 32px;
  top: 505px;
  height: 50px;
  font-weight: 700;
  font-size: 26.7482px;
  line-height: 30px;
  letter-spacing: -0.0733945px;
  color: #ffffff;
  margin: 32px 0 0 32px;
`;
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
const BackImg = styled.div<{ imageurl: string }>`
  width: 375px;
  height: 415px;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.45) 0%,
      rgba(0, 0, 0, 0) 87.26%,
      #000000 100%
    ),
    url(${(props) => props.imageurl});
  background-size: cover;
  background-position: auto;
`;
const Preview = styled.div`
  width: 311px;
  height: 43px;
  font-size: 13px;
  line-height: 14px;
  font-weight: 400;
  letter-spacing: -0.0305636px;
  color: rgba(255, 255, 255, 0.83);
  margin: 24px 32px 0 32px;
`;
const ButtonImage = styled.img``;
const Container = styled.div``;

const AlertText = styled.p`
  height: 50px;
  font-weight: 700;
  font-size: 23px;
  color: #ffffff;
  text-align : center;
`;

export default DetailPage;
