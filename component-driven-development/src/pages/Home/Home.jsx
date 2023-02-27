import { BaseLayout, Button, Logo } from '@/components';
import classes from './Home.module.scss';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { useMouse } from '@/hooks/useMouse';

/* Component ---------------------------------------------------------------- */

export default function Home() {
  useDocumentTitle('홈 → Likelion 4th');

  const { x, y } = useMouse(10);

  return (
    <BaseLayout>
      <div className={classes.container}>
        <h2 className={classes.headline}>홈 페이지</h2>
        <div style={{ marginTop: 40 }}>
          x: <span>{x}</span> / y: <span>{y}</span>
        </div>
      </div>
    </BaseLayout>
  );
}
