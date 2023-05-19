import { styled } from 'styled-components';

export default function SearchResultText({ isSearch }: any) {
  return (
    <Container>
      <ResultWrapper>
        {isSearch ? 'Search Results' : 'Top Searches'}
      </ResultWrapper>
    </Container>
  );
}

const ResultWrapper = styled.p`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;
const Container = styled.div``;
