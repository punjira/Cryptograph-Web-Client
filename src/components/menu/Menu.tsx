import { FC } from "react";
import Item, { MenuItemProps } from "./components/Item";
import {
  FaHome,
  FaChartPie,
  FaUserAlt,
  FaHeart,
  FaReadme
} from "react-icons/fa";

const icon_default_style = "text-md text-gray-300 m-1";

const options: MenuItemProps[] = [
  {
    icon: <FaHome title="home" className={icon_default_style} />,
    link: "/app"
  },
  {
    icon: <FaChartPie title="markets" className={icon_default_style} />,
    link: "/market"
  },
  {
    icon: <FaUserAlt title="user" className={icon_default_style} />,
    link: "/user"
  },
  {
    icon: <FaReadme title="blog" className={icon_default_style} />,
    link: "/blog"
  },
  {
    icon: <FaHeart title="support" className={icon_default_style} />,
    link: "/support"
  }
];

const SideMenu: FC = props => {
  return (
    <div className="fixed flex flex-col align-middle bottom-2 right-0 mr-1">
      {options.map((el, index) => (
        <Item {...el} animationOrder={options.length - index} key={el.link} />
      ))}
    </div>
  );
};

export default SideMenu;
