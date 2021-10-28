import { render, RenderResult } from "../../../helpers/test-utils";
import Menu from "../Menu";

describe("menu", () => {
  let wrapper: RenderResult, menuOptions: string[];
  beforeEach(() => {
    wrapper = render(<Menu />);
    menuOptions = ["home", "markets", "user", "blog", "support"];
  });
  it("should render", () => {
    expect(wrapper).toBeTruthy();
  });
  it("should render menu items", () => {
    menuOptions.forEach(option => {
      expect(wrapper.getByTitle(option)).toBeInTheDocument();
    });
  });
});
