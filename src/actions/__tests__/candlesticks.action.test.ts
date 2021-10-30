import { GET_CANDLESTICKS_ACTION_CREATOR } from "../../constants/chart-constants";
import { CandleStick } from "../../types/chart.types";
import * as actions from "../candlestick.action";

describe("get candlesticks actions", () => {
  let request_ticker: string,
    mock: CandleStick[],
    frame: actions.CANDLESTICK_TIME_FRAMES;
  beforeEach(() => {
    request_ticker = "btcusdt";
    mock = [];
    frame = actions.CANDLESTICK_TIME_FRAMES.h2;
  });
  it("should create correct action and set default limit", () => {
    expect(actions.getCandleSticksActionCreator(request_ticker, frame)).toEqual(
      {
        type: GET_CANDLESTICKS_ACTION_CREATOR,
        payload: { ticker: request_ticker, limit: 200, frame }
      }
    );
  });
  it("should create correct action with provided limit", () => {
    expect(
      actions.getCandleSticksActionCreator(request_ticker, frame, 130)
    ).toEqual({
      type: GET_CANDLESTICKS_ACTION_CREATOR,
      payload: { ticker: request_ticker, frame, limit: 130 }
    });
  });
  it("should create correct request action", () => {
    expect(actions.getCandleSticksRequestActionCreator(request_ticker)).toEqual(
      {
        type: actions.GET_CANDLESTICKS.REQUEST,
        payload: request_ticker
      }
    );
  });
  it("should create correct success action", () => {
    expect(
      actions.getCandleSticksSuccessActionCreator(mock, request_ticker)
    ).toEqual({
      type: actions.GET_CANDLESTICKS.SUCCESS,
      payload: { candles: mock, ticker: request_ticker }
    });
  });
  it("should create correct failure action", () => {
    expect(actions.getCandleSticksFailureActionCreator("opsi")).toEqual({
      type: actions.GET_CANDLESTICKS.FAILURE,
      payload: "opsi"
    });
  });
});
