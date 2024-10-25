import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("체크박스와 버튼이 비활성화 상태이다.", () => {
  render(<SummaryForm />);

  const button = screen.getByRole("button", {
    name: /confirm order/i,
  });
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test("체크박스를 체크하면 버튼이 활성화 되고 해제하면 비활성화 된다.", async () => {
  const uesr = userEvent.setup();

  render(<SummaryForm />);

  const button = screen.getByRole("button", {
    name: /confirm order/i,
  });
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  await uesr.click(checkbox);

  expect(button).toBeEnabled();

  await uesr.click(checkbox);

  expect(button).toBeDisabled();
});
