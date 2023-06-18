import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("getByAltText", () => {
  test("renders correctly", () => {
    render(<Application />);

    let imageElement = screen.getByAltText("some random image");
    expect(imageElement).toBeInTheDocument();
  });
});
