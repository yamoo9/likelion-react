import { atom, atomFamily, selector } from 'recoil';

const initialOrderList = [
  { id: 'order-1', order: '아메리카노', price: 4800 },
  { id: 'order-2', order: '그린티 프라푸치노', price: 6200 },
  { id: 'order-3', order: '그린티 프라푸치노', price: 6200 },
  { id: 'order-4', order: '그린티 프라푸치노', price: 6200 },
];

export const orderListState = atom({
  key: 'orderListState',
  default: initialOrderList,
});

export const orderListFamily = atomFamily({
  key: 'orderListState',
  default: (id) => initialOrderList.find((order) => order.id === id),
});

export const selectedOrderId = atom({
  key: 'selectedOrderId',
  default: 'order-1',
});

export const orderListTotalCountState = selector({
  key: 'orderListTotalCountState',
  get: ({ get }) => {
    const orderList = get(orderListState);
    return orderList.length;
  },
});
