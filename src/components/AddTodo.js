import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = (e) => {
    e.preventDefault();
    const input = this.state.input.trim();
    if (input) {
      this.props.addTodo(input);
      this.setState({ input: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleAddTodo}>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <input type="submit" className="add-todo" value="Add Todo" />
      </form>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
// export default AddTodo;
