import { Wrapper } from "./movieCard.element";

const Skeleton = () => {
  return (
    <Wrapper>
      <div className="skeleton-poster" />
      <div className="skeleton-text" />
      <div className="skeleton-play" />
    </Wrapper>
  );
};

const Loading = () => (
  <>
    {new Array(10).fill(1).map((_, i) => (
      <Skeleton key={i} />
    ))}
  </>
);

export default Loading;
