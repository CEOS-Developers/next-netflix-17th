// 메인 페이지
import BannerImage from '@/components/BannerImage';
import { IMovie } from '@/interfaces/interfaces';
import Image from 'next/image';
import { BASE_URL } from '../../utils/constants';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
const Detail = ({ moive }: { moive: IMovie }) => {
  const { name, poster_path, overview } = moive;
  const router = useRouter();
  const { query } = router;

  const youtubeId = useRef(null);

  const getYoutubeLink = async () => {
    let results = await (
      await fetch(
        `https://www.googleapis.com/youtube/v3/search?type=video&q=${query.name}&key=${process.env.YOUTUBE_API_KEY}`
      )
    ).json();

    youtubeId.current = results.items[0].id.videoId;

    console.log(results, youtubeId.current);
  };

  useEffect(() => {
    getYoutubeLink();
  }, []);

  const handleClickPlayBtn = () => {
    if (youtubeId.current) {
      window.open(`https://www.youtube.com/watch?v=${youtubeId.current}`);
    }
  };
  return (
    <div className="container">
      <BannerImage poster_path={poster_path} />
      <button className="play-button">
        <Image
          src={'/icons/play_arrow.svg'}
          width={24}
          height={24}
          alt="play_arrow"
        />{' '}
        <span className="play-button__text" onClick={handleClickPlayBtn}>
          Play
        </span>
      </button>
      <article>
        <h3>Previews</h3>

        <span>{overview}</span>
      </article>
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 32px;
        }
        article {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          margin: 0;
          padding: 0;
        }
        .play-button {
          width: 100%;
          height: 45px;
          border: 0px;
          outline: 0px;
          background-color: rgb(196, 196, 196);
          border-radius: 5.625px;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          gap: 15px;
          margin-top: 13px;
          cursor: pointer;
        }

        .play-button__text {
          font-family: 'SF Pro Display';
          font-style: normal;
          font-weight: 600;
          font-size: 20.4624px;
          line-height: 30px;
          /* identical to box height, or 147% */

          display: flex;
          align-items: center;
          text-align: center;
          letter-spacing: -0.0612px;

          color: #000000;
        }

        h3 {
          font-family: 'SF Pro Display';
          font-style: normal;
          font-weight: 700;
          font-size: 26.7482px;
          line-height: 20px;
          /* identical to box height, or 75% */

          text-align: center;
          align-self: flex-start;
          letter-spacing: -0.0733945px;

          color: #ffffff;
        }
        span {
          font-family: 'SF Pro Display';
          font-style: normal;
          font-weight: 400;
          font-size: 11.1409px;
          line-height: 14px;
          /* or 127% */
          opacity: 0.83;
          letter-spacing: -0.0305636px;
          font: normal normal 400 12px/16px SFProDisplay;
          color: rgba(255, 255, 255, 0.83);
        }
      `}</style>
    </div>
  );
};
export const getServerSideProps = async (context: any) => {
  const movieId = context.query.id;

  let moive = await (
    await fetch(`${BASE_URL}/movie/${movieId}?api_key=${process.env.API_KEY}`)
  ).json();

  return { props: { moive } };
};
export default Detail;
