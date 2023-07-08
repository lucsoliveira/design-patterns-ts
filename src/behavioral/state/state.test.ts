import { AudioPlayer } from "./AudioPlayer";
import { LockedState } from "./LockedState";
import { PlayingState } from "./PlayingState";
import { ReadyState } from "./ReadyState";

describe("State Pattern", () => {
  describe("Audio Player class", () => {
    test("Should get state as instanceOf ReadyState when create the Audio Player", () => {
      const player = new AudioPlayer();
      expect(player.getState()).toBeInstanceOf(ReadyState);
      expect(player.getState()).not.toBeInstanceOf(LockedState);
    });

    test("Should get is playing false when create the Audio Player", () => {
      const player = new AudioPlayer();
      expect(player.isPlaying()).toBe(false);
      expect(player.getState()).toBeInstanceOf(ReadyState);
    });
  });

  describe("Ready State class", () => {
    test("Should set state to LockedState on click onLock", () => {
      const player = new AudioPlayer();
      const readyState = new ReadyState(player);
      player.setState(readyState);
      player.clickLock();

      expect(player.getState()).toBeInstanceOf(LockedState);
    });

    test("Should set stop playback when click clickPlay", () => {
      const player = new AudioPlayer();
      const readyState = new ReadyState(player);
      player.setState(readyState);
      player.clickPlay();

      expect(player.isPlaybacking()).toBe(false);
    });

    test("Should set state Playing when click clickPlay", () => {
      const player = new AudioPlayer();
      const readyState = new ReadyState(player);
      player.setState(readyState);
      player.clickPlay();

      expect(player.getState()).toBeInstanceOf(PlayingState);
      expect(player.getState()).not.toBeInstanceOf(ReadyState);
    });
  });

  describe("Locked State class", () => {
    test("Should change the state to ReadyState when click on clickLock but the player is not playing", () => {
      const player = new AudioPlayer();
      const lockedState = new LockedState(player);
      player.setState(lockedState);
      lockedState.clickLock();

      expect(player.getState()).toBeInstanceOf(ReadyState);
      expect(player.getState()).not.toBeInstanceOf(LockedState);
    });

    test("Should change the state to Playing state when click on clickLock but the player is playing", () => {
      const player = new AudioPlayer();
      const lockedState = new LockedState(player);
      player.setState(lockedState);
      player.setPlaying(true);

      lockedState.clickLock();

      expect(player.getState()).toBeInstanceOf(PlayingState);
    });
  });

  describe("Playing State class", () => {
    test("Should change the state to LockedState when click on clickLock", () => {
      const player = new AudioPlayer();
      const playingState = new PlayingState(player);
      player.setState(playingState);
      playingState.clickLock();

      expect(player.getState()).toBeInstanceOf(LockedState);
    });

    test("Should set playback false when click on clickPlay", () => {
      const player = new AudioPlayer();
      const playingState = new PlayingState(player);
      player.setState(playingState);
      playingState.clickPlay();

      expect(player.isPlaybacking()).toBe(false);
    });

    test("Should set state ReadyState when click on clickPlay", () => {
      const player = new AudioPlayer();
      const playingState = new PlayingState(player);
      player.setState(playingState);

      playingState.clickPlay();

      expect(player.getState()).toBeInstanceOf(ReadyState);
    });
  });
});
