import { render, screen } from "@testing-library/react";

import Options from "../Options";

test("아이스크림 종류 별로 이미지를 표시한다.", async () => {
  render(<Options optionType="scoops" />);

  // 이미지를 찾는다.
  const scoopImages = await screen.findAllByRole("img", { name: /scoops$/i });

  // 이미지의 개수를 확인한다.
  expect(scoopImages).toHaveLength(2);

  // 이미지의 alt 속성을 확인한다.
  const altText = scoopImages.map((el) => el.alt);

  // 이미지의 alt text가 일치하는지 확인한다.
  expect(altText).toEqual(["Chocolate scoops", "Vanilla scoops"]);
});
