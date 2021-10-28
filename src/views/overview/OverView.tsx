import { FC, useEffect } from "react";
import { getLatestPriceActionCreator } from "../../actions/latest-price.action";
import CoinInfo from "../../components/coin-info/CoinInfo";
import { useAppDispatch, useAppSelector } from "../../hooks/typed-selector";
import PageLayout from "../../layout/PageLayout";
import MarketBar from "./components/MarketBar";
import useActiveHook from "./hooks/useActiveHook";

const OverView: FC = () => {
  const trendingMarkets = useAppSelector(
    state => state.tendingMarketsReducer.data
  );
  const [active, handleClick, clear] = useActiveHook(trendingMarkets);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getLatestPriceActionCreator());
    return () => {
      clear();
    };
  }, []);
  return (
    <PageLayout>
      <MarketBar markets={trendingMarkets} />
      <div>{active && <CoinInfo {...active} />}</div>
    </PageLayout>
  );
};

export default OverView;
