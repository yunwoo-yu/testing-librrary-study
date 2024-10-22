import App from "../../../App";
import { render, screen, fireEvent } from "@testing-library/react";

test("체크박스가 비활성화 상태이며 체크 시 버튼이 활성화 된다.", () => {
  render(<App />);

  const button = screen.getByRole("button", {
    name: /confirm order/i,
  });
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and Conditions/i,
  });

  expect(checkbox).not().toBeChecked();

  fireEvent.click(checkbox);

  expect(button).toBeEnabled();

  fireEvent.click(checkbox);

  expect(button).toBeDisabled();
});
