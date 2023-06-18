import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("getByDisplayValue", () => {
  test("renders correctly", () => {
    render(<Application />);

    let nameElement = screen.getByDisplayValue("vikas");
    expect(nameElement).toBeInTheDocument();

    let bioElement = screen.getByDisplayValue("web developer");
    expect(bioElement).toBeInTheDocument();

    let countryElement = screen.getByDisplayValue("India");
    expect(countryElement).toBeInTheDocument();
  });
});
