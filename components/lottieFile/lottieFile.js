import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import lottieAnimation from "../../public/netflix-lottie.json";
import { LottieFileContainer } from "./lottieFile.element";

const LottieFile = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    const container = animationRef.current;
    const options = {
      container,
      animationData: lottieAnimation,
      loop: false,
      autoplay: true,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    const animation = lottie.loadAnimation(options);

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <LottieFileContainer>
      <div ref={animationRef} />
    </LottieFileContainer>
  );
};

export default LottieFile;
