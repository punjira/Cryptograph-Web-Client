/**
 * market sentiment reducer
 */

import { Action } from "redux";
import {
  GetMarketSentimentActions,
  GET_MARKET_SENTIMENT
} from "../../actions/market-sentiment.action";
import { XHRState } from "../reducer.types";

export interface MarketSentimentState extends XHRState {
  sentiment: number | undefined;
}

const initialState: MarketSentimentState = {
  isFetching: false,
  sentiment: undefined,
  error: undefined
};

export default function marketSentimentReducer(
  state: MarketSentimentState = initialState,
  action: GetMarketSentimentActions
): MarketSentimentState {
  switch (action.type) {
    case GET_MARKET_SENTIMENT.REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case GET_MARKET_SENTIMENT.SUCCESS:
      return {
        ...state,
        isFetching: false,
        sentiment: action.payload.sentiment
      };
    case GET_MARKET_SENTIMENT.FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}
