import { rest } from "msw";

// creating an array of fake rest APIs for our project
export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ name: "Senku" }, { name: "Chrome" }, { name: "Kohaku" }])
    );
  }),
];
