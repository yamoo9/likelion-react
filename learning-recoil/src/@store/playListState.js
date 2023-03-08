import { atom, selector } from 'recoil';

/* Atoms -------------------------------------------------------------------- */

export const playListState = atom({
  key: 'playListState',
  default: [
    '발라드',
    '클래식',
    '발라드',
    '힙합',
    '재즈',
    '발라드',
    '힙합',
    '힙합',
    '락',
    '재즈',
    '힙합',
    '발라드',
    '힙합',
    '힙합',
    '발라드',
    '락',
    '클래식',
  ],
});

/* Selectors (GET) ----------------------------------------------------------- */

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
