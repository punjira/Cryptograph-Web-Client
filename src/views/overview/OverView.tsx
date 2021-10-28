import { FC } from "react";
import { useAppSelector } from "../../hooks/typed-selector";
import PageLayout from "../../layout/PageLayout";
import MarketBar from "./components/MarketBar";

const OverView: FC = () => {
  const trendingMarkets = useAppSelector(
    state => state.tendingMarketsReducer.data
  );
  return (
    <PageLayout>
      <MarketBar markets={trendingMarkets} />
    </PageLayout>
  );
};

export default OverView;
