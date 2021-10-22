import { all, fork } from "redux-saga/effects";
import { marketSentimentEffect } from "./sagas/trend.saga";

function* initialFlow() {
  yield all([fork(marketSentimentEffect)]);
}

export default function* rootSagaWatcher() {
  yield all([fork(initialFlow)]);
}
