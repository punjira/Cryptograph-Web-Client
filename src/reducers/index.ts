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

const rootReducer = combineReducers({
  marketStateReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
