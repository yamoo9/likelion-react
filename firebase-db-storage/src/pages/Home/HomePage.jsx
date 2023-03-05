import classes from './HomePage.module.scss';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

/* Component ---------------------------------------------------------------- */

export default function HomePage() {
  useDocumentTitle('홈 → Likelion 4th');

  return (
    <div className={classes.HomePage}>
      <h2 className={classes.headline}>홈 페이지</h2>
    </div>
  );
}
