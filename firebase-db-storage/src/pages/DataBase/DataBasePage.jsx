import styled from 'styled-components/macro';
import { writeBatchTodoList } from '@/todoList/utils';

export default function DataBasePage() {
  return (
    <>
      <StyledContainer>
        <button
          type="button"
          onClick={() => {
            writeBatchTodoList([
              { todo: 'Firebase 인증 사용하기', isComplete: true },
              {
                todo: 'Firebase 클라우드 파이어스토어 사용하기',
                isComplete: false,
              },
              { todo: 'Firebase 클라우드 스토리지 사용하기', isComplete: true },
            ]);

            console.log('write batch : todo list');
          }}
        >
          파일 일괄 쓰기
        </button>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 100px;
  text-align: center;
`;
