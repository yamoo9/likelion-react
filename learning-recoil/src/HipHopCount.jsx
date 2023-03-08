import { useRecoilValue } from 'recoil';
import { hiphopCountState } from '@/@store/playListState';

export default function HipHopCount() {
  const hiphopCount = useRecoilValue(hiphopCountState);
  return <span>({hiphopCount})</span>;
}
