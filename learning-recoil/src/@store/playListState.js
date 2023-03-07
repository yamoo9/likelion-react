import { atom } from 'recoil';

export const playListState = atom({
  key: 'playListState',
  default: [
    '발라드',
    '클래식',
    '발라드',
    '힙합',
    '락',
    '재즈',
    '재즈',
    '힙합',
    '락',
    '클래식',
  ],
});
