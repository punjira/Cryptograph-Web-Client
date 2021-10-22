import { useAppSelector } from "./typed-selector";

export function useMarketSentiment() {
  const sentiment = useAppSelector(state => state.marketStateReducer.sentiment);
  const isFetching = useAppSelector(
    state => state.marketStateReducer.isFetching
  );
  return [sentiment, isFetching];
}
