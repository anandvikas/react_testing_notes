import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("getByTestId", () => {
  test("renders correctly", () => {
    render(<Application />);

    let imageElement = screen.getByTestId("random image");
    expect(imageElement).toBeInTheDocument();
  });
});
