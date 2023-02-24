import { useState } from "react"
import { BaseLayout, FormInput, Button } from "@/components"
import classes from "./SignUp.module.scss"

/* Intialization ------------------------------------------------------------ */

const initialFormState = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
}

/* Component ---------------------------------------------------------------- */

export default function SignUp() {
  const [formState, setFormState] = useState(initialFormState)

  const handleReset = (e) => {
    e.preventDefault()

    console.log("reset")
    setFormState(initialFormState)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("회원가입 시도 → Firebase Authentication")
  }

  return (
    <BaseLayout className={classes.SignUp}>
      <h2>회원가입 페이지</h2>
      <form
        className={classes.form}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <FormInput
          vertical
          label="이름"
          value={formState.name}
          inputed={formState.name.length > 0}
          onChange={(e) => {
            setFormState({
              ...formState,
              name: e.target.value,
            })
          }}
        />

        <FormInput vertical type="email" label="이메일" />

        <FormInput vertical type="password" label="패스워드" />

        <FormInput vertical type="password" label="패스워드 확인" />

        <div className={classes.group}>
          <Button type="submit">회원가입</Button>
          <Button secondary type="reset" disabled>
            초기화
          </Button>
        </div>
      </form>
    </BaseLayout>
  )
}
