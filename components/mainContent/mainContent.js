import Image from "next/image";
import { useEffect, useState } from "react";
import { imgSrc as imgBase } from "../../src/assets/constants";

import { Wrapper } from "./mainContent.element";

// type: main = mainPage, detail = detailPage
const MainContent = ({ imgSrc, type, imgList }) => {
  const [randNum, setRandNum] = useState(0);
  const [imgOpacity, setImgOpacity] = useState(100);

  const getRandomNumber = () => {
    setRandNum(Math.floor(Math.random() * 20));
  };

  useEffect(() => {
    if (type === "main") {
      if (randNum === 0) {
        getRandomNumber();
      }
      const timeout = setTimeout(() => {
        setRandNum((randNum + 1) % 20);
      }, 10000);
      const timeopacity = setTimeout(() => {
        handleOpacity();
      }, 9500);

      return () => {
        clearTimeout(timeout);
        clearTimeout(timeopacity);
      };
    }
  }, [type, randNum]);

  const handleOpacity = () => {
    setImgOpacity(0);
    setTimeout(() => setImgOpacity(100), 500);
  };

  return (
    <Wrapper>
      <Image
        src={type === "main" ? imgBase + imgList[randNum] : imgBase + imgSrc}
        alt="banner_img"
        fill
        priority
        placeholder="blur"
        blurDataURL="https://via.placeholder.com/100"
        style={{
          objectFit: "cover",
          opacity: type === "main" ? imgOpacity / 100 : 1,
          transition: "all 0.5s ease-in-out",
        }}
      />
      <div className="overlay" />
    </Wrapper>
  );
};

export default MainContent;
