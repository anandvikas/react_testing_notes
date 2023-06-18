import { render, screen, logRoles } from "@testing-library/react";
import { Skills } from "./skills";

describe("debug", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("list renders", () => {
    screen.debug();

    let view = render(<Skills skills={skills} />);

    screen.debug();

    logRoles(view.container);

    const startLearnBtn = screen.getAllByRole("listitem");
    expect(startLearnBtn).toHaveLength(skills.length);
  });
});
