import { render, screen } from "@testing-library/react";
import { Comp } from "./comp";

// TEXT MATCH AS STRING ----
describe("TextMatch string", () => {
  test("full string match", () => {
    render(<Comp />);
    const elem = screen.getByText("Hello world !");
    expect(elem).toBeInTheDocument();
  });

  test("sub-string match", () => {
    render(<Comp />);
    const elem = screen.getByText("Hello", { exact: false });
    expect(elem).toBeInTheDocument();
  });

  // exact false flag ignores the case also ---
  test("ignore case match", () => {
    render(<Comp />);
    const elem = screen.getByText("hello", { exact: false });
    expect(elem).toBeInTheDocument();
  });
});

// TEXT MATCH AS REGEX ----
describe("TextMatch regex", () => {
  test("full string match", () => {
    render(<Comp />);
    const elem = screen.getByText(/^Hello world !$/);
    expect(elem).toBeInTheDocument();
  });

  test("full string match ignore case", () => {
    render(<Comp />);
    const elem = screen.getByText(/^hello world !$/i);
    expect(elem).toBeInTheDocument();
  });

  test("sub-string match", () => {
    render(<Comp />);
    const elem = screen.getByText(/Hello/);
    expect(elem).toBeInTheDocument();
  });

  test("sub-string match ignore case", () => {
    render(<Comp />);
    const elem = screen.getByText(/hello/i);
    expect(elem).toBeInTheDocument();
  });
});

// TEXT MATCH AS FUNCTION ----
describe("TextMatch function", () => {
  test("full string match", () => {
    render(<Comp />);
    const elem = screen.getByText((content) => content === "Hello world !");
    expect(elem).toBeInTheDocument();
  });

  test("sub-string match", () => {
    render(<Comp />);
    const elem = screen.getByText((content) => content.indexOf("Hello") !== -1);
    expect(elem).toBeInTheDocument();
  });
});
