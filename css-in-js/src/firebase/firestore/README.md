# Firebase/Firestore 훅

Firebase 파이어스토어(Firestore) 커스텀 훅 가이드 문서입니다.

- [useCreateAuthUser](#usecreateauthuser)
- [useWriteBatchData](#usewritebatchdata)
- [useCreateData](#usecreatedata)
- [useReadData](#usereaddata)
- [useUpdateData](#useupdatedata)
- [useDeleteData](#usedeletedata)

## useCreateAuthUser

Firestore에 인증 사용자 데이터를 쓰기하는 훅입니다.
인증 사용자를 Firestore에 저장하는 함수 그리고 로딩, 오류 상태를 관리합니다.

```jsx
const { createAuthUser, isLoading, error } = useCreateAuthUser(
  // 콜렉션 키, 옵션 (기본 값: 'users')
  'authUsers'
);
```

createAuthUser 함수는 회원가입(인증 사용자 생성) 후에 사용해야 합니다.
즉, 회원가입 폼을 통해 사용자가 입력한 정보가 Firebase 인증(authentication)에 등록된 후에 사용합니다.

```jsx
async function handleSignUp() {
  // ...
  // useSignUp 훅의 signUp 함수는 회원가입이 완료되면 사용자 정보를 반환합니다.
  const user = await signUp(email, password);

  // useCreateAuthUser 훅의 createAuthUser 함수는 사용자 정보를 전달 받아
  // Firestore에 인증 사용자 정보를 저장합니다.
  await createAuthUser(user);
}
```

## useWriteBatchData

Firestore에 모델링 된 데이터를 일괄 쓰기하는 훅입니다.
일괄 쓰기 함수 그리고 로딩, 오류 상태를 관리합니다.

훅은 콜렉션 키(필수), 도큐멘트 키(옵션: 기본 값 `key`)를 전달 받습니다.

```jsx
const { writeBatchData, isLoading, error } = useWriteBatchData(
  'categories',
  'title'
);
```

writeBatchData 함수는 전달 받은 데이터 리스트(배열)를 Firestore에 일괄 쓰기합니다.
이 함수의 사용 목적은 Firestore에 없는 데이터를 1회 일괄 쓰기하기 위함입니다.
매번 실행되도록 설정해서는 안됩니다. (⚠️ 주의!)

예를 들어 더미 데이터인 [shopData](https://gist.github.com/yamoo9/d94f140320402b63d99994436a75093d)를 writeBatchData 함수에 전달할 수 있습니다.

```jsx
writeBatchData(shopData);
```

## useCreateData

Firestore 특정 콜렉션에 데이터를 생성하는 훅입니다.
데이터를 생성하는 함수 그리고 생성된 도큐멘트 ID, 로딩, 오류 상태를 관리합니다.

훅에 전달하는 콜렉션 키는 필수 입력사항입니다.

```jsx
const { createData, docId, isLoading, error } = useCreateData('sample');
```

createData 함수에 생성할 데이터를 전달하면 useCreateData 훅에 전달한 콜렉션 내부에 도큐멘트(데이터)를 생성합니다.

```jsx
async function handleCreateData() {
  const data = {
    name: '생성할 데이터',
    isSample: true,
  };

  await createData(data);
}
```

## useReadData

Firestore 특정 콜렉션에서 데이터를 가져오는 훅입니다.
데이터를 읽어오는 함수 그리고 데이터, 로딩, 오류 상태를 관리합니다.

훅에 전달하는 콜렉션 키는 필수 입력사항입니다.

```jsx
const { readData, data, isLoading, error } = useReadData('sample');
```

readData 함수는 기본적으로 콜렉션의 모든 데이터를 가져옵니다.
특정 도큐멘트 데이터만 가져올 경우 도큐멘트 키를 전달할 수 있습니다.

```jsx
async function handleReadData() {
  // 모든 데이터를 가져옵니다.
  await readData();

  // 특정 도큐멘트 데이터만 가져옵니다.
  await readData('demo');
}
```

## useUpdateData

Firestore 특정 콜렉션의 특정 데이터를 수정하는 훅입니다.
데이터를 수정하는 함수 그리고 로딩, 오류 상태를 관리합니다.

훅에 전달하는 콜렉션 키는 필수 입력사항입니다.

```jsx
const { updateData, isLoading, error } = useUpdateData('sample');
```

updateData 함수는 도큐멘트 키 및 수정할 데이터 입력이 필수입니다.

```jsx
async function handleUpdateData() {
  const willUpdateData = {
    isDemo: true,
  };

  await updateData('demo', willUpdateData);
}
```

## useDeleteData

Firestore 특정 콜렉션의 특정 데이터를 삭제하는 훅입니다.
데이터를 삭제하는 함수 그리고 로딩, 오류 상태를 관리합니다.

훅에 전달하는 콜렉션 키는 필수 입력사항입니다.

```jsx
const { deleteData, isLoading, error } = useDeleteData('sample');
```

deleteData 함수는 도큐멘트 키 입력이 필수입니다.

```jsx
async function handleDeleteData() {
  await deleteData('demo');
}
```
