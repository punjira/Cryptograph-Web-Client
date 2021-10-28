import { Action } from "redux";
import {
  GET_TRENDING_MARKETS,
  GET_TRENDING_MARKETS_ACTIONS
} from "../../actions/markets.action";
import { Coin } from "../../types/market.types";
import { XHRState } from "../reducer.types";

export interface GetTrendingMarketsState extends XHRState {
  data: Coin[];
}

const initialState: GetTrendingMarketsState = {
  isFetching: false,
  error: undefined,
  data: []
};

export default function getTrendingMarketsReducer(
  state: GetTrendingMarketsState = initialState,
  action: GET_TRENDING_MARKETS_ACTIONS
): GetTrendingMarketsState {
  switch (action.type) {
    case GET_TRENDING_MARKETS.REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case GET_TRENDING_MARKETS.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    case GET_TRENDING_MARKETS.FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}
