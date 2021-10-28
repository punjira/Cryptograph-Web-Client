import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { selectPrice } from "../../selectors/latest-price.selector";
import { Coin } from "../../types/market.types";

interface CoinInfoProps extends Coin {
  link?: string;
}

const CoinInfo: FC<CoinInfoProps> = ({ ...props }) => {
  const latest_price = useSelector((state: RootState) =>
    selectPrice(state, props.ticker)
  );
  return (
    <div className="flex flex-row">
      <img src={props.image} className="w-16 h-16" />
      <div className="flex flex-col ml-1">
        <h1 className="font-bold">{props.name}</h1>
        <h3 className="text-sm">{props.ticker}</h3>
        <span>${latest_price}</span>
      </div>
    </div>
  );
};

export default CoinInfo;
