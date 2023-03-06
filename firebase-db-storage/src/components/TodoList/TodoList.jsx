import { useReducer } from 'react';
import { StyledTodoList } from './styled';
import TodoItemCreator from './ TodoItemCreator';

/* Component ---------------------------------------------------------------- */

// Reducer Function
// 액션(객체: { type: string; payload?: unknown; })
const todoListReducer = (
  state,
  action /* { type: string; payload?: unknown; } */
) => {
  console.log(action);

  // Add Todo
  // Edit Todo
  // Delete Todo

  // new State

  return state;
};

const initialTodoListState = [
  {
    id: 'todo-1',
    data: { todo: 'useReducer가 배우고 싶어요', isComplete: false },
  },
  {
    id: 'todo-2',
    data: { todo: 'Recoil도 배우고 싶어요', isComplete: false },
  },
];

// const lazyInit = (initialState) => {
//   // side effects
//   // 파생 상태(dervied State)
//   // return initialState
// };

export function TodoList() {
  // const [state, setState] = useState();
  const [todoListState, dispatch /* 알림(상태 업데이트) */] = useReducer(
    /* 리듀서 함수 */
    todoListReducer,
    /* 초깃값 (방법 1) */
    initialTodoListState
    /* 지연된 초기화 */
    // lazyInit
  );

  const addTodo = () => {
    dispatch({ type: 'todoList/add' });
  };
  const editTodo = () => {
    dispatch({ type: 'todoList/edit' });
  };
  const deleteTodo = () => {
    dispatch({ type: 'todoList/delete' });
  };

  return (
    <StyledTodoList>
      <button type="button" onClick={addTodo}>
        할 일 추가
      </button>
      <button type="button" onClick={editTodo}>
        할 일 수정
      </button>
      <button type="button" onClick={deleteTodo}>
        할 일 삭제
      </button>
      {/* TodoListFilters */}
      <TodoItemCreator />
      {/* TodoItem */}
      {/* TodoListStats */}
    </StyledTodoList>
  );
}
