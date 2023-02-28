import { BaseLayout } from '@/components';
import classes from './SignIn.module.scss';
import { useFetch } from '@/hooks';

/* Component ---------------------------------------------------------------- */

export default function SignIn() {
  // 커스텀 훅 API 설계(Design)
  // const { isLoading, error, data } = useFetch(import.meta.env.VITE_NEWS_API)

  const { isLoading, error, data } = useFetch(import.meta.env.VITE_MAKEUP_API);

  console.log({ isLoading, error, data });

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
