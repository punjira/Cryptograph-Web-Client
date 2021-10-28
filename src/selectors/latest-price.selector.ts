import { RootState } from "../reducers";
import { LastPrice } from "../types/market.types";

const selectLatestPriceReducer = (state: RootState) => state.latestPriceReducer;

const selectLatestPrices = (state: RootState): LastPrice[] =>
  selectLatestPriceReducer(state).data;

export const selectPrice = (
  state: RootState,
  ticker: string
): number | undefined => {
  const price = selectLatestPrices(state).find(el => el.ticker === ticker);
  return price?.price;
};
