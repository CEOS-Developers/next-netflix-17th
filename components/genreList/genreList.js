import Image from "next/image";
import {
  GenreListContainer,
  GenreListContent,
  GenreListContentItem,
  GenreListTitle,
} from "./genreList.element";

const GenreList = ({ type, name, data }) => {
  let imgSrc = "https://image.tmdb.org/t/p/w500";
  return (
    data && (
      <GenreListContainer type={type}>
        <GenreListTitle type={type}>{name}</GenreListTitle>
        <GenreListContent>
          {data.map((item) => (
            <GenreListContentItem
              key={item.id}
              type={type}
            >
              <Image
                src={imgSrc + item.poster_path}
                alt="img"
                width={100}
                height={type === 1 ? 100 : 175}
              />
            </GenreListContentItem>
          ))}
        </GenreListContent>
      </GenreListContainer>
    )
  );
};

export default GenreList;
