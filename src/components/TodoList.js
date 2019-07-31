import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selectors";

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

const mapStateToProps = (state, ownProps) => {
  const todos = getTodosByVisibilityFilter(state, ownProps.filter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
