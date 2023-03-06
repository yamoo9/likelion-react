import { useRef } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { FormInput, Button } from '@/components';
import { useSignUp, useAuthState } from '@/firebase/auth';
import classes from './SignUpPage.module.scss';
import { useDocumentTitle } from '@/hooks';

const initialFormState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

/* Component ---------------------------------------------------------------- */

export default function SignUpPage() {
  useDocumentTitle('회원가입 → Likelion 4th');

  const { signUp } = useSignUp();

  const { isLoading, error, user } = useAuthState();

  console.log(user);

  /* -------------------------------------------------------------------------- */

  const formStateRef = useRef(initialFormState);

  const handleReset = () => {
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

  return (
    <div className={classes.SignUpPage}>
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
      <StyledParagraph>
        이미 가입한 사용자라면{' '}
        <StyledSignInLink to="/signin">로그인</StyledSignInLink>하세요.
      </StyledParagraph>
    </div>
  );
}

// ----------------------------------------------------------------------------------
// ✅ [TODO]
// ----------------------------------------------------------------------------------
// - [x] 회원가입 페이지 컴포넌트 하단에 로그인 페이지로 이동하는 링크를 추가합니다.
// - [x] HTML <a> 요소는 서버에 href 값과 일치하는 경로로 새 페이지 요청합니다.
//       React Router의 <Link /> 컴포넌트를 사용하면 `to` prop에 매칭되는 경로로 페이지를 전환합니다.
// ----------------------------------------------------------------------------------

const StyledParagraph = styled.p`
  margin-top: 20px;
  color: #787878;
  font-size: 14px;
`;

const StyledSignInLink = styled(Link)`
  color: #30b6ff;
`;
