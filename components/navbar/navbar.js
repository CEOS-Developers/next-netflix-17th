// const { NavbarContainer, NavbarItem } = require("./navbar.element");
import { NavbarContainer, NavbarItem } from "./navbar.element";
import { BiHomeAlt2, BiSearch, BiMenu } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import Cs from "../../public/cs";
import { useRouter } from "next/router";

// '/' or '/detail/[id]' : Home
// '/search' : Search
// '/scheduled' : Coming Soon
// '/download' : Downloads
// '/more' : More
const Navbar = () => {
  const router = useRouter();
  return (
    <NavbarContainer>
      <NavbarItem
        active={
          router.pathname === "/" || router.pathname.includes("/detail") ? 1 : 0
        }
      >
        <BiHomeAlt2 size={24} />
        <span>Home</span>
      </NavbarItem>
      <NavbarItem active={router.pathname === "/search" ? 1 : 0}>
        <BiSearch size={24} />
        <span>Search</span>
      </NavbarItem>
      <NavbarItem active={router.pathname === "/scheduled" ? 1 : 0}>
        <Cs color={"gray"} />
        <span>Coming Soon</span>
      </NavbarItem>
      <NavbarItem active={router.pathname === "/download" ? 1 : 0}>
        <HiDownload size={24} />
        <span>Downloads</span>
      </NavbarItem>
      <NavbarItem active={router.pathname === "/more" ? 1 : 0}>
        <FiMenu size={24} />
        <span>More</span>
      </NavbarItem>
    </NavbarContainer>
  );
};

export default Navbar;
