import classes from './SignIn.module.scss';
import { BaseLayout } from '@/components';

/* Component ---------------------------------------------------------------- */

export default function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('로그인 시도 → Firebase Authentication');
  };

  return (
    <BaseLayout className={classes.SignIn}>
      <h2>로그인 페이지</h2>
    </BaseLayout>
  );
}
