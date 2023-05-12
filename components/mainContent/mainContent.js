import Image from "next/image";
import { useEffect, useState } from "react";

import { Wrapper } from "./mainContent.element";
const MainContent = () => {
  const [randNum, setRandNum] = useState(0);
  const [imgOpacity, setImgOpacity] = useState(100);

  const getRandomNumber = () => {
    setRandNum(Math.floor(Math.random() * 3) + 1);
  };

  useEffect(() => {
    if (randNum === 0) getRandomNumber();
    setTimeout(() => {
      setRandNum(((randNum + 1) % 3) + 1);
      handleOpacity();
    }, 10000);
  }, [randNum]);

  const handleOpacity = () => {
    setImgOpacity(100);
    setTimeout(() => setImgOpacity(0), 9500);
  };

  return (
    <Wrapper>
      {randNum !== 0 && (
        // <img
        //   className="poster"
        //   src={`/image-poster-${randNum}.jpeg`}
        // />
        <Image
          src={`/image-poster-${randNum}.jpeg`}
          alt="banner_img"
          fill
          priority
          style={{
            objectFit: "cover",
            opacity: imgOpacity / 100,
            transition: "all 0.5s ease-in-out",
          }}
        />
      )}
      <div className="overlay"></div>
    </Wrapper>
  );
};

export default MainContent;
