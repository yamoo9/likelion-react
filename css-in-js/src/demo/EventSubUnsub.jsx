import { useEffect, useLayoutEffect } from 'react';

export function EventSubUnsub() {
  // 1. 종속성 배열의 중요성
  // - 종속성 배열이 없는 useEffect 훅은 리-렌더링 될 때 마다 이펙트 콜백이 실행된다.
  // - 종속성 배열이 빈 경우, useEffect 훅은 리-렌더링 되더라도 이펙트 콜백을 1회만 실행한다.

  // 2. 정리(cleanup)의 중요성
  // - 프로그래밍: 책임감
  // - 클린업 함수의 역할
  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  }, []);

  useEffect(() => {
    console.log('useEffect');
    console.log('타이머 구독 연결');
    let clearIntervalId = setInterval(() => {
      console.count('count');
    }, 2000);

    // cleanup function
    return () => {
      console.log('타이머 구독 연결 취소');
      clearInterval(clearIntervalId);
    };
  }, []);

  return <div>EventSubUnsub</div>;
}
