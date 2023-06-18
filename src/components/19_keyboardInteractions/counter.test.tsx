import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./counter";

describe("pointer interaction", () => {
  // TESTING INITIAL RENDER PART ----
  test("UI initial render", () => {
    render(<Counter />);
    let countElem = screen.getByRole("heading", { level: 1 });
    expect(countElem).toBeInTheDocument();
    expect(countElem).toHaveTextContent("0");

    let inputElem = screen.getByRole("spinbutton");
    expect(inputElem).toBeInTheDocument();
    expect(inputElem).toHaveValue(0);

    let btnElem = screen.getByRole("button", { name: "Set" });
    expect(btnElem).toBeInTheDocument();
  });

  // TESTING USER INTERACTION PART -----
  test("Count changes by setting amount", async () => {
    // SETUP >>>
    user.setup();

    // RENDERING COMPONENT >>>
    render(<Counter />);

    // GETTING THE BUTTON, INPUT AND COUNT ELEMENT >>>
    let btnElem = screen.getByRole("button", { name: "Set" });
    let inputElem = screen.getByRole("spinbutton");
    let countElem1 = screen.getByRole("heading", { level: 1 });

    // ENTERING VALUE 1 >>> (asyns task)
    await user.type(inputElem, "10");

    // CHECKING THE VALUE CHANGED IN INPUT OR NOT >>>>
    expect(inputElem).toHaveValue(10);

    // CILCKING BUTTON >>> (asyns task)
    await user.click(btnElem);

    // CHECKING THE COUNT INCREASED OR NOT >>>>
    expect(countElem1).toHaveTextContent("10");
  });

  test("Element get focused on clicking tab", async () => {
    // SETUP >>>
    user.setup();

    // RENDERING COMPONENT >>>
    render(<Counter />);

    // GETTING THE BUTTON, INPUT AND COUNT ELEMENT >>>
    let btnElem = screen.getByRole("button", { name: "Set" });
    let inputElem = screen.getByRole("spinbutton");

    // TAB 1 >>> (asyns task)
    await user.tab();

    // CHECKING INPUT IS FOCUSED OR NOT >>>>
    expect(inputElem).toHaveFocus();

    // TAB 2 >>> (asyns task)
    await user.tab();

    // CHECKING BUTTON IS FOCUSED OR NOT >>>>
    expect(btnElem).toHaveFocus();
  });
});
