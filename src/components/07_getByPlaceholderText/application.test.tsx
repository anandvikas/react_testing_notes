import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("getByPlaceholderText", () => {
  test("renders correctly", () => {
    render(<Application />);

    let nameElement = screen.getByPlaceholderText("Full name");
    expect(nameElement).toBeInTheDocument();

    let emailElement = screen.getByPlaceholderText("Email");
    expect(emailElement).toBeInTheDocument();
  });
});
