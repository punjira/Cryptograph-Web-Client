/**
 * market sentiment actions.
 * test at ../__test__/market-sentiment.action.test.ts
 *
 * create actions for getting market overall sentiment from server
 *
 */

import { Action, ActionCreator } from "redux";
import { GET_MARKET_SENTIMENT_ACTION_CREATOR } from "../constants/trend.constants";
import { MarketSentiment } from "../types/trends.types";

interface GetMarketSentimentAction extends Action {}

/**
 * get market sentiment, default interval is set server-side
 */
export const getMarketSentimentActionCreator: ActionCreator<GetMarketSentimentAction> =
  () => ({
    type: GET_MARKET_SENTIMENT_ACTION_CREATOR
  });

export enum GET_MARKET_SENTIMENT {
  REQUEST = "@get_market_sentiment/request",
  SUCCESS = "@get_market_sentiment/success",
  FAILURE = "@get_market_sentiment/failure"
}

interface GetMarketSentimentRequestAction extends Action {
  type: GET_MARKET_SENTIMENT.REQUEST;
}

export const getMarketSentimentRequestActionCreator: ActionCreator<GetMarketSentimentRequestAction> =
  () => {
    return {
      type: GET_MARKET_SENTIMENT.REQUEST
    };
  };

interface GetMarketSentimentSuccessAction extends Action {
  type: GET_MARKET_SENTIMENT.SUCCESS;
  payload: MarketSentiment;
}

export const getMarketSentimentSuccessActionCreator: ActionCreator<GetMarketSentimentSuccessAction> =
  (data: MarketSentiment) => {
    return {
      type: GET_MARKET_SENTIMENT.SUCCESS,
      payload: data
    };
  };

interface GetMarketSentimentFailureAction extends Action {
  type: GET_MARKET_SENTIMENT.FAILURE;
  payload: string | null;
}

export const getMarketSentimentFailureActionCreator: ActionCreator<GetMarketSentimentFailureAction> =
  (error: string | null) => {
    return {
      type: GET_MARKET_SENTIMENT.FAILURE,
      payload: error
    };
  };

export type GetMarketSentimentActions =
  | GetMarketSentimentRequestAction
  | GetMarketSentimentSuccessAction
  | GetMarketSentimentFailureAction;
