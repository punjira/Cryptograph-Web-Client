import { motion, Variants } from "framer-motion";
import { FC } from "react";
import styled from "styled-components";
import { Coin } from "../../../types/market.types";
import tw from "twin.macro";

interface MarketItemProps extends Coin {
  animationDelay: number;
}

const AnimationVariant: Variants = {
  hidden: {
    opacity: 0
  },
  visible: i => ({
    opacity: 1,
    transition: {
      delay: 1 + 0.1 * i
    }
  })
};

const StyledContainer = styled(motion.div).attrs({
  className:
    "shadow select-none rounded p-1 m-1 flex flex-row items-center cursor-pointer"
})``;

const MarketItem: FC<MarketItemProps> = ({ animationDelay, ...props }) => {
  return (
    <StyledContainer
      initial={"hidden"}
      animate="visible"
      variants={AnimationVariant}
      custom={animationDelay}
      whileHover={{
        scale: 1.04
      }}
    >
      <img src={props.image} alt="coin-image" className="w-7 h-7 mr-1" />
      <h3 className="overflow-hidden">{props.ticker}</h3>
    </StyledContainer>
  );
};

export default MarketItem;
