import styled from 'styled-components/macro';
import { useLayoutEffect, useState } from 'react';
import { onChangeTodoList } from '@/todoList/utils';

export default function DataBasePage() {
  const [todoList, setTodoList] = useState([]);

  useLayoutEffect(() => {
    const unsubscribe = onChangeTodoList((data) => {
      setTodoList(data);
    });

    return () => {
      console.log('onSnapshot 이벤트 구독 해지');
      unsubscribe();
    };
  }, []);

  const handleToggle = (id) => () => {
    console.log(id);
  };

  return (
    <>
      <StyledContainer>
        <button type="button" onClick={() => {}}>
          파일 일괄 쓰기
        </button>

        <ul>
          {todoList.map(({ id, data }) => {
            return (
              <li key={id}>
                <input
                  type="checkbox"
                  defaultChecked={data.isComplete}
                  onChange={handleToggle(id)}
                />{' '}
                {data.todo}
              </li>
            );
          })}
        </ul>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  margin-top: 100px;
  text-align: center;
`;
