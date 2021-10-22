import marketReducer, {
  MarketSentimentState
} from "../reducers/market-sentiment.reducer";
import * as actions from "../../actions/market-sentiment.action";
import { MarketSentiment } from "../../types/trends.types";

describe("market sentiment reducer", () => {
  let state: MarketSentimentState,
    sentiment: MarketSentiment,
    error: string | null;
  describe("request fired state", () => {
    beforeEach(() => {
      state = {
        isFetching: true,
        error: undefined,
        sentiment: undefined
      };
    });
    it("should handle request fire", () => {
      expect(
        marketReducer(
          undefined,
          actions.getMarketSentimentRequestActionCreator()
        )
      ).toEqual(state);
    });
  });
  describe("request success state", () => {
    beforeEach(() => {
      sentiment = { sentiment: 0.12 };
      state = {
        isFetching: false,
        sentiment: 0.12,
        error: undefined
      };
    });
    it("should handle server success response", () => {
      expect(
        marketReducer(
          undefined,
          actions.getMarketSentimentSuccessActionCreator(sentiment)
        )
      ).toEqual(state);
    });
  });
  describe("request failure state", () => {
    beforeEach(() => {
      error = "wrong";
      state = {
        isFetching: false,
        sentiment: undefined,
        error: "wrong"
      };
    });
    it("should handle server response with error", () => {
      expect(
        marketReducer(
          undefined,
          actions.getMarketSentimentFailureActionCreator(error)
        )
      ).toEqual(state);
    });
  });
});
