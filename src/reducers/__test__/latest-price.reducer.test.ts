import latestPriceReducer, {
  LatestTickerPriceState
} from "../reducers/latest-market.reducer";
import * as actions from "../../actions/latest-price.action";
import { LastPrice } from "../../types/market.types";

describe("latest price reducer", () => {
  let state: LatestTickerPriceState,
    error: string | null,
    response: LastPrice[];
  describe("request fired state", () => {
    beforeEach(() => {
      state = {
        isFetching: true,
        data: [],
        error: undefined
      };
    });
    it("should return correct state", () => {
      expect(
        latestPriceReducer(undefined, actions.getLatestPriceRequestAction())
      ).toEqual(state);
    });
  });
  describe("server success reply state", () => {
    beforeEach(() => {
      response = [{ ticker: "mock", price: 12 }];
      state = {
        isFetching: false,
        data: response,
        error: undefined
      };
    });
    it("should create correct state", () => {
      expect(
        latestPriceReducer(
          undefined,
          actions.getLatestPriceSuccessAction(response)
        )
      ).toEqual(state);
    });
  });
  describe("server failure reply state", () => {
    beforeEach(() => {
      error = "duck";
      state = {
        isFetching: false,
        data: [],
        error: error
      };
    });
    it("should create correct state", () => {
      expect(
        latestPriceReducer(
          undefined,
          actions.getLatestPriceFailureAction(error)
        )
      ).toEqual(state);
    });
  });
});
