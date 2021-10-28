import { FC } from "react";
import MarketSentiment from "../../components/market-sentiment-bar/MarketSentimentBar";

const App: FC = () => {
  return (
    <div className="font-sans font-thin">
      <MarketSentiment />
    </div>
  );
};

export default App;
