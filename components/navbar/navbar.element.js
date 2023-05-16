import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: max(46.18vh, 24.438rem);
  height: 60px;
  background-color: #000;
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: white;
  & > div {
    flex-basis: 18%;
    margin: 0 1%;
  }
`;

export const NavbarItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > svg {
    color: ${(props) => (props.active ? "white" : "#8C8787")};
  }
  & > svg > path {
    fill: ${(props) => (props.active ? "white" : "#8C8787")};
  }
  & > span {
    font-size: 0.5125rem;
    margin-top: 0.175rem;
    color: ${(props) => (props.active ? "white" : "#8C8787")};
  }
  &:hover {
    cursor: pointer;
    & > svg {
      transform: scale(1.4) translateY(20%);
      transition: all 0.2s ease-in-out;
    }
    & > span {
      opacity: 0;
    }
  }
  &:not(:hover) {
    & > svg {
      transform: scale(1);
      transition: all 0.2s ease-in-out;
    }

`;
