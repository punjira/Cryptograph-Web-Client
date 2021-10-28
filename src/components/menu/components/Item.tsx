import { motion, Variants } from "framer-motion";
import { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

export interface MenuItemProps {
  icon: ReactElement;
  link: string;
  active?: boolean;
}

interface ItemProps extends MenuItemProps {
  animationOrder: number;
}

const V: Variants = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: i => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 1 + i * 0.1 }
  })
};

const StyledContainer = styled(NavLink).attrs({
  className: `flex bg-gray-800 p-2 rounded-0 md:rounded-full shadow-md cursor-pointer`
})`
  &:hover {
    ${tw`bg-gray-700`}
  }
  &.active {
    ${tw`bg-purple-500`}
  }
`;

const Item: FC<ItemProps> = ({ icon, link, animationOrder, active = true }) => {
  return (
    <motion.div
      variants={V}
      custom={animationOrder}
      initial="hidden"
      animate="visible"
      className="m-0 md:m-1"
    >
      <StyledContainer to={link}>{icon}</StyledContainer>
    </motion.div>
  );
};

export default Item;
