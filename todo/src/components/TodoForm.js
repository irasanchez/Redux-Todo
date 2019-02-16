import React from "react";
import { addTodo } from "./../actions/";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value.trim() });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state);
  };

  render() {
    return (
      <form className="TodoForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="new task" value={this.state.value} />
        <button type="submit">Add Task</button>
      </form>
    );
  }
}

export default TodoForm;
