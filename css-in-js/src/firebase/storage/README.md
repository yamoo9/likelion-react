# Firebase/Storage 훅

Firebase 스토리지(Storage) 커스텀 훅 가이드 문서입니다.

- [useUploadFiles](#useuploadfiles)
- [useAllDownloadURL](#usealldownloadurl)
- [useDownloadURL](#usedownloadurl)
- [useDeleteFile](#usedeletefile)

## useUploadFiles

Firebase 스토리지에 하나 이상 파일을 업로드 하는 훅입니다.
여러 파일을 업로드 할 경우 \<input\> 요소에 `multiple` prop을 설정해야 합니다.

파일 업로드 인풋 요소 참조, 업로드 파일 함수 그리고 로딩, 오류, 파일 리스트 상태를 관리합니다.

```jsx
const {
  fileInputRef, // <input type="file" multiple ref={fileInputRef} /> 설정
  uploadFiles, // 파일 업로드 함수
  isLoading, // 로딩 상태
  error, // 오류 상태
  urlList, // 업로드 된 파일 리스트
} = useUploadFiles({
  // 업로드 디렉토리 이름, 옵션 (기본 값: 'assets')
  dirName: 'assets/images',
  // 고유한 파일 이름 설정을 위한 ID 사용 유무 (기본 값: true)
  usingId: false,
});
```

## useAllDownloadURL

Firebase 스토리지에서 모든 에셋의 다운로드 URL을 가져오는 훅입니다.
다운로드 할 수 있는 URL 리스트 그리고 로딩, 오류 상태를 관리합니다.

훅에 다운로드 할 특정 에셋 위치를 옵션을 전달할 수 있습니다. (예: `assets/images`)

```jsx
const { isLoading, error, downloadURLList } = useAllDownloadURL();
```

## useDownloadURL

Firebase 스토리지에서 에셋 다운로드 URL을 가져오는 훅입니다.
다운로드 할 수 있는 URL 그리고 로딩, 오류 상태를 관리합니다.

다운로드 할 특정 에셋 경로를 정확히 입력해야 합니다. (필수)

```jsx
const { isLoading, error, downloadURL } = useDownloadURL('assets/sample.jpg');
```

## useDeleteFile

Firebase 스토리지의 파일을 삭제하는 훅입니다.
파일 삭제 함수 그리고 로딩, 오류 상태를 관리합니다.

```jsx
const { deleteFile, isLoading, error } = useDeleteFile();
```

deleteFile 함수를 사용해 특정 에셋(예: `assets/demo.png`) 파일을 삭제할 수 있습니다.

```jsx
async function handleDeleteFile() {
  await deleteFile('assets/demo.png');
}
```
