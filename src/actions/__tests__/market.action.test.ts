import { GET_TRENDING_MARKETS_ACTION_CREATOR } from "../../constants/markets.constants";
import { Coin } from "../../types/market.types";
import * as actions from "../markets.action";

describe("trending markets action creators", () => {
  let server_mock_res: Coin[], server_error_res: string;
  beforeEach(() => {
    server_mock_res = [];
    server_error_res = "error";
  });
  it("should create correct actions", () => {
    expect(actions.getTrendingMarketsActionCreator()).toEqual({
      type: GET_TRENDING_MARKETS_ACTION_CREATOR
    });
    expect(actions.getTrendingMarketsRequestAction()).toEqual({
      type: actions.GET_TRENDING_MARKETS.REQUEST
    });
    expect(actions.getTrendingMarketsSuccessAction(server_mock_res)).toEqual({
      type: actions.GET_TRENDING_MARKETS.SUCCESS,
      payload: server_mock_res
    });
    expect(actions.getTrendingMarketsFailureAction(server_error_res)).toEqual({
      type: actions.GET_TRENDING_MARKETS.FAILURE,
      payload: server_error_res
    });
  });
});
