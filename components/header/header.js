import { HeaderWrapper, Icon, Tab } from "./header.element";

const Header = () => {
  const headerData = [
    { idx: 1, name: "TV Shows" },
    { idx: 2, name: "Movies" },
    { idx: 3, name: "My List" },
  ];
  return (
    <HeaderWrapper>
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
