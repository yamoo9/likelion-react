import { atom, atomFamily /* selector */ } from 'recoil';

const initialOrderList = [
  { id: 'order-1', order: '아메리카노', price: 4800 },
  { id: 'order-2', order: '그린티 프라푸치노', price: 6200 },
];

// static routing
// dynamic routing

// Atom
// 인자를 전달 받지 않고 그 자체의 아톰(상태) 반환
export const orderListState = atom({
  key: 'orderListState',
  default: initialOrderList,
});

// Atom Family
// 인자를 전달 받아 처리된 결과 값(아톰)을 반환하는 함수를 설정 가능
export const orderListFamily = atomFamily({
  key: 'orderListState',
  default: (id) => initialOrderList.find((order) => order.id === id),
  // default: (order) => initialOrderList.find(({order: orderName}) => orderName === order),
  // default: (index) => initialOrderList[index],
});

export const selectedOrderId = atom({
  key: 'selectedOrderId',
  default: 'order-1',
});

// Selector
// export const orderAmericanoState = selector({
//   key: 'orderAmericanoState',
//   get: ({ get }) => {
//     const orderList = get(orderListState);
//     return orderList[0];
//   },
// });

// export const orderGreenTeaState = selector({
//   key: 'orderGreenTeaState',
//   get: ({ get }) => {
//     const orderList = get(orderListState);
//     return orderList[1];
//   },
// });
