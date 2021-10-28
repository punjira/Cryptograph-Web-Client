/**
 * root reducer.
 *
 * all reducers are put here in the first level and no other combine reducer \
 * is defined inside application.
 *
 * @todo
 * redesign combine reducer and create a custom one
 */

import { combineReducers } from "redux";

import marketStateReducer from "./reducers/market-sentiment.reducer";
import tendingMarketsReducer from "./reducers/trending-markets.reducer";
import latestPriceReducer from "./reducers/latest-market.reducer";

const rootReducer = combineReducers({
  marketStateReducer,
  tendingMarketsReducer,
  latestPriceReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
