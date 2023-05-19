import Lottie from 'lottie-react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import animationData from './NetflixLogo.json';
import { useEffect } from 'react';

export const NetflixComponent = () => {
  const router = useRouter();
  useEffect(() => {
    const goPage = setTimeout(() => {
      router.push('/home');
    }, 3800);
  }, []);
  return (
    <Wrapper>
      <Lottie animationData={animationData} loop={false} />
      <HiddenAudio id="audio" autoPlay controls>
        <source src="/netflix_intro.mp3" type="audio/mp3"/>
      </HiddenAudio>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 372px;
`;
const HiddenAudio = styled.audio`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
`;
export default NetflixComponent;
