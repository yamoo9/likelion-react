import { selector } from 'recoil';
import { playListState } from './playListState';

export const hiphopCountState = selector({
  key: 'hiphopCountState',
  get: ({ get }) => {
    // 아톰 상태 의존
    const playList = get(playListState);

    const hiphopCount = playList.filter((genre) =>
      genre.includes('힙합')
    ).length;

    // 파생된 상태
    return hiphopCount;
  },
});
