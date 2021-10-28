import { Action, ActionCreator } from "redux";
import { GET_LATEST_PRICE_ACTION_CREATOR } from "../constants/markets.constants";
import { LastPrice } from "../types/market.types";

export interface GetLatestPriceActionCreator extends Action {}

/**
 * to keep reducer fresh, we fetch all prices from server,
 * this may sound like an overload but as the initial prices are fetched the rest of the
 * communication is handled with socket
 */
export const getLatestPriceActionCreator: ActionCreator<GetLatestPriceActionCreator> =
  () => ({
    type: GET_LATEST_PRICE_ACTION_CREATOR
  });

export enum GET_LATEST_PRICE {
  REQUEST = "@ticker_latest_price/request",
  SUCCESS = "@ticker_latest_price/success",
  FAILURE = "@ticker_latest_price/failure"
}

interface GetLatestPriceRequestAction extends Action {
  type: GET_LATEST_PRICE.REQUEST;
}

export const getLatestPriceRequestAction: ActionCreator<GetLatestPriceRequestAction> =
  () => ({
    type: GET_LATEST_PRICE.REQUEST
  });

interface GetLatestPriceSuccessAction extends Action {
  type: GET_LATEST_PRICE.SUCCESS;
  payload: LastPrice[];
}

export const getLatestPriceSuccessAction: ActionCreator<GetLatestPriceSuccessAction> =
  (data: LastPrice[]) => ({
    type: GET_LATEST_PRICE.SUCCESS,
    payload: data
  });

interface GetLatestPriceFailureAction extends Action {
  type: GET_LATEST_PRICE.FAILURE;
  payload: string | null;
}

export const getLatestPriceFailureAction: ActionCreator<GetLatestPriceFailureAction> =
  (error: string | null) => ({
    type: GET_LATEST_PRICE.FAILURE,
    payload: error
  });

export type GET_LATEST_PRICE_ACTIONS =
  | GetLatestPriceRequestAction
  | GetLatestPriceSuccessAction
  | GetLatestPriceFailureAction;
