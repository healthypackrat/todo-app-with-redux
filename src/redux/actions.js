import uuid from "uuid/v4";
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actionTypes";

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: uuid(),
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: { id }
});
