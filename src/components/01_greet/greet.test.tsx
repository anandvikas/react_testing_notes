import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  let textEle = screen.getByText(/hello/i);
  expect(textEle).toBeInTheDocument();
});
