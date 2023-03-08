import { atom, selector } from 'recoil';

export const exchangeRateState = atom({
  key: 'exchangeRateState',
  default: 0.00076,
});

export const wonState = atom({
  key: 'wonState',
  default: 1,
});

/* 셀렉터 (GET) ---------------------------------------------------------------- */

// 셀렉터 = 파생된 상태 계산 값 반환
// - 순수 함수
// - 읽기/쓰기
export const dollerGetState = selector({
  key: 'dollerGetState',
  get: ({ get }) => {
    const won = get(wonState);
    const exchangeRate = get(exchangeRateState);
    const doller = won * exchangeRate;
    return doller.toFixed(6);
  },
});

/* 셀렉터 (GET/SET) ------------------------------------------------------------ */

export const dollerState = selector({
  key: 'dollerState',
  get: ({ get }) => {
    const won = get(wonState);
    const exchangeRate = get(exchangeRateState);
    const doller = won * exchangeRate;
    return doller.toFixed(6);
  },
  set: ({ get, set }, newValue) => {
    const exchangeRate = get(exchangeRateState);
    const wonValue = Number(newValue) / exchangeRate;
    set(wonState, Math.round(wonValue));
  },
});
