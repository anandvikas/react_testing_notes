import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./counter";

describe("mocking function", () => {
  test("initial UI check without functions in prop", () => {
    render(<Counter count={0} />);
    const textElement = screen.getByRole("paragraph");
    expect(textElement).toHaveTextContent("0");
  });

  test("initial UI check with functions in prop", () => {
    // TO CHECK THIS WE NEED TO CREATE DUMMY FUNTIONS (MOCK FUNCTIONS) >>>>
    const handleIncrement = jest.fn();
    const handleDecrement = jest.fn();

    render(
      <Counter
        count={0}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    );
    const textElement = screen.getByRole("paragraph");
    const incBtn = screen.getByRole("button", { name: "Increment" });
    const decBtn = screen.getByRole("button", { name: "Decrement" });

    expect(textElement).toHaveTextContent("0");
    expect(incBtn).toBeInTheDocument();
    expect(decBtn).toBeInTheDocument();
  });

  // TO CHECK IS ONCLICK HANDLERS ARE PROPERLY CALLED OR NOT WHEN BUTTONS ARE CLICKED >>>
  test("checking, do buttons calls the handler ?", async () => {
    const handleIncrement = jest.fn();
    const handleDecrement = jest.fn();

    render(
      <Counter
        count={0}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    );
    const incBtn = screen.getByRole("button", { name: "Increment" });
    const decBtn = screen.getByRole("button", { name: "Decrement" });

    expect(incBtn).toBeInTheDocument();
    expect(decBtn).toBeInTheDocument();

    await user.click(incBtn);
    await user.click(incBtn);
    await user.click(decBtn);

    expect(handleIncrement).toHaveBeenCalledTimes(2);
    expect(handleDecrement).toHaveBeenCalledTimes(1);
  });
});

