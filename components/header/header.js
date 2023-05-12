import { HeaderWrapper, Icon, Tab } from "./header.element";
import { useInview } from "react-intersection-observer";
import { useState, useEffect, useCallback } from "react";

const Header = ({ render }) => {
  const [isVisible, setIsVisible] = useState(true);

  const onScroll = useCallback((event) => {
    const { pageYOffset, scrollY } = window;
    console.log("yOffset", pageYOffset, "scrollY", scrollY);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  const headerData = [
    { idx: 1, name: "TV Shows" },
    { idx: 2, name: "Movies" },
    { idx: 3, name: "My List" },
  ];
  return (
    <HeaderWrapper render={render}>
      <Icon
        src="/icon-logo.png"
        alt="logo"
      />
      {headerData.map((data) => (
        <Tab key={data.idx}>{data.name}</Tab>
      ))}
    </HeaderWrapper>
  );
};

export default Header;
