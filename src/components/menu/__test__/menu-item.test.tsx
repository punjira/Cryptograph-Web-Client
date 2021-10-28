import { render, RenderResult } from "../../../helpers/test-utils";
import Item, { MenuItemProps } from "../components/Item";
import { FaReadme } from "react-icons/fa";

describe("menu item", () => {
  let wrapper: RenderResult, props: MenuItemProps;
  beforeEach(() => {
    props = {
      icon: <FaReadme title="test-icon" />,
      link: "/test"
    };
    wrapper = render(<Item {...props} animationOrder={1} />);
  });
  it("should render", () => {
    expect(wrapper).toBeTruthy();
  });
  it("should render icon", () => {
    expect(wrapper.getByTitle("test-icon")).toBeInTheDocument();
  });
});
