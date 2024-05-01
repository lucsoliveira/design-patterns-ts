import { LockedState } from "./LockedState";
import { ReadyState } from "./ReadyState";
import { State } from "./State";

export class PlayingState extends State {
  clickLock(): void {
    this.player.setState(new LockedState(this.player));
  }
  clickPlay(): void {
    this.player.stopPlayback();
    this.player.setPlaying(false);
    this.player.setState(new ReadyState(this.player));
  }
  clickNext(): void {
    throw new Error("Method not implemented.");
  }
  clickPrevious(): void {
    throw new Error("Method not implemented.");
  }
}
