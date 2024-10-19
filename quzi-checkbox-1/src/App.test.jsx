import { render, screen, fireEvent, toBe } from "@testing-library/react";
import App from "./App";
import { kebabCaseToTitleCase } from "./helpers";

test("button click flow", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /midnight-blue/i });

  expect(button).toHaveClass("medium-violet-red");

  fireEvent.click(button);

  expect(button).toHaveTextContent(/medium-violet-red/i);

  expect(button).toHaveClass("midnight-blue");
});

test("checkbox flow", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /midnight-blue/i });
  const checkbox = screen.getByRole("checkbox", { name: /disable button/i });

  expect(button).toBeEnabled();
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  expect(button).toHaveClass("gray");

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  expect(button).toHaveClass("medium-violet-red");
});

test("checkBox flow after button click", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /midnight-blue/i });
  const checkbox = screen.getByRole("checkbox", { name: /disable button/i });

  fireEvent.click(button);
  expect(button).toHaveClass("midnight-blue");

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  expect(button).toHaveClass("gray");
});

describe("kebabCaseToTitleCase", () => {
  test("works for no hyphens", () => {
    expect(kebabCaseToTitleCase("red")).toBe("Red");
  });
  test("works for one hyphens", () => {
    expect(kebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
  });
  test("works for multiple hyphens", () => {
    expect(kebabCaseToTitleCase("medium-violet-red")).toBe("Medium Violet Red");
  });
});
