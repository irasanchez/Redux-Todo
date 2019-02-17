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
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            id: Math.random(),
            text: action.payload,
            completed: false
          }
        ]
      };

    default:
      return state;
  }
}

export default reducer;
