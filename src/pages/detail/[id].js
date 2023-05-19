// [id] 로 동적 라우팅 진행. /detail/{영화 id}로 접근 가능
import { useEffect } from "react";
import { useRouter } from "next/router";

import MainContent from "../../../components/mainContent/mainContent";
import { CustomPlayButton } from "../../../components/controlPanel/controlPanel";

import {
  DetailPageBtnContainer,
  DetailPageContainer,
} from "@/styles/DetailPage.element";
import axios from "axios";
import MovieData from "../../../components/MovieData/movieData";

const fetchData = async (path) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${path}?api_key=${process.env.NEXT_PUBLIC_MOVIE_API}`
  );
  return response.data.results;
};

// returnData : serverside에서 요청해서 받아온 데이터
// 서버에서 받아와서 렌더링하기 전까지 보여줄 데이터가 없게되긴함. -> getStaticProps로 해결
const DetailPage = ({ returnData }) => {
  const router = useRouter();
  // being loaded
  if (router.isFallback) {
    return (
      <DetailPageContainer>
        <MainContent />
        <DetailPageBtnContainer>
          <CustomPlayButton />
        </DetailPageBtnContainer>
        <MovieData fallback={true} />
      </DetailPageContainer>
    );
  }
  return (
    <DetailPageContainer>
      <MainContent imgSrc={returnData.poster_path} />
      <DetailPageBtnContainer>
        <CustomPlayButton />
      </DetailPageBtnContainer>
      <MovieData data={returnData} />
    </DetailPageContainer>
  );
};

// TODO: getStaticProps와 getStaticPath로 변경하기!!
export const getStaticPaths = async () => {
  let paths = [];
  const categories = ["popular", "top_rated", "now_playing", "upcoming"];

  await Promise.all(
    categories.map(async (category) => {
      const data = await fetchData(category);
      data.forEach((item) => {
        paths.push({ params: { id: item.id.toString() } });
      });
    })
  );

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  let returnData = {};
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_MOVIE_API}`
    )
    .then((res) => {
      console.log(res);
      returnData.id = id;
      returnData.title = res.data.title;
      returnData.overview = res.data.overview;
      returnData.poster_path = res.data.poster_path;
      returnData.release_date = res.data.release_date;
      returnData.adult = res.data.adult;
    });
  return {
    props: {
      returnData,
    },
  };
};

/****** original code ******/
// getServerSideProps를 통해 서버의 api를 미리 호출할 때에는
// 내부 url을 rewrites할 수 없음. 즉, 정확한 api주소를 입력해야함.
// 어짜피 서버단에서 요청을 보내는 것이기 때문에 Network탭에서 해당 내용을 확인할 수 없음
// export async function getServerSideProps(context) {
//   const id = context.params.id;
//   let returnData = {};
//   await axios
//     .get(
//       `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_MOVIE_API}`
//     )
//     .then((res) => {
//       returnData.id = id;
//       returnData.title = res.data.title;
//       returnData.overview = res.data.overview;
//       returnData.poster_path = res.data.poster_path;
//       returnData.release_date = res.data.release_date;
//       returnData.adult = res.data.adult;
//     })
//     .catch((err) => console.log(err));
//   return {
//     props: {
//       returnData: returnData,
//     },
//   };
// }

export default DetailPage;
