import { FC } from "react";
import { useMarketSentiment } from "../../hooks/use-market-sentiment";
import { createTailwindGradient } from "../../helpers/color-utils";

const MarketSentiment: FC = props => {
  const [sentiment, isFetching] = useMarketSentiment();
  const gradientStyle = createTailwindGradient(sentiment);
  return <div className={`w-full absolute h-1 top-0 ${gradientStyle}`} />;
};

export default MarketSentiment;
