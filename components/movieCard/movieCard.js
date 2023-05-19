import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { Wrapper, MovieName } from "./movieCard.element";
import { FaRegPlayCircle } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useObserver } from "../../hooks/useObserver";
import useLocalStorage from "use-local-storage";
import { imgSrc } from "../../src/assets/constants";

const MovieCard = ({ id, title, poster }) => {
  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useLocalStorage("movie_list_scroll", 0);
  const target = useRef(null);

  // DOM이 뷰포트 안에 보이는 경우에만 렌더링함
  const onIntersect = ([entry]) =>
    entry.isIntersecting ? setVisible(true) : setVisible(false);

  // threshold: 화면 양끝에서 10%만 보여줘도 onIntersect callback을 실행함
  useObserver({ target, onIntersect, threshold: 0.1 });

  return (
    <Wrapper ref={target}>
      {visible && (
        <>
          {/* Image보다 LazyLoadImage가 체감 속도가 빨라서 일단 이걸로 썼음 */}
          <LazyLoadImage
            alt={title}
            src={imgSrc + poster}
            style={{ objectFit: "cover" }}
            width="146"
            height="76"
          />
          <MovieName className="text-ellipsis">{title}</MovieName>
          <Link href={`/detail/${id}`}>
            <FaRegPlayCircle
              size={20}
              onClick={() => setScrollY(window.scrollY)}
            />
          </Link>
        </>
      )}
    </Wrapper>
  );
};

export default MovieCard;
