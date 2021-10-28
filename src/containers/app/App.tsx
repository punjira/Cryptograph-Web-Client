import { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MarketSentiment from "../../components/market-sentiment-bar/MarketSentimentBar";
import Menu from "../../components/menu/Menu";
import OverView from "../../views/overview/OverView";

const App: FC = () => {
  return (
    <div className="font-sans font-thin">
      <MarketSentiment />
      <Menu />
      <Switch>
        <Redirect exact from="/" to="/overview" />
        <Route path="/overview" component={OverView} />
      </Switch>
    </div>
  );
};

export default App;
