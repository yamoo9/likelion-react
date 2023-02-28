import classes from './SignIn.module.scss';
import { BaseLayout } from '@/components';
import { useMakeupProducts } from '@/services/useMakeupProducts';
import { usePhotos } from '@/services/usePhotos';

/* Component ---------------------------------------------------------------- */

export default function SignIn() {
  const alvaState = useMakeupProducts('alva');
  const booshState = useMakeupProducts('boosh');
  const photoState = usePhotos({ page: 5, limit: 50 }); // page 1, limit 20

  console.log({ alvaState, booshState, photoState });

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
