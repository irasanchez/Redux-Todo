import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <ul>
      {todos.map(todo => {
        <Todo key={todo.id} {...todo} />;
      })}
    </ul>
  );
};

export default TodoList;
