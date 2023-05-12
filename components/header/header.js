import { HeaderWrapper, Icon, Tab } from "./header.element";
import {
  useEffect,
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";

const Header = () => {
  const layoutRef = useRef(null);
  function handleScroll() {
    console.log("scrolled!");
  }

  useEffect(() => {
    document.body.addEventListener("scroll", handleScroll);
    return () => document.body.removeEventListener("scroll", handleScroll);
  }, []);

  const headerData = [
    { idx: 1, name: "TV Shows" },
    { idx: 2, name: "Movies" },
    { idx: 3, name: "My List" },
  ];
  return (
    <HeaderWrapper ref={layoutRef}>
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
