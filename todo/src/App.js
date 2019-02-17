import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { connect } from "react-redux";
import { addTodo } from "./actions";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ""
    };
  }

  handleChange = event => {
    this.setState({ todoText: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let todoObject = {
      text: this.state.todoText,
      completed: false,
      id: Math.random()
    };
    this.props.addTodo(todoObject);
    this.setState({ todoText: "" });
  };

  render() {
    return (
      <div className="App">
        <TodoForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          todoText={this.state.todoText}
        />
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mstp = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mstp,
  { addTodo }
)(App);
