import { PlayingState } from "./PlayingState";
import { ReadyState } from "./ReadyState";
import { State } from "./State";

export class LockedState extends State {
  clickLock(): void {
    if (this.player.isPlaying()) {
      this.player.setState(new PlayingState(this.player));
    } else {
      this.player.setState(new ReadyState(this.player));
    }
  }
  clickPlay(): void {
    throw new Error("Method not implemented.");
  }
  clickNext(): void {
    throw new Error("Method not implemented.");
  }
  clickPrevious(): void {
    throw new Error("Method not implemented.");
  }
}
