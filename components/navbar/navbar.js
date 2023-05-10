// const { NavbarContainer, NavbarItem } = require("./navbar.element");
import { NavbarContainer, NavbarItem } from "./navbar.element";
import { BiHomeAlt2, BiSearch, BiMenu } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import Cs from "../../public/cs";
import { useRouter } from "next/router";

const Navbar = ({ render }) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <NavbarContainer render={true}>
      <NavbarItem active={router.pathname === "/"}>
        <BiHomeAlt2 size={24} />
        <span>Home</span>
      </NavbarItem>
      <NavbarItem active={router.pathname === "/search"}>
        <BiSearch size={24} />
        <span>Search</span>
      </NavbarItem>
      <NavbarItem active={router.pathname === "/scheduled"}>
        <Cs color={"gray"} />
        <span>Coming Soon</span>
      </NavbarItem>
      <NavbarItem active={router.pathname === "/download"}>
        <HiDownload size={24} />
        <span>Downloads</span>
      </NavbarItem>
      <NavbarItem active={router.pathname === "/more"}>
        <FiMenu size={24} />
        <span>More</span>
      </NavbarItem>
    </NavbarContainer>
  );
};

export default Navbar;
