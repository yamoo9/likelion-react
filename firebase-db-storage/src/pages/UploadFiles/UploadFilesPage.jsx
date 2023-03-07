import { useId } from 'react';
import { A11yHidden } from '@/components';
import styled from 'styled-components/macro';
import { useUploadFiles } from '@/firebase/storage';

export default function UploadFilesPage() {
  const id = useId();

  useUploadFiles();

  const handleUploadFiles = () => {
    console.log('파일 업로드 요청');
  };

  return (
    <StyledContainer>
      <div>
        <A11yHidden as="label" htmlFor={id}>
          파일 업로드
        </A11yHidden>
        <input type="file" id={id} />
      </div>
      <button type="button" onClick={handleUploadFiles}>
        업로드
      </button>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 100px;
  text-align: center;
`;
