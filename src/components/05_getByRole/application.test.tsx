import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("getByRole", () => {
  test("renders correctly", () => {
    render(<Application />);

    let mainHeading = screen.getByRole("heading", {level : 1});
    expect(mainHeading).toBeInTheDocument();

    let subHeading = screen.getByRole("heading", {level : 2});
    expect(subHeading).toBeInTheDocument();

    let nameElement = screen.getByRole("textbox", {name : "Name"});
    expect(nameElement).toBeInTheDocument();

    let bioText = screen.getByRole("textbox", {name : "Bio"});
    expect(bioText).toBeInTheDocument(); 

    let jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    let checkBoxElement = screen.getByRole("checkbox");
    expect(checkBoxElement).toBeInTheDocument();

    let submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
