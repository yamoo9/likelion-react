import { useRef } from 'react';
import { BaseLayout, FormInput, Button } from '@/components';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import classes from './SignUp.module.scss';

import { auth } from '@/firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const initialFormState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

/* Component ---------------------------------------------------------------- */

export default function SignUp() {
  useDocumentTitle('회원가입 → Likelion 4th');

  const formStateRef = useRef(initialFormState);

  const handleReset = (e) => {
    e.preventDefault();
    console.log('reset');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 유효성 검사
    // console.log(formStateRef.current);

    const { email, password } = formStateRef.current;

    try {
      // console.log('회원가입 시도 → Firebase Authentication');
      // 회원가입 기능(Firebase Auth 요청)
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
    } catch ({ code, message }) {
      console.error({ errorCode: code, errorMessage: message });
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
  };

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
