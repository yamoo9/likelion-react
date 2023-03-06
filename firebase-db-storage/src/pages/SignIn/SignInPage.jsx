import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import classes from './SignInPage.module.scss';
import { FormInput, Button } from '@/components';
import { useSignIn, useAuthState, useSignOut } from '@/firebase/auth';
import { useDocumentTitle } from '@/hooks';

/* Component ---------------------------------------------------------------- */

const initialFormState = {
  email: '',
  password: '',
};

export default function SignInPage() {
  useDocumentTitle('로그인 → Likelion 4th');

  const formStateRef = useRef(initialFormState);

  const { isLoading: isLoadingSignIn, signIn } = useSignIn();
  const { signOut } = useSignOut();
  const { isLoading, error, user } = useAuthState();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { email, password } = formStateRef.current;
    // console.log({ email, password });

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
    return <StyledLoading role="alert">페이지를 준비 중입니다.</StyledLoading>;
  }

  if (error) {
    return <div role="alert">오류! {error.message}</div>;
  }

  if (user) {
    return (
      <div className={classes.SignInPage}>
        <h2>인증 사용자 페이지</h2>
        <StyledPosition>
          <StyledList center>
            <li>{user.displayName}</li>
            <li>{user.email}</li>
          </StyledList>
          <Button secondary onClick={handleSignOut}>
            로그아웃
          </Button>
        </StyledPosition>
      </div>
    );
  }

  return (
    <div className={classes.SignInPage}>
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

      <StyledInfo>
        가입된 계정이 없다면 <Link to="/signup">회원가입</Link> 먼저 해야
        합니다.
      </StyledInfo>
    </div>
  );
}

/* Styled ------------------------------------------------------------------- */

const StyledLoading = styled.figure`
  margin: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  font-size: 20px;
  text-align: center;
  color: #31b5ff;
`;

const StyledPosition = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
`;

const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;
  text-align: ${({ center }) => (center ? 'center' : null)};

  & li:first-child {
    font-weight: 800;
    font-size: 2rem;
  }
`;

const StyledInfo = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #787878;

  a {
    color: #31b5ff;
  }
`;
