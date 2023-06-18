import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("queryBy", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("ul renders", () => {
    render(<Skills skills={skills} />);
    const listElem = screen.getByRole("list");
    expect(listElem).toBeInTheDocument();
  });

  test("ul not renders", () => {
    render(<Skills skills={[]} />);
    const listElem = screen.queryByRole("list");
    expect(listElem).not.toBeInTheDocument();
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginBtn = screen.getByRole("button", { name: "Login" });
    expect(loginBtn).toBeInTheDocument();
  });

  test("not renders start learning button", () => {
    render(<Skills skills={skills} />);
    const loginBtn = screen.queryByRole("button", { name: "Start learning" });
    expect(loginBtn).not.toBeInTheDocument();
  });
});
