import Image from "next/image";
import {
  GenreListContainer,
  GenreListContent,
  GenreListContentItem,
  GenreListTitle,
} from "./genreList.element";

const GenreList = ({ type, name }) => {
  return (
    <GenreListContainer type={type}>
      <GenreListTitle type={type}>{name}</GenreListTitle>
      <GenreListContent>
        <GenreListContentItem type={type}>
          <Image
            src="/dall-e-1.png"
            alt="img"
            width={100}
            height={type === 1 ? 100 : 175}
          />
        </GenreListContentItem>
        <GenreListContentItem type={type}>
          <Image
            src="/dall-e-1.png"
            alt="img"
            width={100}
            height={type === 1 ? 100 : 175}
          />
        </GenreListContentItem>
        <GenreListContentItem type={type}>
          <Image
            src="/dall-e-1.png"
            alt="img"
            width={100}
            height={type === 1 ? 100 : 175}
          />
        </GenreListContentItem>
        <GenreListContentItem type={type}>
          <Image
            src="/dall-e-1.png"
            alt="img"
            width={100}
            height={type === 1 ? 100 : 175}
          />
        </GenreListContentItem>
      </GenreListContent>
    </GenreListContainer>
  );
};

export default GenreList;
