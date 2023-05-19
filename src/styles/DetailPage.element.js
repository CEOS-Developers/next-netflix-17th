import styled from "styled-components";

export const DetailPageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailPageBtnContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  & > button {
    width: 80%;
  }
`;
