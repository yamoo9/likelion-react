import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  orderListState,
  orderListTotalCountState,
  selectedOrderId,
} from './@store/orderListState';

export default function OrderListPage() {
  const orderList = useRecoilValue(orderListState);
  const totalCount = useRecoilValue(orderListTotalCountState);
  const setSelectedOrderId = useSetRecoilState(selectedOrderId);

  return (
    <div>
      <h2>주문 목록 ({totalCount})</h2>
      <ul>
        {orderList.map(({ id, order, price }) => (
          <li key={id}>
            <h3>{order}</h3>
            <span>{currencyKR(price)}</span>
            <button
              type="button"
              onClick={() => {
                setSelectedOrderId(id);
              }}
            >
              선택
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const numberWithComma = (n) => {
  return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

const currencyKR = (value) => {
  return `${numberWithComma(value)}원`;
};
