import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IMAGE_BASE_URL } from '@/utils/constants';

const BannerImage = ({ poster_path }: { poster_path: string }) => {
  return (
    <div className="wrapper">
      <Image
        src={`${IMAGE_BASE_URL}${poster_path}`}
        width={375}
        height={415}
        alt="banner-image"
        style={{ objectFit: 'cover' }}
      />
      <div className="linearGradient"></div>
      <style jsx>{`
        .wrapper {
          width: 375px;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default BannerImage;
