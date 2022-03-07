import { atom } from 'recoil';

export const isPlayingState = atom({
  key: 'playingState',
  default: false,
});

export const currentTrackIdState = atom({
  key: 'currentTrackIdState',
  default: null,
});
