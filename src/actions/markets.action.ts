/**
 * trending markets actions
 * get trending markets based on user
 * this action can be authenticated if user is logged in
 */

import { Action, ActionCreator } from "redux";
import { GET_TRENDING_MARKETS_ACTION_CREATOR } from "../constants/markets.constants";
import { Coin } from "../types/market.types";

interface GetTrendingMarketsActionCreator extends Action {}

export const getTrendingMarketsActionCreator: ActionCreator<GetTrendingMarketsActionCreator> =
  () => ({
    type: GET_TRENDING_MARKETS_ACTION_CREATOR
  });

export enum GET_TRENDING_MARKETS {
  REQUEST = "@get_trending_markets/request",
  SUCCESS = "@get_trending_markets/success",
  FAILURE = "@get_trending_markets/failure"
}

interface GetTrendingMarketsRequestAction extends Action {
  type: GET_TRENDING_MARKETS.REQUEST;
}

export const getTrendingMarketsRequestAction: ActionCreator<GetTrendingMarketsRequestAction> =
  () => ({
    type: GET_TRENDING_MARKETS.REQUEST
  });

interface GetTrendingMarketsSuccessAction extends Action {
  type: GET_TRENDING_MARKETS.SUCCESS;
  payload: Coin[];
}

export const getTrendingMarketsSuccessAction: ActionCreator<GetTrendingMarketsSuccessAction> =
  (data: Coin[]) => ({
    type: GET_TRENDING_MARKETS.SUCCESS,
    payload: data
  });

interface GetTrendingMarketsFailureAction extends Action {
  type: GET_TRENDING_MARKETS.FAILURE;
  payload: string | null;
}

export const getTrendingMarketsFailureAction: ActionCreator<GetTrendingMarketsFailureAction> =
  (error: string | null) => ({
    type: GET_TRENDING_MARKETS.FAILURE,
    payload: error
  });

export type GET_TRENDING_MARKETS_ACTIONS =
  | GetTrendingMarketsRequestAction
  | GetTrendingMarketsSuccessAction
  | GetTrendingMarketsFailureAction;
