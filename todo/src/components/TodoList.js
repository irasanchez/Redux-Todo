/*eslint-disable no-unused-expressions*/

import React from "react";
import { connect } from "react-redux";

const style = { textDecoration: "line-through" };

const TodoList = props => {
  return (
    <ul className="todolist">
      {props.todos.map(todo => {
        return (
          <li key={todo.id} style={todo.completed ? style : null}>
            {todo.text}
          </li>
        );
      })}
    </ul>
  );
};

export default connect(
  null,
  {}
)(TodoList);
