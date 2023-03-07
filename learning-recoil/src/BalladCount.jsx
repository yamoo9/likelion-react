import { useRecoilValue } from 'recoil';
import { balladCountState } from '@/@store/balladCountState';

export default function BalladCount() {
  const balladCount = useRecoilValue(balladCountState);

  return <span>({balladCount})</span>;
}
