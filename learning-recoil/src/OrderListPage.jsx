import { useRecoilValue } from 'recoil';
import { orderListState } from './@store/orderListState';

export default function OrderListPage() {
  const orderList = useRecoilValue(orderListState);

  return (
    <div>
      <h2>주문 목록</h2>
      <ul>
        {orderList.map(({ id, order, price }) => (
          <li key={id}>
            <h3>{order}</h3>
            <span>{currencyKR(price)}</span>
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
