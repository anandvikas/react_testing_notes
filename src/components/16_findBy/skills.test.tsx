import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("findByBy", () => {
  const skills = ["HTML", "CSS", "JavaScript"];  

  test("renders start learning button", async () => {
    render(<Skills skills={[]} />);
    const startLearnBtn = await screen.findByRole("button", { name: "Start learning" });
    expect(startLearnBtn).toBeInTheDocument();
  });

  test("renders logout button", async () => {
    render(<Skills skills={[]} />);
    const logoutBtn = await screen.findByRole("button", { name: "Logout" }, {timeout : 3000});
    expect(logoutBtn).toBeInTheDocument();
  });
});
