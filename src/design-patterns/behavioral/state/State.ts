import { AudioPlayer } from "./AudioPlayer";

export abstract class State {
  protected player: AudioPlayer;

  constructor(player: AudioPlayer) {
    this.player = player;
  }

  getPlayer() {
    return this.player;
  }

  abstract clickLock(): void;
  abstract clickPlay(): void;
  abstract clickNext(): void;
  abstract clickPrevious(): void;
}
