// Initial State
export const initialTodoListState = [
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
export const todoListReducer = (state, action) => {
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
      console.log('todoList/edit');
      return state.map(({ id, data }) => {
        if (id === action.payload.id) {
          return { id, data: { ...data, ...action.payload.data } };
        }
        return { id, data };
      });
    case 'todoList/delete':
      console.log('todoList/delete');
      return state.filter(({ id }) => id !== action.payload);
  }
};

// Action Creators
export const addTodo = (addContent, idKey) => ({
  type: 'todoList/add',
  payload: {
    id: `todo-${idKey}`,
    data: {
      todo: addContent,
      isComplete: false,
    },
  },
});

export const editTodo = (id, editContent) => ({
  type: 'todoList/edit',
  payload: {
    id,
    data: editContent,
  },
});

export const deleteTodo = (deleteId) => ({
  type: 'todoList/delete',
  payload: deleteId,
});
