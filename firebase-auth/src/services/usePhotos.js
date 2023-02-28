import { useFetch } from '@/hooks';

/**
 * 포토 가져오기 유틸리티 함수
 * @param {{ limit: number; page: number; }} options 페이지, 가져올 갯수
 * @returns {{ isLoading: boolean; error: null | Error; data: null | unknown }}
 */
export function usePhotos({ limit = 20, page = 1 } = {}) {
  return useFetch(
    `${import.meta.env.VITE_PHOTOS_API}?_page=${page}&_limit=${limit}`
  );
}
