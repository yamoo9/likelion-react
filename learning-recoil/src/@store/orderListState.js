import { atom } from 'recoil';

export const orderListState = atom({
  key: 'orderListState',
  default: [
    { id: 'order-1', order: '아메리카노', price: 4800 },
    { id: 'order-2', order: '그린티 프라푸치노', price: 6200 },
  ],
});
