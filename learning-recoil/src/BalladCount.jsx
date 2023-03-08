import { useRecoilValue } from 'recoil';
import { balladCountState } from '@/@store/playListState';

export default function BalladCount() {
  const balladCount = useRecoilValue(balladCountState);

  return <span>({balladCount})</span>;
}
