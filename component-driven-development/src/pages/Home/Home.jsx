import { BaseLayout } from '@/components';
import classes from './Home.module.scss';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

/* Component ---------------------------------------------------------------- */

export default function Home() {
  useDocumentTitle('홈 → Likelion 4th');

  return (
    <BaseLayout>
      <div className={classes.container}>
        <h2 className={classes.headline}>홈 페이지</h2>
      </div>
    </BaseLayout>
  );
}
