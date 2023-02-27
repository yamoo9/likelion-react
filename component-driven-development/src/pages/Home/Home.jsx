import classes from './Home.module.scss';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { BaseLayout, Counter } from '@/components';
import { useMouse } from '@/hooks/useMouse';

/* Component ---------------------------------------------------------------- */

// React 컴포넌트 설계 전략
// - Stateful
// - Stateless

// React 컴포넌트 상태 관리 전략
// - lifting state up
// - props drilling

// React 컴포넌트 성능(Performance)
// - [x] useCallback
// - [ ] useMemo

export default function Home() {
  useDocumentTitle('홈 → Likelion 4th');

  const { x, y } = useMouse(10);

  return (
    <BaseLayout>
      <div className={classes.container}>
        <h2 className={classes.headline}>홈 페이지</h2>
        <div style={{ marginTop: 40, marginBottom: 40 }}>
          x: <span>{x}</span> / y: <span>{y}</span>
        </div>
        <Counter count={10} step={3} />
      </div>
    </BaseLayout>
  );
}
