import { AxiosRequestConfig, AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getMarketSentimentFailureActionCreator,
  getMarketSentimentRequestActionCreator,
  getMarketSentimentSuccessActionCreator
} from "../../actions/market-sentiment.action";
import urls from "../../config/end-points.json";
import { GET_MARKET_SENTIMENT_ACTION_CREATOR } from "../../constants/trend.constants";
import makeXHRRequest from "../../services/axios";
import { MarketSentiment } from "../../types/trends.types";

export function* marketSentimentEffect() {
  try {
    yield put(getMarketSentimentRequestActionCreator());
    const config: AxiosRequestConfig = {
      method: "GET",
      url: urls.base_address + urls.prefix + urls.endpoints.market_sentiment
    };
    const data: AxiosResponse<MarketSentiment> = yield call(
      makeXHRRequest,
      config
    );
    yield put(getMarketSentimentSuccessActionCreator(data.data));
  } catch (err: any) {
    yield put(
      getMarketSentimentFailureActionCreator(err.response?.data || null)
    );
  }
}

export default function* trendSagaWatcher() {
  yield all([
    takeLatest(GET_MARKET_SENTIMENT_ACTION_CREATOR, marketSentimentEffect)
  ]);
}
