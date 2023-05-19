'use client';
import styled from 'styled-components';
import NetflixComponent from '@/assets/components/Landing/NetflixComponent';
import { useState } from 'react';
import { IntroText } from '@/assets/components/Landing/IntroText';
export default function app() {
  const [enter, setEnter] = useState(false);
  const handleEnterNetflix = () => {
    setEnter(true);
  };
  return (
    <Wrapper>
      {enter ? (
        <WrapLanding>
          <NetflixComponent />
        </WrapLanding>
      ) : (
        <WrapEntire onClick = {handleEnterNetflix}>
          <IntroText />
        </WrapEntire>
      )}
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  height: 100%;
`;

const WrapLanding = styled.div`
  width: 375px;
  height: 372px;
`;

const WrapEntire = styled.div`
  width : 100%;
  height : 100%;
  background : black;
  display : flex;
  align-items: center;
  justify-content : center;
  cursor : pointer;
  
`