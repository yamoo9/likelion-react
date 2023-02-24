import { useRef, useState } from 'react';
import { BaseLayout, FormInput, Button } from '@/components';
import classes from './SignUp.module.scss';
import { EventSubUnsub } from '@/demo/EventSubUnsub';

const initialFormState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

/* Component ---------------------------------------------------------------- */

// useState vs. useRef
// re-rendering (immutation) vs. re-rendering ❌ (mutation)

export default function SignUp() {
  const [message, setMessage] = useState('before update');

  const formStateRef = useRef(initialFormState);

  const handleReset = (e) => {
    e.preventDefault();

    console.log('reset');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formStateRef.current);

    console.log('회원가입 시도 → Firebase Authentication');
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
  };

  return (
    <BaseLayout className={classes.SignUp}>
      <EventSubUnsub />
      <p>{message}</p>
      <button
        type="button"
        onClick={() =>
          setMessage(
            message.includes('before update') ? 'after update' : 'before update'
          )
        }
      >
        update
      </button>
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
