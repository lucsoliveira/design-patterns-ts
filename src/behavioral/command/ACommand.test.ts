import { ACommand } from "./ACommand";
import { Receiver } from "./Receiver";

describe("ACommand", () => {
  test("Should pass payload to commander execute somethuing", () => {
    const receiver = new Receiver();
    receiver.do = jest.fn();
    const payload = "{payload:'1223'}";
    const aCommand = new ACommand(receiver, payload);
    aCommand.execute();

    expect(receiver.do).toBeCalledTimes(1);
    expect(receiver.do).toBeCalledWith(payload);
  });
});
