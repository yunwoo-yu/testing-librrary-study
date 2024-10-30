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

test("호버 시 팝오버가 나타나고 사라진다.", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  const termsAndConditions = screen.getByText(/terms and conditions/i);

  await user.hover(termsAndConditions);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);

  expect(popover).toBeInTheDocument();

  await user.unhover(termsAndConditions);

  expect(popover).not.toBeInTheDocument();
});
