import classes from './SignIn.module.scss';
import { BaseLayout, FormInput, Button } from '@/components';
import styled from 'styled-components';

import { useSignIn, useAuthState, useSignOut } from '@/firebase/auth';
import { useRef } from 'react';

const Loading = styled.figure`
  margin: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  font-size: 60px;
  text-align: center;
`;

const Position = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  text-align: ${({ center }) => (center ? 'center' : null)};

  & li:first-child {
    font-weight: 800;
    font-size: 2rem;
  }
`;

/* Component ---------------------------------------------------------------- */

const initialFormState = {
  email: '',
  password: '',
};

export default function SignIn() {
  const formStateRef = useRef(initialFormState);

  const { isLoading: isLoadingSignIn, signIn } = useSignIn();
  const { signOut } = useSignOut();
  const { isLoading, error, user } = useAuthState();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { email, password } = formStateRef.current;
    console.log({ email, password });

    await signIn(email, password);
  };

  const handleSignOut = async () => {
    console.log('로그아웃');
    signOut();
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
  };

  if (isLoading) {
    return <Loading role="alert">페이지를 준비 중입니다.</Loading>;
  }

  if (error) {
    return <div role="alert">오류! {error.message}</div>;
  }

  if (user) {
    return (
      <BaseLayout className={classes.SignIn}>
        <h2>인증 사용자 페이지</h2>
        <Position>
          <List center>
            <li>{user.displayName}</li>
            <li>{user.email}</li>
          </List>
          <Button secondary onClick={handleSignOut}>
            로그아웃
          </Button>
        </Position>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout className={classes.SignIn}>
      <h2>로그인 페이지</h2>

      <form className={classes.form} onSubmit={handleSignIn}>
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

        <div className={classes.group}>
          <Button type="submit" disabled={isLoadingSignIn}>
            {!isLoadingSignIn ? '로그인' : '로그인 중...'}
          </Button>
        </div>
      </form>
    </BaseLayout>
  );
}
