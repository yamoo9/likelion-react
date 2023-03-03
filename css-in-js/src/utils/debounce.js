/**
 * 디바운스 유틸리티 함수
 * @param {() => void} callback 콜백 함수
 * @param {number} limit 밀리초(ms)
 * @returns {() => void} 디바운스 함수
 */
export function debounce(callback, limit = 300) {
  let timeout;
  return function (...args) {
    console.log(args);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}
