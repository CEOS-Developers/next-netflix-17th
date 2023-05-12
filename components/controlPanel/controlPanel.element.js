import styled from "styled-components";
import { flexCenter, theme } from "../../src/styles/theme";

export const TopRank = styled.div`
  ${flexCenter}
`;
export const TopRankBox = styled.div`
  ${flexCenter}
  flex-direction: column;

  border: 2px solid ${theme.white};
  width: 20px;
  height: 20px;
  color: white;
  span {
    font-size: 4px;
  }
  span:first-child {
    font-size: 0.3px;
  }
`;

export const PlayButton = styled.button`
  ${flexCenter}
  background: ${theme.gray};
  border-radius: 5.6px;
  width: 110px;
  height: 45px;
  gap: 10px;
  cursor: pointer;
  border: 0;

  span {
    font-weight: 600;
    font-size: 20px;
  }
`;

export const IconWithText = styled.div`
  ${flexCenter}
  flex-direction: column;
  gap: 0.2rem;
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    font-weight: 600;
    transition: all 0.2s ease-in-out;
  }
`;

export const Panel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > span {
    flex-basis: 33.3%;
    display: flex;
    justify-content: center;
  }
`;
export const TopRankText = styled.div`
  color: white;
  font-size: 13px;
  font-weight: 700;
  line-height: 2rem;
  text-align: center;
`;

export const Wrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  gap: 11px;
  padding: 10px 43px 43px 43px;
  width: max(46.2vh, 24.44rem);
`;
