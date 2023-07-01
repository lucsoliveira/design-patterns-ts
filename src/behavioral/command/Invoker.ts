import { Command } from "./Command";

export class Invoker {
  private onStart: Command | undefined;
  private onEnd: Command | undefined;

  constructor() {}

  public getOnStart() {
    return this.onStart;
  }

  public getOnEnd() {
    return this.onEnd;
  }

  /**
   * Initialize commands.
   */
  public setOnStart(command: Command): void {
    this.onStart = command;
  }

  public setOnEnd(command: Command): void {
    this.onEnd = command;
  }
  /**
   * The Invoker does not depend on concrete command or receiver classes. The
   * Invoker passes a request to a receiver indirectly, by executing a
   * command.
   */
  public init(): void {
    console.log("Invoker: Does anybody want something done before I begin?");
    if (this.onStart) {
      this.onStart.execute();
    }

    console.log("Invoker: ...doing something really important...");

    console.log("Invoker: Does anybody want something done after I finish?");
    if (this.onEnd) {
      this.onEnd.execute();
    }
  }
}
