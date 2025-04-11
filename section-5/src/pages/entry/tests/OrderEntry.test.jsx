import { render, screen } from "@testing-library/react";
import OrderEntry from "../OrderEntry";
import { http, HttpResponse } from "msw";
import { server } from "../../../mocks/server";

test("스쿱, 토핑의 핸들러 함수 에러를 체크한다.", async () => {
  server.resetHandlers(
    http.get("http://localhost:3030/scoops", () => {
      return new HttpResponse(null, { status: 500 });
    }),
    http.get("http://localhost:3030/toppings", () => {
      return new HttpResponse(null, { status: 500 });
    })
  );

  render(<OrderEntry />);

  const alerts = await screen.findAllByRole("alert");

  expect(alerts).toHaveLength(2);
});
