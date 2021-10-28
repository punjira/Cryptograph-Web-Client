/**
 * calling clear should avoid any memory leak from setTimeOut
 */
import { useEffect, useState } from "react";
import { Coin } from "../../../types/market.types";

export default function (
  coins: Coin[]
): [Coin | undefined, (d: string) => void, () => void] {
  const [activeCoin, setActiveCoin] = useState<Coin | undefined>();
  let timeout: NodeJS.Timeout;
  useEffect(() => {
    if (coins.length) setActiveCoin(coins[0]);
  }, [coins]);
  useEffect(() => {
    timeout = setTimeout(() => {
      if (activeCoin && coins.includes(activeCoin)) {
        const i = coins.indexOf(activeCoin);
        if (i < coins.length - 1) {
          setActiveCoin(coins[i + 1]);
        } else {
          setActiveCoin(coins[0]);
        }
      }
    }, 10000);
  }, [activeCoin]);
  return [
    activeCoin,
    (coin: string) => {
      clearTimeout(timeout);
      setActiveCoin(coins.find(el => el.ticker === coin));
    },
    () => {
      clearTimeout(timeout);
    }
  ];
}
