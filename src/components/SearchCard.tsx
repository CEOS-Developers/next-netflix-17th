import Image from 'next/image';
import Link from 'next/link';
import {
  flexCenter,
  transformScale,
  textOverflowEllipsis,
} from '@/styles/theme';
import { IMovie } from '@/interfaces/interfaces';
import { IMAGE_BASE_URL } from '@/utils/constants';

interface SearchCardProps {
  movie: IMovie;
}

const SearchCard = ({ movie }: SearchCardProps) => {
  return (
    <Link href={`detail/${movie.id}`}>
      <div className="wrapper">
        <Image
          src={`${IMAGE_BASE_URL}/${movie.poster_path}`}
          width={146}
          height={76}
          alt="image"
          style={{ objectFit: 'cover' }}
        />
        <span>{movie.title}</span>
        <div className="iconWrapper">
          <Image
            src={'/icons/play_circle.svg'}
            width={28}
            height={28}
            alt="play_circle"
          />
        </div>

        <style jsx>{`
          .wrapper {
            width: 100%;
            height: 76px;
            margin: 3px 0;
            display: flex;
            background-color: var(--gray-bg-tag);

            &:hover {
              ${transformScale}
              transform: scale(1.01);
              -webkit-transform: scale(1.01);
            }
          }

          .iconWrapper {
            ${flexCenter}
            margin: 0 12px 0 auto;
          }

          span {
            width: calc(100% - 146px - 28px - 12px);
            margin: auto 0;
            padding: 0 20px;
            font-size: 14.72px;
            color: white;
            ${textOverflowEllipsis}
          }
        `}</style>
      </div>
    </Link>
  );
};

export default SearchCard;
