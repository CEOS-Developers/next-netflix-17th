import styled from "styled-components";
import { flexCenter } from "../../src/styles/theme";

export const Wrapper = styled.div`
  ${flexCenter}

  position: relative;
  width: max(46.18vh, 24.438rem);
  height: max(49.01vh, 25.9375rem);

  /* .poster {
    object-fit: cover;
    width: 391px;
    height: 415px;
  } */

  .overlay {
    position: absolute;
    background-color: rgb(90, 90, 90);
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1)
    );
    z-index: 10;
    width: max(46.18vh, 24.438rem);
    height: max(49.01vh, 25.9375rem);
  }
`;
