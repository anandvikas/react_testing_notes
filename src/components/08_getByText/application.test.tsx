import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("getByText", () => {
  test("renders correctly", () => {
    render(<Application />);

    let textOne = screen.getByText("Hello welcome!", { selector: "h3" });
    expect(textOne).toBeInTheDocument();

    let textTwo = screen.getByText("Hello welcome!", { selector: "p" });
    expect(textTwo).toBeInTheDocument();
  });
});
