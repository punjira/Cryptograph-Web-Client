import { all, fork } from "redux-saga/effects";
import TrendSaga, { marketSentimentEffect } from "./sagas/trend.saga";
import MarketSaga, { getTrendingMarketsEffect } from "./sagas/market.sagas";
import ChartSaga from "./sagas/chart.saga";

function* initialFlow() {
  yield all([fork(marketSentimentEffect), fork(getTrendingMarketsEffect)]);
}

export default function* rootSagaWatcher() {
  yield all([
    fork(initialFlow),
    fork(TrendSaga),
    fork(MarketSaga),
    ChartSaga()
  ]);
}
