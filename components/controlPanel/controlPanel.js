import { AiOutlinePlus, AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import {
  Wrapper,
  TopRank,
  TopRankText,
  Panel,
  IconWithText,
  PlayButton,
} from "./controlPanel.element";

const ControlPanel = () => {
  return (
    <Wrapper>
      <TopRank>
        {/* TODO: 글씨 크기 너무 작아서 적용 안됨 > 이미지로 수정
				<TopRankBox>
					<span>TOP</span>
					<span>10</span>
				</TopRankBox>
				*/}
        <TopRankText>#2 in Nigeria Today</TopRankText>
      </TopRank>
      <Panel>
        <IconWithText>
          <AiOutlinePlus size={24} />
          <span>My List</span>
        </IconWithText>

        <PlayButton>
          <BsFillPlayFill size={27} /> <span>Play</span>
        </PlayButton>
        <IconWithText>
          <AiOutlineInfoCircle size={24} />
          <span>Info</span>
        </IconWithText>
      </Panel>
    </Wrapper>
  );
};

export default ControlPanel;
