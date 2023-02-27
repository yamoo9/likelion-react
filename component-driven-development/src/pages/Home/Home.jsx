import { BaseLayout, Button, Logo } from '@/components';
import classes from './Home.module.scss';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

/* Component ---------------------------------------------------------------- */

export default function Home() {
  useDocumentTitle('홈 → Likelion 4th');

  return (
    <BaseLayout>
      <div className={classes.container}>
        <h2 className={classes.headline}>홈 페이지</h2>
        <div className={classes.buttonGroup}>
          <Button>로그인</Button>
          <Button secondary>로그인</Button>
          <Button disabled>로그인</Button>
          <Button secondary disabled>
            로그인
          </Button>
        </div>
        <div className={classes.logoGroup}>
          <Logo />
          <Logo rotation={90} />
        </div>
      </div>
    </BaseLayout>
  );
}
