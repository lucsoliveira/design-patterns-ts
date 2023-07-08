import { LockedState } from "./LockedState";
import { PlayingState } from "./PlayingState";
import { State } from "./State";

export class ReadyState extends State {
  clickLock(): void {
    this.player.setState(new LockedState(this.player));
  }
  clickPlay(): void {
    this.player.setPlaying(true);
    this.player.stopPlayback();
    this.player.setState(new PlayingState(this.player));
  }
  clickNext(): void {
    throw new Error("Method not implemented.");
  }
  clickPrevious(): void {
    throw new Error("Method not implemented.");
  }
}
