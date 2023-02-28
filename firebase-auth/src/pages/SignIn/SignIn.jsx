import classes from './SignIn.module.scss';
import { BaseLayout } from '@/components';
import { usePhotos } from '@/services/usePhotos';

/* Component ---------------------------------------------------------------- */

export default function SignIn() {
  const state = usePhotos({
    page: 2,
    limit: 3,
  });

  console.log(state);

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
