import { AxiosRequestConfig, AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getLatestPriceFailureAction,
  getLatestPriceRequestAction,
  getLatestPriceSuccessAction
} from "../../actions/latest-price.action";
import {
  getTrendingMarketsFailureAction,
  getTrendingMarketsRequestAction,
  getTrendingMarketsSuccessAction
} from "../../actions/markets.action";
import urls from "../../config/end-points.json";
import {
  GET_LATEST_PRICE_ACTION_CREATOR,
  GET_TRENDING_MARKETS_ACTION_CREATOR
} from "../../constants/markets.constants";
import makeXHRRequest from "../../services/axios";
import { Coin, LastPrice } from "../../types/market.types";

interface ServerTrendingMarketsResponse {
  data: Coin[];
}

export function* getTrendingMarketsEffect() {
  try {
    yield put(getTrendingMarketsRequestAction());
    const config: AxiosRequestConfig = {
      url: urls.base_address + urls.prefix + urls.endpoints.trending_markets,
      method: "GET"
    };
    const data: AxiosResponse<ServerTrendingMarketsResponse> = yield call(
      makeXHRRequest,
      config
    );
    yield put(getTrendingMarketsSuccessAction(data.data.data));
  } catch (err: any) {
    yield put(getTrendingMarketsFailureAction(err?.response?.data || null));
  }
}

interface LatestPriceServerResponse {
  data: LastPrice[];
}

export function* getLatestPriceEffect() {
  try {
    yield put(getLatestPriceRequestAction());
    const config: AxiosRequestConfig = {
      url: urls.base_address + urls.prefix + urls.endpoints.latest_prices,
      method: "GET"
    };
    const data: AxiosResponse<LatestPriceServerResponse> = yield call(
      makeXHRRequest,
      config
    );
    yield put(getLatestPriceSuccessAction(data.data.data));
  } catch (err: any) {
    yield put(getLatestPriceFailureAction(err?.response?.data || null));
  }
}

export default function* girlMyBodyDonLie() {
  yield all([
    takeLatest(GET_TRENDING_MARKETS_ACTION_CREATOR, getTrendingMarketsEffect),
    takeLatest(GET_LATEST_PRICE_ACTION_CREATOR, getLatestPriceEffect)
  ]);
}
