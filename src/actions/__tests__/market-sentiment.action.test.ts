import { GET_MARKET_SENTIMENT_ACTION_CREATOR } from "../../constants/trend.constants";
import { MarketSentiment } from "../../types/trends.types";
import * as actions from "../market-sentiment.action";

describe("market sentiment actions", () => {
  let marketSentimentResponse: MarketSentiment, error: string | null;
  beforeEach(() => {
    marketSentimentResponse = {
      sentiment: 0.12
    };
    error = "suck on that";
  });
  it("should create correct action", () => {
    expect(actions.getMarketSentimentActionCreator()).toEqual({
      type: GET_MARKET_SENTIMENT_ACTION_CREATOR
    });
  });
  it("should create correct success action", () => {
    expect(
      actions.getMarketSentimentSuccessActionCreator(marketSentimentResponse)
    ).toEqual({
      type: actions.GET_MARKET_SENTIMENT.SUCCESS,
      payload: marketSentimentResponse
    });
  });
  it("should create correct request action", () => {
    expect(actions.getMarketSentimentRequestActionCreator()).toEqual({
      type: actions.GET_MARKET_SENTIMENT.REQUEST
    });
  });
  it("should create correct failure action", () => {
    expect(actions.getMarketSentimentFailureActionCreator(error)).toEqual({
      type: actions.GET_MARKET_SENTIMENT.FAILURE,
      payload: error
    });
  });
});
