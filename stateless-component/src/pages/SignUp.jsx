import React, { useState } from 'react';
import classes from '@/styles/SignUp.module.css';
import { BaseLayout, FormInput } from '@/components';

const initialFormState = {
  name: 'yamoo9',
  email: '',
  password: '',
  passwordConfirm: '',
};

export default function SignUp() {
  const [formState, setFormState] = useState(initialFormState);

  const handleReset = (e) => {
    e.preventDefault();

    console.log('reset');
    setFormState(initialFormState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('회원가입 시도 → Firebase Authentication');
  };

  return (
    <BaseLayout>
      <h2>회원가입 페이지</h2>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        {/* 이름(displayName) */}
        <FormInput
          vertical
          label="이름"
          value={formState.name}
          onChange={(e) => {
            setFormState({
              ...formState,
              name: e.target.value,
            });
          }}
          placeholder="성이름 2글자 이상"
        />

        {/* 이메일(email) */}
        <FormInput
          vertical
          type="email"
          label="이메일"
          placeholder="user@company.io"
        />

        {/* 패스워드(password) */}
        <FormInput
          vertical
          type="password"
          label="패스워드"
          placeholder="숫자, 영어 조합 6자리 이상"
        />

        {/* 패스워드 확인(password confirm) */}
        <FormInput
          vertical
          type="password"
          label="패스워드 확인"
          placeholder="먼저 입력한 패스워드와 동일하게 입력합니다."
        />

        <button type="submit">회원가입</button>
        <button type="reset">입력 초기화</button>
      </form>
    </BaseLayout>
  );
}
