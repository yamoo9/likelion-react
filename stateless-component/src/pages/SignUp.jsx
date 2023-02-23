import classes from '@/styles/SignUp.module.css';
import { BaseLayout, FormInput } from '@/components';

export default function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('회원가입 시도 → Firebase Authentication');
  };

  return (
    <BaseLayout>
      <h2>회원가입 페이지</h2>
      <form onSubmit={handleSubmit}>
        {/* 이름(displayName) */}
        <FormInput label="이름" placeholder="성이름 2글자 이상" />

        {/* 이메일(email) */}
        <FormInput type="email" label="이메일" placeholder="user@company.io" />

        {/* 패스워드(password) */}
        <FormInput
          type="password"
          label="패스워드"
          placeholder="숫자, 영어 조합 6자리 이상"
        />

        {/* 패스워드 확인(password confirm) */}

        <button type="submit">회원가입</button>
      </form>
    </BaseLayout>
  );
}
