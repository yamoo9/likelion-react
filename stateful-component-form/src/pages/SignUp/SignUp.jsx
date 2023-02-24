import { useState } from 'react';
import { BaseLayout, FormInput, Button } from '@/components';
import classes from './SignUp.module.scss';

/* Component ---------------------------------------------------------------- */

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleReset = (e) => {
    e.preventDefault();

    console.log('reset');

    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('회원가입 시도 → Firebase Authentication');
  };

  return (
    <BaseLayout className={classes.SignUp}>
      <h2>회원가입 페이지</h2>
      <form
        className={classes.form}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <FormInput
          label="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FormInput
          type="email"
          label="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          type="password"
          label="패스워드"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <FormInput
          type="password"
          label="패스워드 확인"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
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
