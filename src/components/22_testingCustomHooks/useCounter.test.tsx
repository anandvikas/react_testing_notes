import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("testing hook", () => {
  test("hook works correctly without props", () => {
    const { result } = renderHook(useCounter);
    const { count, increment, decrement } = result.current;

    // INITIAL VALUE >>>
    expect(count).toBe(0);
  });

  test("hook works correctly with props", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    const { count, increment, decrement } = result.current;

    // INITIAL VALUE >>>
    expect(count).toBe(10);
  });
});

describe("testing changes in hook", () => {
  // FAILED TEST >>>>>
  // test("not using act()", () => {
  //   const { result } = renderHook(useCounter);
  //   const { count, increment } = result.current;

  //   increment();
  //   expect(count).toBe(1);
  // });

  // PASSED TEST (using act()) >>>>>
  test("using act", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
});
