import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 76px;
  padding-right: 20px;
  color: white;
  background-color: #424242;

  & + & {
    margin-top: 10px;
  }

  .skeleton {
    display: flex;

    &-poster {
      width: 146px;
      height: 76px;
      background-color: #2e313d;
    }

    &-text {
      width: 150px;
      height: 20px;
      margin: 10px;
      background-color: #2e313d;
      flex: 1;
    }

    &-play {
      border-radius: 50%;
      background-color: #2e313d;
      width: 30px;
      height: 30px;
    }
  }
`;

export const MovieName = styled.span`
  padding: 20px;
  width: 150px;
`;
