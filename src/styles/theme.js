import styled, { css } from "styled-components";

export const theme = {
  color: {
    white: "#ffffff",
    gray: "#c4c4c4",
  },
};

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const customMediaQuery = (maxWidth) => `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
