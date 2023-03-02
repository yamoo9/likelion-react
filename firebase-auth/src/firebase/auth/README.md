# Firebase/Auth 훅

Firebase 인증(Authentication) 커스텀 훅 가이드 문서입니다.

- [useAuthState](#useauthstate)
- [useSignUp](#usesignup)
- [useSignIn](#usesignin)
- [useSignOut](#usesignout)

## useAuthState

Firebase 인증 상태 관리 훅으로 로딩, 오류, 인증 사용자 상태를 관리합니다.
인증 상태가 변경될 때 마다 인증 사용자 정보가 업데이트 됩니다.

```jsx
const { isLoading, error, user } = useAuthState();
```

## useSignUp

Firebase 인증 회원가입 훅입니다.

이메일/패스워드 회원가입을 처리하는 signUp 함수 그리고 로딩, 오류, 인증 사용자 상태를 관리합니다.
useSignUp 훅에 `true` 값을 설정하면 회원가입 사용자에게 이메일 인증(email validation)을 요청합니다.

```jsx
const { signUp, isLoading, error, user } = useSignUp();
```

signUp 함수는 이메일, 패스워드, 사용자 이름(옵션) 인자를 전달 받습니다.
사용자 이름을 전달하면 회원가입 된 사용자의 `displayName` 값으로 설정됩니다.

```jsx
signUp(email, password, displayName);
```

## useSignIn

Firebase 인증 로그인 훅입니다.

이메일/패스워드 로그인을 처리하는 signUp 함수 그리고 로딩, 오류, 인증 사용자 상태를 관리합니다.

```jsx
const { signIn, isLoading, error, user } = useSignIn();
```

signIn 함수는 이메일, 패스워드 인자를 전달 받아 Firebase 인증 로그인을 시도합니다.

```jsx
signIn(email, password);
```

## useSignOut

Firebase 인증 로그아웃 훅입니다.

로그아웃을 처리하는 signOut 함수 그리고 로딩, 오류 상태를 관리합니다.

```jsx
const { signOut, isLoading, error } = useSignOut();
```

signOut 함수는 Firebase 인증 로그아웃을 시도합니다.

```jsx
signOut();
```
