import { Wrapper, Input } from "./searchbar.element";
import { useInput } from "../../hooks/useInput";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Searchbar = () => {
  const input = useInput("");
  const router = useRouter();

  useEffect(() => {
    try {
      // 검색어 키워드가 들어오면 쿼리스트링으로 키워드를 넘긴다
      if (input.value) {
        router.replace(
          {
            pathname: "/search",
            query: {
              search: input.value,
            },
          },
          undefined,
          { shallow: true }
        );
      } else {
        router.replace({
          pathname: "/search",
        });
      }
    } catch {}
  }, [input.value]);

  return (
    <Wrapper>
      <AiOutlineSearch size={20} />
      <Input
        type="text"
        value={input.value}
        onChange={input.onChange}
        placeholder="Search for a movie"
      />
      <AiOutlineClose
        style={{ cursor: "pointer" }}
        size={20}
        onClick={() => input.setValue("")}
      />
    </Wrapper>
  );
};

export default Searchbar;
