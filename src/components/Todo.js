import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo, deleteTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo, deleteTodo }) => (
  <li className="todo-item">
    <span
      onClick={() => toggleTodo(todo.id)}
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo && todo.completed ? "👌" : "👋"}
      {" "}
      {todo.content}
    </span>
    {" "}
    <span
      onClick={() => deleteTodo(todo.id)}
      className="todo-item__delete"
    >
      [x]
    </span>
  </li>
);

// export default Todo;
export default connect(
  null,
  { toggleTodo, deleteTodo }
)(Todo);
