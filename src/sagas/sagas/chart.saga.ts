import { AxiosRequestConfig, AxiosResponse } from "axios";
import { url } from "inspector";
import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  GetCandleSticksAction,
  getCandleSticksFailureActionCreator,
  getCandleSticksRequestActionCreator,
  getCandleSticksSuccessActionCreator
} from "../../actions/candlestick.action";
import urls from "../../config/end-points.json";
import { GET_CANDLESTICKS_ACTION_CREATOR } from "../../constants/chart-constants";
import makeXHRRequest from "../../services/axios";
import { CandleStick } from "../../types/chart.types";

interface CandleStickServerResponse {
  data: CandleStick[];
}

function* getCandleStickEffect(action: GetCandleSticksAction) {
  try {
    const { ticker, limit, frame } = action.payload;
    yield put(getCandleSticksRequestActionCreator(ticker));
    const config: AxiosRequestConfig = {
      url: urls.base_address + urls.prefix + urls.endpoints.candlesticks,
      method: "GET",
      params: {
        symbol: ticker,
        interval: frame,
        limit: limit
      }
    };
    const data: AxiosResponse<CandleStickServerResponse> = yield call(
      makeXHRRequest,
      config
    );
    yield put(getCandleSticksSuccessActionCreator(data.data.data, ticker));
  } catch (err: any) {
    yield put(getCandleSticksFailureActionCreator(err?.response?.data || null));
  }
}

export default function* toMyMyMind() {
  yield all([takeEvery(GET_CANDLESTICKS_ACTION_CREATOR, getCandleStickEffect)]);
}
