import { useRecoilValue } from 'recoil';
import { orderListFamily, selectedOrderId } from './@store/orderListState';

export default function OrderListPage() {
  const orderId = useRecoilValue(selectedOrderId);
  const beverage = useRecoilValue(orderListFamily(orderId));

  return (
    <div>
      <h2>주문한 음료</h2>
      <div>
        <h3>{beverage.order}</h3>
        <span>{currencyKR(beverage.price)}</span>
      </div>
    </div>
  );
}

const numberWithComma = (n) => {
  return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

const currencyKR = (value) => {
  return `${numberWithComma(value)}원`;
};
