import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IMAGE_BASE_URL } from '@/utils/constants';

const MainImage = ({ movies }: { movies: any }) => {
  const rand = Math.floor(Math.random() * 20);

  const [imgPath, setImgPath] = useState<string>('');

  useEffect(() => {
    setImgPath(`${IMAGE_BASE_URL}${movies[rand].poster_path}`);
  }, []);

  return (
    <div className="wrapper">
      {imgPath && (
        <Image
          src={imgPath}
          width={400}
          height={415}
          alt="main"
          style={{ objectFit: 'cover' }}
        />
      )}
      <div className="linearGradient"></div>

      <style jsx>{`
        .wrapper {
          position: relative;
          width: 100%;
          height: 415px;
        }

        .linearGradient {
          position: absolute;
          top: 0;
          width: 375px;
          height: 415px;
          z-index: 90;
          background: linear-gradient(to top, black, transparent 10%);
        }
      `}</style>
    </div>
  );
};

export default MainImage;
