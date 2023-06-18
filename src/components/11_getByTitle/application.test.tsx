import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("getByTitle", () => {
  test("renders correctly", () => {
    render(<Application />);

    let imageElement = screen.getByTitle("random image");
    expect(imageElement).toBeInTheDocument();
  });
});
