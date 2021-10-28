import { FC } from "react";
import MarketSentiment from "../../components/market-sentiment-bar/MarketSentimentBar";
import Menu from "../../components/menu/Menu";

const App: FC = () => {
  return (
    <div className="font-sans font-thin">
      <MarketSentiment />
      <Menu />
    </div>
  );
};

export default App;
