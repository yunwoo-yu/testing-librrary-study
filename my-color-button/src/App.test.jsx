import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button click flow", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /blue/i });

  expect(button).toHaveClass("red");

  fireEvent.click(button);

  expect(button).toHaveTextContent(/red/i);

  expect(button).toHaveClass("blue");
});

test("checkbox flow", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /blue/i });
  const checkbox = screen.getByRole("checkbox", { name: /disable button/i });

  expect(button).toBeEnabled();

  expect(checkbox).not.toBeChecked();
});
