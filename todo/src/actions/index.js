//ADD_TODO takes text from input field from TodoForm and returns action object
export const ADD_TODO = "ADD_TODO";

export const addTodo = text => {
  return {
    type: ADD_TODO,
    payload: text
  };
};
