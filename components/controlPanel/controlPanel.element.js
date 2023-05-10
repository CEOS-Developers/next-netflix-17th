import styled from "styled-components";
import { flexCenter } from "../../src/styles/theme";

export const TopRank = styled.div`
  ${flexCenter}
`;
export const TopRankBox = styled.div`
  ${flexCenter}
  flex-direction: column;

  border: 2px solid white;
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
  background: #c4c4c4;
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
`;

export const Panel = styled.div`
  display: flex;
  gap: 42px;
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
  width: 391px;
`;
