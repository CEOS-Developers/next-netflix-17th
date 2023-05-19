import styled from "styled-components";
import Link from "next/link";

export const GenreListContainer = styled.div`
  background-color: black;
  height: ${(props) => (props.type === 1 ? "9.5rem" : "13.8rem")};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 0.75rem;
  margin-bottom: 1.5rem;
  &:last-child {
    margin-bottom: 0.5rem;
  }
`;

export const GenreListTitle = styled.div`
  font-size: ${(props) => (props.type === 1 ? "1.75rem" : "1.25rem")};
  font-weight: 700;
  color: white;
  padding-left: 0.25rem;
  margin-bottom: 1rem;
`;

export const GenreListContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  overflow-x: auto;
  gap: 0.5rem;
`;

export const GenreListContentItem = styled(Link)`
  background-color: #8080809b;
  min-width: 100px;
  height: ${(props) => (props.type === 1 ? "100px" : "175px")};
  border-radius: ${(props) => (props.type === 1 ? "50%" : "2px")};
  overflow-y: hidden;
  position: relative;
  &:hover {
    transform: scale(0.98);
    transition: all 0.2s ease-in-out;
  }
  &:not(:hover) {
    transform: scale(1);
    transition: all 0.2s ease-in-out;
  }
`;
