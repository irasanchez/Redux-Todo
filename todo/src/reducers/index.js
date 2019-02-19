import { ADD_TODO, TOGGLE_TODO } from "./../actions";

const initialState = {
  todos: [
    {
      text: "example",
      completed: false,
      id: Math.random()
    }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload]
      };
    case TOGGLE_TODO:
      const todoId = action.payload;
      const newTodos = state.todos.map(todo => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      });
      return {
        ...state,
        todos: newTodos
      };
    default:
      return state;
  }
}

export default reducer;
