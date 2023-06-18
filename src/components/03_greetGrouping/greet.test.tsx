// Greet should render the text "Hello" and if a name is passed into the component it should render "Hello <name>".

import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    let textEle = screen.getByText("Hello");
    expect(textEle).toBeInTheDocument();
  });

  test("renders correctly with name", () => {
    render(<Greet name="Vikas" />);
    let textEle = screen.getByText("Hello Vikas");
    expect(textEle).toBeInTheDocument();
  });
});

describe("Greet 2", () => {
  test("renders correctly", () => {
    render(<Greet />);
    let textEle = screen.getByText("Hello");
    expect(textEle).toBeInTheDocument();
  });

  describe("nested greet", () => {
    test("renders correctly with name", () => {
      render(<Greet name="Vikas" />);
      let textEle = screen.getByText("Hello Vikas");
      expect(textEle).toBeInTheDocument();
    });
  });
});
