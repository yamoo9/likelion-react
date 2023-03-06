import { useReducer } from 'react';
import { StyledTodoList } from './styled';
import TodoItemCreator from './ TodoItemCreator';

/* Component ---------------------------------------------------------------- */

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

// Reducer Function
// 액션(객체: { type: string; payload?: unknown; })
const todoListReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
    case 'todoList/add':
      console.log('todoList/add');
      return [...state, action.payload];
    case 'todoList/toggle':
      console.log('todoList/toggle');
      return state;
    case 'todoList/edit':
      return state.map(({ id, data }) => {
        if (id === action.payload.id) {
          return { id, data: { ...data, ...action.payload.data } };
        }
        return { id, data };
      });
    case 'todoList/delete':
      return state.filter(({ id }) => id !== action.payload);
  }
};

export function TodoList() {
  const [todoListState, dispatch] = useReducer(
    todoListReducer,
    initialTodoListState
  );

  const addTodo = () => {
    dispatch({
      type: 'todoList/add',
      payload: {
        id: `todo-${todoListState.length + 1}`,
        data: {
          isComplete: false,
          todo: '프로젝트 합리적인 목표 설정',
        },
      },
    });
  };
  const editTodo = () => {
    dispatch({
      type: 'todoList/edit',
      payload: {
        id: 'todo-2',
        data: { todo: 'React Router 내일 마스터해봅시다.' },
      },
    });
  };
  const deleteTodo = () => {
    dispatch({ type: 'todoList/delete', payload: /* deleteId */ 'todo-1' });
  };

  console.log(todoListState);

  return (
    <StyledTodoList>
      <p>{todoListState.length}</p>
      <p>{todoListState.find(({ id }) => id === 'todo-2').data.todo}</p>

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
