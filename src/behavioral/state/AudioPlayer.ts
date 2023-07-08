import { ReadyState } from "./ReadyState";
import { State } from "./State";

export class AudioPlayer {
  private state: State;
  protected volume: number | undefined;
  protected playlist: [number, string][] | undefined;
  protected currentSong: number | undefined;
  protected playing: boolean | undefined;
  protected playback: boolean | undefined;

  constructor() {
    this.state = new ReadyState(this);
    this.playing = false;
  }

  public getState() {
    return this.state;
  }

  public setState(state: State) {
    this.state = state;
  }

  public isPlaying() {
    return this.playing;
  }

  public setPlaying(value: boolean) {
    this.playing = value;
  }

  public isPlaybacking() {
    return this.playback;
  }

  public startPlayback() {
    this.playback = true;
  }

  public stopPlayback() {
    this.playback = false;
  }

  public nextSong() {
    return "Next song";
  }

  // delegate all clicks funcs to states
  public clickLock() {
    this.state.clickLock();
  }

  public clickPlay() {
    this.state.clickPlay();
  }

  public clickNext() {
    this.state.clickNext();
  }

  public clickPrevious() {
    this.state.clickPrevious();
  }
}
