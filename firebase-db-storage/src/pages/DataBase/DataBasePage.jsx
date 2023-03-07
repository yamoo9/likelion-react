import styled from 'styled-components/macro';
import { useLayoutEffect, useState } from 'react';
import {
  deleteTodoItem,
  onChangeTodoList,
  updateTodoItem,
} from '@/todoList/utils';
import { useDataState } from '@/firebase/firestore';
// import { useWriteBatchData } from '@/firebase/firestore';
// import shopData from './shopData';

export default function DataBasePage() {
  /* -------------------------------------------------------------------------- */

  const { data, error } = useDataState('categories/sneakers');

  console.log(data);

  // const { writeBatchData } = useWriteBatchData('categories', 'title');

  // useLayoutEffect(() => {
  // writeBatchData(shopData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  /* -------------------------------------------------------------------------- */

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

  const handleToggle = (id, data) => () => {
    console.log(id, data);
    updateTodoItem(id, {
      ...data,
      isComplete: !data.isComplete,
    });
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
                  onChange={handleToggle(id, data)}
                />{' '}
                {data.todo}
                <button
                  type="button"
                  onClick={() => {
                    deleteTodoItem(id);
                  }}
                >
                  삭제
                </button>
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
