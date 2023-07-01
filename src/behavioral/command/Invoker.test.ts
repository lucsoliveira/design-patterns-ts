import { ACommand } from "./ACommand";
import { Invoker } from "./Invoker";
import { Receiver } from "./Receiver";
describe("Invoker", () => {
  test("Should set onStart", () => {
    const receiver = new Receiver();

    const payload = "{'test':'ABC'}";
    const commandA = new ACommand(receiver, payload);

    const invoker = new Invoker();

    expect(invoker.getOnStart()).toBe(undefined);

    invoker.setOnStart(commandA);

    expect(invoker.getOnStart()).toBe(commandA);
  });

  test("Should set onEnd", () => {
    const receiver = new Receiver();

    const payload = "{'test':'ABC'}";
    const commandA = new ACommand(receiver, payload);

    const invoker = new Invoker();

    expect(invoker.getOnEnd()).toBe(undefined);

    invoker.setOnEnd(commandA);

    expect(invoker.getOnEnd()).toBe(commandA);
  });

  test("Should execute init", () => {
    const receiver = new Receiver();

    const payload = "{'test':'ABC'}";
    const commandA = new ACommand(receiver, payload);

    const invoker = new Invoker();

    receiver.do = jest.fn();
    invoker.setOnStart(commandA);
    invoker.setOnEnd(commandA);

    invoker.init();

    expect(receiver.do).toBeCalledTimes(2);
    expect(receiver.do).toBeCalledWith(payload);
  });
});
