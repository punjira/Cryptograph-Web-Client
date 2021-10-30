import {
  GET_CANDLESTICKS,
  GET_CANDLESTICKS_ACTIONS
} from "../../actions/candlestick.action";
import { CandleStick } from "../../types/chart.types";
import { XHRState } from "../reducer.types";

export interface CandleStickState extends XHRState {
  data: CandleStick[];
  ticker: string | undefined;
}

const initialState: CandleStickState = {
  isFetching: false,
  error: undefined,
  data: [],
  ticker: undefined
};

export default function getCandleSticksReducer(
  state: CandleStickState = initialState,
  action: GET_CANDLESTICKS_ACTIONS
): CandleStickState {
  switch (action.type) {
    case GET_CANDLESTICKS.REQUEST:
      return {
        ...state,
        isFetching: true,
        ticker: action.payload
      };
    case GET_CANDLESTICKS.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload.candles,
        ticker: action.payload.ticker
      };
    case GET_CANDLESTICKS.FAILURE:
      return {
        isFetching: false,
        error: action.payload,
        ticker: undefined,
        data: []
      };
    default:
      return state;
  }
}
