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
