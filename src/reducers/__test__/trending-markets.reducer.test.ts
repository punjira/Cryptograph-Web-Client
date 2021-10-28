import trendingMarketReducer, {
  GetTrendingMarketsState
} from "../reducers/trending-markets.reducer";
import * as action from "../../actions/markets.action";

describe("trending markets reducer", () => {
  let initialState: GetTrendingMarketsState;
  describe("request fired state", () => {
    beforeEach(() => {
      initialState = {
        isFetching: true,
        error: undefined,
        data: []
      };
    });
    it("should set is fetching", () => {
      expect(
        trendingMarketReducer(
          undefined,
          action.getTrendingMarketsRequestAction()
        )
      ).toEqual(initialState);
    });
  });
  describe("request success state", () => {
    beforeEach(() => {
      initialState = {
        isFetching: false,
        error: undefined,
        data: []
      };
    });
    it("should set data and clear fetching status", () => {
      expect(
        trendingMarketReducer(
          undefined,
          action.getTrendingMarketsSuccessAction([])
        )
      ).toEqual(initialState);
    });
  });
  describe("request failure state", () => {
    beforeEach(() => {
      initialState = {
        isFetching: false,
        error: "tada",
        data: []
      };
    });
    it("should set error text and clear fetching status", () => {
      expect(
        trendingMarketReducer(
          undefined,
          action.getTrendingMarketsFailureAction("tada")
        )
      ).toEqual(initialState);
    });
  });
});
