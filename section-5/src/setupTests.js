import "@testing-library/jest-dom";

import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/server";

// beforeAll : API 모킹을 위해 먼저 수행
beforeAll(() => server.listen());

// afterEach : 테스트 간에 핸들러를 리셋 (이전 테스트에서 사용한 핸들러를 가져갈 필요가 없기때문)
afterEach(() => server.resetHandlers());

// afterAll : 모든 테스트가 끝난 후 서버를 종료.
afterAll(() => server.close());
