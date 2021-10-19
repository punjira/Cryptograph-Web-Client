/**
 * global test wrapper for redux and browser-router
 * this boiler plate is picker from official docs at
 * [https://testing-library.com/docs/react-testing-library/setup/]
 *
 */

import { FC, ReactElement } from "react";
import { render as MainRender, RenderOptions } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

const WithProviders: FC = ({ children }) => {
  return (
    <MemoryRouter>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => MainRender(ui, { wrapper: WithProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
