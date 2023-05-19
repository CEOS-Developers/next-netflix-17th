import styled from "styled-components";
import { BackButton } from '@/assets/components/Common/BackButton';
export const Poster = ({getMovieDetail} : any) =>{
  return (
    <PosterWrapper>
      { getMovieDetail.poster_path !== undefined ? ( 
      <BackImg
        imageurl={`https://image.tmdb.org/t/p/original${getMovieDetail.poster_path}`}
      />) : (
      <BackImg
        imageurl="/not_found.jpg"
      />)}
      <BackButton/>
    </PosterWrapper>
  )
}

const PosterWrapper = styled.div`
  position: relative;
  display: flex;
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