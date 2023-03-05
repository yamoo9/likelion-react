# Firebase/Firestore 훅

Firebase 파이어스토어(Firestore) 커스텀 훅 가이드 문서입니다.
커스텀 훅으로 제공되지 않는 기능은 [Cloud Firestore](https://firebase.google.com/docs/firestore?hl=ko) 공식 문서를 참고해 구현해야 합니다.

- [useCreateAuthUser](#usecreateauthuser)
- [useWriteBatchData](#usewritebatchdata)
- [useDataState](#usedatastate)
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

## useDataState

Firestore 데이터 실시간 업데이트 감지 훅입니다.
감지할 데이터의 콜렉션 키(필수) 입력이 요구됩니다.

```jsx
const { data, error } = useDataState('collectionKey');
```

특정 도큐멘트의 데이터 업데이트만 감지해야 할 경우 도큐멘트 키(옵션)를 제공합니다.

```jsx
const { data, error } = useDataState('collectionKey', 'documentKey');
```

사용자 편의를 위해 `컬렉션 키/도큐멘트 키` 문법도 지원합니다.

```jsx
const { data, error } = useDataState('collectionKey/documentKey');
```

## useCreateData

Firestore 특정 콜렉션에 데이터를 생성하는 훅입니다.
데이터를 생성하는 함수 그리고 생성된 도큐멘트 ID, 로딩, 오류 상태를 관리합니다.

훅에 전달하는 콜렉션 키는 필수 입력사항입니다.

```jsx
const { createData, docId, isLoading, error } = useCreateData('collectionKey');
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
const { readData, data, isLoading, error } = useReadData('collectionKey');
```

readData 함수는 기본적으로 콜렉션의 모든 데이터를 가져옵니다.
특정 도큐멘트 데이터만 가져올 경우 도큐멘트 키를 전달할 수 있습니다.

```jsx
async function handleReadData() {
  // 모든 데이터를 가져옵니다.
  await readData();

  // 또는 특정 도큐멘트 데이터만 가져옵니다.
  await readData('documentKey');
}
```

## useUpdateData

Firestore 특정 콜렉션의 특정 데이터를 수정하는 훅입니다.
데이터를 수정하는 함수 그리고 로딩, 오류 상태를 관리합니다.

훅에 전달하는 콜렉션 키는 필수 입력사항입니다.

```jsx
const { updateData, isLoading, error } = useUpdateData('collectionKey');
```

updateData 함수는 수정할 데이터(필수) 및 도큐멘트 키(선택)를 입력 받습니다.

```jsx
async function handleUpdateData() {
  const willUpdateData = {
    isDemo: true,
  };

  await updateData(willUpdateData, 'documentKey');
}
```

useUpdateData 훅 실행 시, 도큐멘트 키를 포함시킬 수 있습니다.

```jsx
const { updateData } = useUpdateData('collectionKey/documentKey');
```

도큐멘트 키가 포함된 경우, updateData 함수 실행 시 도큐멘트 키를 생략할 수 있습니다.

```jsx
async function handleUpdateData() {
  const willUpdateData = {
    isDemo: true,
  };

  await updateData(willUpdateData);
}
```

기존 데이터와 함께 병합해야 할 경우는 useDataState 함께 사용할 수 있습니다.
예를 들어 categories 콜렉션 → mens 도큐멘트 → items 배열 필드 데이터를 업데이트할 경우 
다음과 같이 코드를 작성합니다.

```jsx
const { data } = useDataState('categories/mens');
const { updateData } = useUpdateData('categories/mens');

async function handleUpdateData() {
  const willUpdateData = {
    // 업데이트 정보 ...
  };

  await updateData({
    items: [
      ...data.items,
      willUpdateData,
    ]
  });
}
```

기존 데이터에서 특정 아이템을 삭제해야 할 경우에도 updateData 함수를 사용합니다.
예를 들어 categories 콜렉션 → hats 도큐멘트 → items 배열 필드 데이터 중 하나를 삭제해야 경우 
다음과 같이 코드를 작성합니다.

```jsx
const { data } = useDataState('categories/hats');
const { updateData } = useUpdateData('categories/hats');

async function handleDeleteData(deleteId) {
  const willUpdateData = data.items.filter((item) => item.id !== deleteID);

  await updateData({
    items: willUpdateData
  });
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
