import { atom, selector } from 'recoil';

export const exchangeRateState = atom({
  key: 'exchangeRateState',
  defaut: 0.00076,
});

export const wonState = atom({
  key: 'wonState',
  default: 1,
});

// 셀렉터 = 파생된 상태 계산 값 반환
// - 순수 함수
// - 읽기 전용
export const dollerState = selector({
  key: 'dollerState',
  get: ({ get }) => {
    const won = get(wonState);
    const exchangeRate = get(exchangeRateState);
    const doller = won * exchangeRate;
    return doller;
  },
});
