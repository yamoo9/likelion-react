import { useReducer } from 'react';
import { StyledTodoList } from './TodoList.styled';
import TodoItemCreator from './ TodoItemCreator';
import {
  todoListReducer,
  initialTodoListState,
  addTodo as addTodoCreator,
  editTodo as editTodoCreator,
  deleteTodo as deleteTodoCreator,
} from './TodoList.slice';

/* Component ---------------------------------------------------------------- */

export function TodoList() {
  const [todoListState, dispatch] = useReducer(
    todoListReducer,
    initialTodoListState
  );

  const addTodo = (newTodoItem) => {
    dispatch(addTodoCreator(newTodoItem, todoListState.length + 1));
  };

  const editTodo = () => {
    dispatch(
      editTodoCreator('todo-2', { todo: 'React Router 내일 마스터해봅시다.' })
    );
  };

  const deleteTodo = () => {
    dispatch(deleteTodoCreator('todo-1'));
  };

  return (
    <StyledTodoList>
      <p>{todoListState.length}</p>

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
      <TodoItemCreator addTodo={addTodo} />
      {/* TodoItem */}
      {/* TodoListStats */}
    </StyledTodoList>
  );
}
