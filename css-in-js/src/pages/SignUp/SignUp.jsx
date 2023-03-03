import { useRef } from 'react';
import { BaseLayout, FormInput, Button } from '@/components';
import classes from './SignUp.module.scss';
import { useDocumentTitle } from '@/hooks';
import { useSignUp, useAuthState } from '@/firebase/auth';

const initialFormState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

/* Component ---------------------------------------------------------------- */

export default function SignUp() {
  useDocumentTitle('회원가입 → Likelion 4th');

  const { signUp } = useSignUp();

  const { isLoading, error, user } = useAuthState();

  /* -------------------------------------------------------------------------- */

  const formStateRef = useRef(initialFormState);

  const handleReset = (e) => {
    // e.preventDefault();
    console.log('reset');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, passwordConfirm } = formStateRef.current;

    // 유효성 검사
    if (!name || name.trim().length < 2) {
      console.error('이름은 2글자 이상 입력해야 해요');
      return;
    }

    if (!Object.is(password, passwordConfirm)) {
      console.error('입력한 패스워드를 다시 확인하세요.');
      return;
    }

    await signUp(email, password, name);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
  };

  if (isLoading) {
    return <div role="alert">페이지를 준비 중입니다.</div>;
  }

  if (error) {
    return <div role="alert">오류! {error.message}</div>;
  }

  console.log('관찰 중인 인증 사용자\n', user);

  return (
    <BaseLayout className={classes.SignUp}>
      <h2>회원가입 페이지</h2>

      <form
        className={classes.form}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <FormInput name="name" label="이름" onChange={handleChangeInput} />

        <FormInput
          name="email"
          type="email"
          label="이메일"
          onChange={handleChangeInput}
        />

        <FormInput
          name="password"
          type="password"
          label="패스워드"
          onChange={handleChangeInput}
        />

        <FormInput
          name="passwordConfirm"
          type="password"
          label="패스워드 확인"
          onChange={handleChangeInput}
        />

        <div className={classes.group}>
          <Button type="submit">회원가입</Button>
          <Button secondary type="reset">
            초기화
          </Button>
        </div>
      </form>
    </BaseLayout>
  );
}
