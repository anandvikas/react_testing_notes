import { render, screen } from "@testing-library/react";
import { Users } from "./user";
import { server } from "../../mocks/server";
import { rest } from "msw";

describe("mocked api testing", () => {
  test("Initial UI renders correctly", () => {
    render(<Users />);
    const headingElem = screen.getByText("Users");
    expect(headingElem).toBeInTheDocument();
  });

  test("List renders correctly", async () => {
    render(<Users />);
    const listElements = await screen.findAllByRole("listitem");
    expect(listElements).toHaveLength(3);
  });

  test("Error renders correctly", async () => {
    // FOR THIS WE NEED TO MODIFY OUR MOCK API TO THROW ERROR (NOTE : this modificatin is scoped to current block only and will not affect the real one.)
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    render(<Users />);
    const errorElem = await screen.findByText("Error fetching users");
    expect(errorElem).toBeInTheDocument();
  });
});
