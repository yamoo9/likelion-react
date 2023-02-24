import { useEffect } from 'react';

export function EventSubUnsub() {
  // 종속성 배열의 중요성
  // - 종속성 배열이 없는 useEffect 훅은 리-렌더링 될 때 마다 이펙트 콜백이 실행된다.
  // - 종속성 배열이 빈 경우, useEffect 훅은 리-렌더링 되더라도 이펙트 콜백을 1회만 실행한다.
  useEffect(() => {
    console.log('타이머 구독 연결');
    setInterval(() => {
      console.count('count');
    }, 3000);
  });

  return <div>EventSubUnsub</div>;
}
