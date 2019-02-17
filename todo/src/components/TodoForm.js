import React from "react";

const TodoForm = props => {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <input
        value={props.text}
        type="text"
        onChange={props.handleChange}
        placeholder="something I need to do later"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
