// Greet should render the text "Hello" and if a name is passed into the component it should render "Hello <name>".

import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("Greet renders correctly TDD", () => {
  render(<Greet />);
  let textEle = screen.getByText("Hello");
  expect(textEle).toBeInTheDocument();
});

test("Greet renders correctly TDD with name", () => {
  render(<Greet name="Vikas" />);
  let textEle = screen.getByText("Hello Vikas");
  expect(textEle).toBeInTheDocument();
});
