import { FC } from "react";
import styled from "styled-components";
import { Coin } from "../../../types/market.types";
import MarketItem from "./MarketItem";

interface MarketBarProps {
  markets: Coin[];
}

const StyledContainer = styled.div.attrs({
  className: "select-none overflow-x-auto overflow-y-hidden"
})`
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

const MarketBar: FC<MarketBarProps> = props => {
  return (
    <StyledContainer>
      <div className="flex flex-row w-max">
        {props.markets.map((el, index) => (
          <MarketItem {...el} animationDelay={index} />
        ))}
      </div>
    </StyledContainer>
  );
};

export default MarketBar;
