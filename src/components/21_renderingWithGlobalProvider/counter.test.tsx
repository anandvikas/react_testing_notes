// IMPORTED CUSTOM RENDER FUNCTION INSTEAD OF REGULAR RENDER FUNCTION >>>>
import { render, screen } from "../../test-utils";
import { Counter } from "./counter";

describe("rendering with globla provider", () => {
  test(" counter renders correctly", () => {
    render(<Counter />);

    let countElem = screen.getByRole("heading");
    expect(countElem).toHaveTextContent("10");
  });
});
