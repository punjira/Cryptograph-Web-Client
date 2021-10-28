import {
  GET_LATEST_PRICE,
  GET_LATEST_PRICE_ACTIONS
} from "../../actions/latest-price.action";
import { LastPrice } from "../../types/market.types";
import { XHRState } from "../reducer.types";

export interface LatestTickerPriceState extends XHRState {
  data: LastPrice[];
}

const initialState: LatestTickerPriceState = {
  isFetching: false,
  error: undefined,
  data: []
};

export default function latestPriceReducer(
  state: LatestTickerPriceState = initialState,
  action: GET_LATEST_PRICE_ACTIONS
): LatestTickerPriceState {
  switch (action.type) {
    case GET_LATEST_PRICE.REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case GET_LATEST_PRICE.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    case GET_LATEST_PRICE.FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}
