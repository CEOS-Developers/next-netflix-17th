import Image from "next/image";
import {
  GenreListContainer,
  GenreListContent,
  GenreListContentItem,
  GenreListTitle,
} from "./genreList.element";

// type: 1 => Preview, 2 => 나머지
// name: List 제목, data: List에 들어갈 데이터
const GenreList = ({ type, name, data }) => {
  let imgSrc = "https://image.tmdb.org/t/p/w500";
  return (
    data && (
      <GenreListContainer type={type}>
        <GenreListTitle type={type}>{name}</GenreListTitle>
        <GenreListContent>
          {data.map((item) => (
            <GenreListContentItem
              href={`/detail/${item.id}`}
              key={item.id}
              type={type}
            >
              {/* Image src의 주소가 동적인 경우(외부 웹사이트인경우)
              placeholder=blur적용시 blurDataURL을 제공해주어야 함
              */}
              <Image
                src={imgSrc + item.poster_path}
                alt="GenreListImage"
                width={100}
                height={type === 1 ? 100 : 175}
                loading="eager"
                placeholder="blur"
                blurDataURL="https://via.placeholder.com/100"
                style={{ objectFit: "cover" }}
              />
            </GenreListContentItem>
          ))}
        </GenreListContent>
      </GenreListContainer>
    )
  );
};

export default GenreList;
