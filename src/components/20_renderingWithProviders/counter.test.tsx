import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";

import { Provider } from "react-redux";
import store from "../../store/store";

// HOC WHICH WILL WRAP A COMPONENT IN REDUX PROVIDER ----
const ProviderWrapper = (props: any) => {
  return <Provider store={store}>{props.children}</Provider>;
};

describe("rendering with provider", () => {
  test(" counter renders correctly", () => {
    // RENDERING THE COMPONENT WITH WRAPPED AROUND THE PROVIDER ----
    render(<Counter />, {
      wrapper: ProviderWrapper,
    });

    let countElem = screen.getByRole("heading");
    expect(countElem).toHaveTextContent("10");
  });
});
