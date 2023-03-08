import { useRecoilCallback } from 'recoil';

export default function DebugButton() {
  const onClick = useRecoilCallback(
    ({ snapshot }) =>
      async () => {
        console.debug('아톰 값');

        for (const node of snapshot.getNodes_UNSTABLE()) {
          const value = await snapshot.getPromise(node);
          console.debug(node.key, value);
        }
      },
    []
  );

  return <button onClick={onClick}>아톰 상태 디버깅</button>;
}
