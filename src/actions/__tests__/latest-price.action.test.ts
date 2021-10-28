import { GET_LATEST_PRICE_ACTION_CREATOR } from "../../constants/markets.constants";
import * as actions from "../latest-price.action";

describe("latest price actions", () => {
  it("should create correct action", () => {
    expect(actions.getLatestPriceActionCreator()).toEqual({
      type: GET_LATEST_PRICE_ACTION_CREATOR
    });
  });
  it("should create correct request action", () => {
    expect(actions.getLatestPriceRequestAction()).toEqual({
      type: actions.GET_LATEST_PRICE.REQUEST
    });
  });
  it("should create correct success action", () => {
    expect(actions.getLatestPriceSuccessAction([])).toEqual({
      type: actions.GET_LATEST_PRICE.SUCCESS,
      payload: []
    });
  });
  it("should create correct failure action", () => {
    expect(actions.getLatestPriceFailureAction("error")).toEqual({
      type: actions.GET_LATEST_PRICE.FAILURE,
      payload: "error"
    });
  });
});
