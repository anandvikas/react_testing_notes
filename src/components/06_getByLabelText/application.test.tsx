import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("getByLabelText", () => {
  test("renders correctly", () => {
    render(<Application />);

    let nameElement = screen.getByLabelText("Name");
    expect(nameElement).toBeInTheDocument();

    let bioElement = screen.getByLabelText("Bio");
    expect(bioElement).toBeInTheDocument();

    let jobLocationElement = screen.getByLabelText("Job location");
    expect(jobLocationElement).toBeInTheDocument();

    let tncElement = screen.getByLabelText(
      "I agree to the terms and conditions",
      { selector: "input" }
    );
    expect(tncElement).toBeInTheDocument();

    let tncSelectElement = screen.getByLabelText(
      "I agree to the terms and conditions",
      { selector: "select" }
    );
    expect(tncSelectElement).toBeInTheDocument();
  });
});
