import classes from '@/styles/SignIn.module.css';
import { BaseLayout, FormInput } from '@/components';

export default function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('로그인 시도 → Firebase Authentication');
  };

  return (
    <BaseLayout>
      <h2>로그인 페이지</h2>
      <form onSubmit={handleSubmit}>
        <FormInput type="email" label="이메일" placeholder="user@company.io" />
        <FormInput
          type="password"
          label="패스워드"
          placeholder="숫자, 영어 조합 6자리 이상"
        />
        <button type="submit">로그인</button>
      </form>
    </BaseLayout>
  );
}
