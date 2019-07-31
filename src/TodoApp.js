import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import { VISIBILITY_FILTERS } from "./constants";
import "./styles.css";

export default function TodoApp({ match: { params } }) {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList filter={params.filter || VISIBILITY_FILTERS.ALL} />
      <VisibilityFilters filter={params.filter || VISIBILITY_FILTERS.ALL} />
    </div>
  );
}
