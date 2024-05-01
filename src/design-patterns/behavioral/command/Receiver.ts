export class Receiver {
  constructor() {}

  public do(payload: string) {
    return (payload += "ABC");
  }
}
