import { render, screen, logRoles } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./counter";

describe("pointer interaction", () => {
  // TESTING INITIAL RENDER PART ----
  test("UI initial render", () => {
    render(<Counter />);
    let countElem = screen.getByRole("heading", { level: 1 });
    expect(countElem).toBeInTheDocument();
    expect(countElem).toHaveTextContent("0");

    let btnElem = screen.getByRole("button", { name: "Increase" });
    expect(btnElem).toBeInTheDocument();
  });

  // TESTING USER INTERACTION PART -----
  test("Count increases on click of button", async () => {
    // SETUP >>>
    user.setup();

    // RENDERING COMPONENT >>>
    render(<Counter />);

    // GETTING THE BUTTOM ELEMENT >>>
    let btnElem = screen.getByRole("button", { name: "Increase" });

    // CILCKING BUTTON 1 >>> (asyns task)
    await user.click(btnElem);

    // CHECKING THE COUNT INCREASED OR NOT >>>>
    let countElem1 = screen.getByRole("heading", { level: 1 });
    expect(countElem1).toHaveTextContent("1");

    // CILCKING BUTTON 2 >>> (asyns task)
    await user.click(btnElem);

    // CHECKING THE COUNT INCREASED OR NOT >>>>
    let countElem2 = screen.getByRole("heading", { level: 1 });
    expect(countElem2).toHaveTextContent("2");
  });
});
