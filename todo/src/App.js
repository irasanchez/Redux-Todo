import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { connect } from "react-redux";
import { addTodo } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div className="App">
        <TodoForm onChange={this.handleChange} onSubmit={this.handleSubmit} />
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
