// Audio effects disabled
class SoundManager {
  init() {}
  toggleMute() { return true; }
  playSuccess() {}
  playError() {}
  playClick() {}
  playCaravanStep() {}
  playFanfare() {}
}

export const soundManager = new SoundManager();
