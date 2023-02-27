import classes from './Home.module.scss';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { BaseLayout, CounterStateless, CounterStateful } from '@/components';
import { useState } from 'react';

/* Component ---------------------------------------------------------------- */

// React 컴포넌트 설계 전략
// - Stateful
// - Stateless

// React 컴포넌트 상태 관리 전략
// - [x] 상태 끌어올리기(lifting state up) 전략
// - [ ] props drilling

// React 컴포넌트 성능(Performance)
// - [x] useCallback (함수 타입 값을 기억)
// - [x] useMemo (JavaScript의 모든 타입 값을 기억)

export default function Home() {
  useDocumentTitle('홈 → Likelion 4th');

  const [count, setCount] = useState(12);
  const [step] = useState(3);

  const handleIncrement = () => {
    setCount((count) => count + step);
  };

  const handleDecrement = () => {
    setCount((count) => count - step);
  };

  return (
    <BaseLayout>
      <div className={classes.container}>
        <h2 className={classes.headline}>홈 페이지</h2>
        <div style={{ display: 'flex', gap: 40, flexDirection: 'row' }}>
          <div hidden>
            <h3>Stateless</h3>
            <CounterStateless
              count={count}
              step={step}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
          </div>
          <div>
            <h3>Stateful</h3>
            <CounterStateful count={count} step={step} />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
