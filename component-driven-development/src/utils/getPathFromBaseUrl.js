// 참고: https://vitejs-kr.github.io/guide/build.html#public-base-path
export const getPathFromBaseUrl = (path = '') =>
  `${import.meta.env.BASE_URL}${path}`;
