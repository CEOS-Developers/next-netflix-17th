'use client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function NotFound() {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      window.location.replace('/');
    }, seconds * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return(
    <>
      <Container>
        <Header>
          <Poster>
            <BackImg
              imageurl="/not_found.jpg"
            />
          </Poster>
          <Title>잘못된 페이지입니다 <br/>{seconds}초후에 메인페이지로 이동합니다.</Title>
        </Header>
      </Container>
    </>
  );
}


const Poster = styled.div`
  position: relative;
  display: flex;
`;
const Title = styled.div`
  height: 50px;
  font-weight: 700;
  font-size: 23px;
  color: #ffffff;
  text-align : center;
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
const Container = styled.div``;
