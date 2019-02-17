import React from "react";

const TodoForm = props => {
  return (
    <form className="form">
      <input
        value={props.todoText}
        type="text"
        onChange={props.handleChange}
        placeholder="something I need to do later"
        name="
        todoText"
      />
      <button onClick={props.handleSubmit}>Add Todo</button>
    </form>
  );
};

export default TodoForm;
