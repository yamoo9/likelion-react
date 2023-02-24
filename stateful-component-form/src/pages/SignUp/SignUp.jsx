import { useRef } from 'react';
import { BaseLayout, FormInput, Button } from '@/components';
import classes from './SignUp.module.scss';

/* Init --------------------------------------------------------------------- */
const initialFormState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

/* Component ---------------------------------------------------------------- */

export default function SignUp() {
  const formStateRef = useRef(initialFormState);

  const handleReset = (e) => {
    e.preventDefault();
    console.log('reset');
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
    // console.log(formStateRef.current);
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
