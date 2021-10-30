import {
  getCandleSticksFailureActionCreator,
  getCandleSticksRequestActionCreator,
  getCandleSticksSuccessActionCreator
} from "../../actions/candlestick.action";
import { CandleStick } from "../../types/chart.types";
import getCandleSticksReducer, {
  CandleStickState
} from "../reducers/candlestick.reducer";

describe("candlestick reducer", () => {
  let state: CandleStickState, ticker: string, mock: CandleStick[];
  describe("request sent state", () => {
    beforeEach(() => {
      ticker = "btcusdt";
      state = {
        isFetching: true,
        error: undefined,
        data: [],
        ticker
      };
    });
    it("should create correct state", () => {
      expect(
        getCandleSticksReducer(
          undefined,
          getCandleSticksRequestActionCreator(ticker)
        )
      ).toEqual(state);
    });
  });
  describe("request success state", () => {
    beforeEach(() => {
      ticker = "btcusdt";
      mock = [];
      state = {
        isFetching: false,
        error: undefined,
        data: [],
        ticker
      };
    });
    it("should return correct state", () => {
      expect(
        getCandleSticksReducer(
          undefined,
          getCandleSticksSuccessActionCreator(mock, ticker)
        )
      ).toEqual(state);
    });
  });
  describe("request failure state", () => {
    beforeEach(() => {
      ticker = "btcusdt";
      state = {
        isFetching: false,
        error: "error",
        data: [],
        ticker: undefined
      };
    });
    it("should return correct state", () => {
      expect(
        getCandleSticksReducer(
          undefined,
          getCandleSticksFailureActionCreator("error")
        )
      ).toEqual(state);
    });
  });
});
