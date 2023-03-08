import { useEffect } from 'react';
import { useRecoilSnapshot } from 'recoil';

export default function DebugObserver() {
  const snapshot = useRecoilSnapshot();

  useEffect(() => {
    console.debug('원자 업데이트 됨');

    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
}
