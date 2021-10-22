/**
 * from (redux-official-docs)[https://redux.js.org/usage/usage-with-typescript]
 */

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../store";
import type { RootState } from "../reducers";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
