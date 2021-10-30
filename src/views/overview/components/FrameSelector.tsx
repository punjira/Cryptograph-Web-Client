import { FC } from "react";
import { CANDLESTICK_TIME_FRAMES } from "../../../actions/candlestick.action";

const FrameSelector: FC = props => {
  return (
    <div className="flex flex-row">
      {(
        Object.keys(CANDLESTICK_TIME_FRAMES) as Array<
          keyof typeof CANDLESTICK_TIME_FRAMES
        >
      ).map(key => {
        return <span className="p-1 mr-1 text-center">{key}</span>;
      })}
    </div>
  );
};

export default FrameSelector;
