import { useRecoilValue } from 'recoil';
import { countState } from '@/@store/countState';

export default function Count() {
  const count = useRecoilValue(countState); // 읽기(GET)
  return <output>{count}</output>;
}
