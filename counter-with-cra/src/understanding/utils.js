// 범쌤과 함께하는 즐거운 유틸리티 함수 만들기~
export function numberWithComma(n) {
  return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export function getRandomNumber(n) {
  return Math.round(Math.random() * n);
}

export function getRandomMinMax(min = 0, max = 100) {
  return getRandomNumber(max - min) + min;
}
