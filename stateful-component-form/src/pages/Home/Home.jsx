import { BaseLayout } from '@/components';
import classes from './Home.module.scss';

/* Component ---------------------------------------------------------------- */

export default function Home() {
  return (
    <BaseLayout>
      <div className={classes.container}>
        <h2 className={classes.headline}>홈 페이지</h2>
      </div>
    </BaseLayout>
  );
}
