import { FC } from "react";

const PageLayout: FC = props => {
  return <div className="mt-1">{props.children}</div>;
};

export default PageLayout;
