import { useEffect, useState } from "react";

import { Wrapper } from "./mainContent.element";
const MainContent = () => {
  const [randNum, setRandNum] = useState(1);

  const getRandomNumber = () => {
    setRandNum(Math.floor(Math.random() * 3) + 1);
  };

  useEffect(() => {
    getRandomNumber();
  }, []);

  return (
    <Wrapper>
      {randNum && (
        <img
          className="poster"
          src={`/image-poster-${randNum}.jpeg`}
        />
      )}
      <div className="overlay"></div>
    </Wrapper>
  );
};

export default MainContent;
