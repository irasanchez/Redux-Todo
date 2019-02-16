//ADD_TODO takes text from input field from TodoForm and returns action object
export const ADD_TODO = "ADD_TODO";

export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text, // ES6 syntax. same as text: text, shows the text input from TodoForm
    completed: false
  };
};
