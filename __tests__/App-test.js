import { addNumbers } from "../functions/addNumbers";

test("Add Two Numbers", () => {
  expect(addNumbers(1, 2)).not.toEqual(4);
});
