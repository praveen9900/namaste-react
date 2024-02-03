import { sum } from "../sum";

test("", () => {
  const result = sum(3, 5);

  expect(result).toBe(8);
});
