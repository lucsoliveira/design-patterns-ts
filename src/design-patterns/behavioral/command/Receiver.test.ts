import { Receiver } from "./Receiver";

describe("Receiver", () => {
  test("Should execute do() correctly", () => {
    const initialValue = "123";
    const receiver = new Receiver();

    const result = receiver.do(initialValue);
    expect(result).toBe("123ABC");
  });
});
