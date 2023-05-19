const {
  MovieDataContainer,
  MovieDataTitle,
  MovieDataContent,
} = require("./movieData.element");

// 상위 컴포넌트인 [id].js에서 호출됨
// data: 서버에서 받아온 데이터 영화 제목 / 청불 여부 / 줄거리 / 개봉일
const MovieData = ({ data }) => {
  return (
    <MovieDataContainer>
      <MovieDataTitle adult={data.adult ? 1 : 0}>{data.title}</MovieDataTitle>
      <MovieDataContent>{data.overview}</MovieDataContent>
    </MovieDataContainer>
  );
};

export default MovieData;
