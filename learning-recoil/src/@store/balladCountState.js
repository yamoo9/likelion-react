import { selector } from 'recoil';
import { playListState } from './playListState';

export const balladCountState = selector({
  key: 'balladCountState',
  get: ({ get }) => {
    // 아톰 상태 의존
    const playList = get(playListState);

    const balladCount = playList.filter((genre) =>
      genre.includes('발라드')
    ).length;

    // 파생된 상태
    return balladCount;
  },
});
