/*eslint-disable no-unused-expressions*/

import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";

const style = { textDecoration: "line-through" };

const TodoList = props => {
  return (
    <ul className="todolist">
      {props.todos.map(todo => {
        return (
          <li
            key={todo.id}
            style={todo.completed ? style : null}
            onClick={() => props.toggleTodo(todo.id)}
          >
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
