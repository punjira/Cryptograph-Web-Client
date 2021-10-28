import { render, RenderResult } from "../../../helpers/test-utils";
import App from "../App";

jest.mock(
  "../../../components/market-sentiment-bar/MarketSentimentBar.tsx",
  () => () => <div>sentiment</div>
);

describe("app container", () => {
  let wrapper: RenderResult;
  beforeEach(() => {
    wrapper = render(<App />);
  });
  it("should render", () => {
    expect(wrapper).toBeTruthy();
  });
  it("should render sentiment bar", () => {
    expect(wrapper.getByText("sentiment")).toBeInTheDocument();
  });
});
