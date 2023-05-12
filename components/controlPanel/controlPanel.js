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
        <span>
          <IconWithText>
            <AiOutlinePlus size={24} />
            <span>My List</span>
          </IconWithText>
        </span>
        <span>
          <PlayButton>
            <BsFillPlayFill size={27} /> <span>Play</span>
          </PlayButton>
        </span>
        <span>
          <IconWithText>
            <AiOutlineInfoCircle size={24} />
            <span>Info</span>
          </IconWithText>
        </span>
      </Panel>
    </Wrapper>
  );
};

export default ControlPanel;
