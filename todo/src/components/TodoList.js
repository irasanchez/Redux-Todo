import React from "react";
import { connect } from "react-redux";

const style = { textDecoration: "line-through" };

const TodoList = props => {
  return (
    <ul>
      {props.todos.map(todo => {
        <li key={todo.id} style={todo.completed ? style : null}>
          {todo.text}
        </li>;
      })}
    </ul>
  );
};

export default connect(
  null,
  {}
)(TodoList);
