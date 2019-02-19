import { ADD_TODO } from "./../actions";

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

    default:
      return state;
  }
}

export default reducer;
