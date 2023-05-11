import styled from "styled-components";
import { flexCenter } from "../../src/styles/theme";

export const Wrapper = styled.div`
  ${flexCenter}

  position: relative;
  width: 391px;
  height: 415px;

  .poster {
    object-fit: cover;
    width: 391px;
    height: 415px;
  }

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
    width: 391px;
    height: 415px;
  }
`;
