import styled from "styled-components";

export const MovieDataContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  overflow-y: scroll;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  gap: 1rem;
`;

export const MovieDataTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  ${(props) => (props.adult ? '&:after { content: " 🔞";  }' : "")}
`;

export const MovieDataContent = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  width: calc(100%);
`;
