import { RenderResult, render } from "../../../helpers/test-utils";
import { Coin } from "../../../types/market.types";
import CoinInfo from "../CoinInfo";

import * as redux from "react-redux";

const useSelectorMock = jest.spyOn(redux, "useSelector");

describe("coin-info", () => {
  let wrapper: RenderResult, mockData: Coin;
  beforeEach(() => {
    useSelectorMock.mockReturnValue(12);
    mockData = {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM2JOtbnfbKk3cnr1Fm9RnEQ9j18cy1QidIQ&usqp=CAU",
      ticker: "shitusdt",
      name: "shit-coin"
    };
    wrapper = render(<CoinInfo {...mockData} />);
  });
  it("should render", () => {
    expect(wrapper).toBeTruthy();
  });
  it("should hold latest price from state", () => {
    expect(wrapper.getByText("$12")).toBeInTheDocument();
  });
});
