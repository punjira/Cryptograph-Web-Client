/**
 * might get duplicated later.
 * @todo
 * keep an eye for more general usage
 */

import { FC, useEffect } from "react";
import {
  CANDLESTICK_TIME_FRAMES,
  getCandleSticksActionCreator
} from "../../../actions/candlestick.action";
import StrippedChart from "../../../charts/stock/StrippedView";
import { useAppDispatch, useAppSelector } from "../../../hooks/typed-selector";
import FrameSelector from "./FrameSelector";

interface ChartHolderProps {
  ticker: string;
  frame?: CANDLESTICK_TIME_FRAMES;
}

const ChartHolder: FC<ChartHolderProps> = ({
  frame = CANDLESTICK_TIME_FRAMES.m5,
  ...props
}) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCandleSticksActionCreator(props.ticker, frame));
  }, [props.ticker]);
  const data = useAppSelector(state => state.candleStickReducer.data);
  return (
    <div className="flex flex-col w-full md:w-1/5">
      <StrippedChart data={data} />
    </div>
  );
};

export default ChartHolder;
