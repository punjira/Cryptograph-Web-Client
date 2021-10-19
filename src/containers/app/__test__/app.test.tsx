import { render } from "../../../helpers/test-utils";
import App from "../App";

describe("app container", () => {
  it("should render", () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();
  });
});
