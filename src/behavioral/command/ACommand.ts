import { Command } from "./Command";

export class ACommand implements Command {
  private receiver: any;
  private payload: string;

  constructor(receiver: any, payload: string) {
    this.receiver = receiver;
    this.payload = payload;
  }

  public execute(): void {
    this.receiver.do(this.payload);
  }
}
