import { render, screen } from "@testing-library/react";
import App from "./App";

test("button starts with correct color", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /blue/i });

  expect(button).toHaveClass("red");
});

test("button has correct color after click", () => {});
test("button has correct text after click", () => {});
