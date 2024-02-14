import { ADD_TODO, DELETE_TODO, EDIT_TODO, FINISH_TODO } from "./actionTypes";

export const addTodo = (todo: any) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (index: any) => ({
  type: DELETE_TODO,
  payload: index,
});

export const editTodo = (index: any, value: any) => ({
  type: EDIT_TODO,
  payload: { index, value },
});

export const finishTodo = (index: any) => ({
  type: FINISH_TODO,
  payload: index,
});
