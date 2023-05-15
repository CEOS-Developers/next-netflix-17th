import Image from "next/image";
import { useEffect, useState } from "react";

import { Wrapper } from "./mainContent.element";

// type: main = mainPage, detail = detailPage
const MainContent = ({ type }) => {
  const [randNum, setRandNum] = useState(0);
  const [imgOpacity, setImgOpacity] = useState(100);

  const getRandomNumber = () => {
    setRandNum(Math.floor(Math.random() * 3) + 1);
  };

  useEffect(() => {
    if (type === "main") {
      if (randNum === 0) {
        getRandomNumber();
      }
      const timeout = setTimeout(() => {
        setRandNum(((randNum + 1) % 3) + 1);
      }, 10000);
      const timeopacity = setTimeout(() => {
        handleOpacity();
      }, 9500);

      return () => {
        clearTimeout(timeout);
        clearTimeout(timeopacity);
      };
    }
  }, [randNum]);

  const handleOpacity = () => {
    setImgOpacity(0);
    setTimeout(() => setImgOpacity(100), 500);
  };

  return (
    <Wrapper>
      <Image
        src={
          type === "main"
            ? `/image-poster-${randNum}.jpeg`
            : `/image-poster-1.jpeg`
        }
        alt="banner_img"
        fill
        priority
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
