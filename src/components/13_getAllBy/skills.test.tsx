import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("getByAll..", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("ul renders", () => {
    render(<Skills skills={skills} />);
    const listElem = screen.getByRole("list");
    expect(listElem).toBeInTheDocument();
  });

  test("li renders", () => {
    render(<Skills skills={skills} />);
    const listItemElem = screen.getAllByRole("listitem");
    expect(listItemElem).toHaveLength(skills.length);
  });
});
