import { AxiosRequestConfig, AxiosResponse } from "axios";
import { url } from "inspector";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getTrendingMarketsFailureAction,
  getTrendingMarketsRequestAction,
  getTrendingMarketsSuccessAction
} from "../../actions/markets.action";
import urls from "../../config/end-points.json";
import { GET_TRENDING_MARKETS_ACTION_CREATOR } from "../../constants/markets.constants";
import makeXHRRequest from "../../services/axios";
import { Coin } from "../../types/market.types";

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

export default function* girlMyBodyDonLie() {
  yield all([
    takeLatest(GET_TRENDING_MARKETS_ACTION_CREATOR, getTrendingMarketsEffect)
  ]);
}
