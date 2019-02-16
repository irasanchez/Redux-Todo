const initialState = {
  todos: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      };

    default:
      return state;
  }
}
export default reducer;
