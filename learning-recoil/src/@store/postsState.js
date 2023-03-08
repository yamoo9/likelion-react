import { selector, selectorFamily } from 'recoil';

// Selector
export const postsState = selector({
  key: 'postsState',
  get: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error({
        message: '서버에서 오류가 발생했습니다.',
        status: 500,
      });
    }
    return response.json();
  },
});

// SelectorFamily

/**
 * postStateFamily 유틸리티
 * @param {{ page: number; limit: number; }} 옵션 page, limit 설정
 * @returns
 */
const postStateFamily =
  ({ page = 1, limit = 20 } = {}) =>
  async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}}&_limit=${limit}`
    );
    if (!response.ok) {
      throw new Error({
        message: '서버에서 오류가 발생했습니다.',
        status: 500,
      });
    }
    return response.json();
  };

export const postState = selectorFamily({
  key: 'postState',
  get: postStateFamily,
});

export const slowPostState = selectorFamily({
  key: 'slowPostState',
  get: (id) => async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (!response.ok) {
      throw new Error({
        message: '서버에서 오류가 발생했습니다.',
        status: 500,
      });
    }

    return response.json();
  },
});
