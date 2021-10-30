import { Action, ActionCreator } from "redux";
import { GET_CANDLESTICKS_ACTION_CREATOR } from "../constants/chart-constants";
import { CandleStick } from "../types/chart.types";

export enum CANDLESTICK_TIME_FRAMES {
  m1 = "1m",
  m3 = "3m",
  m5 = "5m",
  m15 = "15m",
  m30 = "30m",
  h1 = "1h",
  h2 = "2h",
  h4 = "4h",
  d1 = "1d"
}

export interface GetCandleSticksAction extends Action {
  payload: {
    ticker: string;
    frame: CANDLESTICK_TIME_FRAMES;
    limit: number;
  };
}

export const getCandleSticksActionCreator: ActionCreator<GetCandleSticksAction> =
  (ticker: string, frame: CANDLESTICK_TIME_FRAMES, limit: number = 200) => ({
    type: GET_CANDLESTICKS_ACTION_CREATOR,
    payload: {
      ticker,
      frame,
      limit
    }
  });

export enum GET_CANDLESTICKS {
  REQUEST = "@get_candlesticks/request",
  SUCCESS = "@get_candlesticks/success",
  FAILURE = "@get_candlesticks/failure"
}

interface GetCandleSticksRequestAction extends Action {
  type: GET_CANDLESTICKS.REQUEST;
  payload: string;
}

export const getCandleSticksRequestActionCreator: ActionCreator<GetCandleSticksRequestAction> =
  (ticker: string) => ({
    type: GET_CANDLESTICKS.REQUEST,
    payload: ticker
  });

interface GetCandleSticksSuccessAction extends Action {
  type: GET_CANDLESTICKS.SUCCESS;
  payload: { candles: CandleStick[]; ticker: string };
}

export const getCandleSticksSuccessActionCreator: ActionCreator<GetCandleSticksSuccessAction> =
  (candles: CandleStick[], ticker: string) => ({
    type: GET_CANDLESTICKS.SUCCESS,
    payload: { candles, ticker }
  });

interface GetCandleSticksFailureAction extends Action {
  type: GET_CANDLESTICKS.FAILURE;
  payload: string | null;
}

export const getCandleSticksFailureActionCreator: ActionCreator<GetCandleSticksFailureAction> =
  (error: string | null) => ({
    type: GET_CANDLESTICKS.FAILURE,
    payload: error
  });

export type GET_CANDLESTICKS_ACTIONS =
  | GetCandleSticksSuccessAction
  | GetCandleSticksFailureAction
  | GetCandleSticksRequestAction;
