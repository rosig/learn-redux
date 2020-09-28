import { ADD_NAME, UPDATE_NAME, DELETE_NAME } from "./types";

export const addName = (name) => ({
  type: ADD_NAME,
  payload: {
    name: name,
  },
});

export const updateName = (name, id) => ({
  type: UPDATE_NAME,
  payload: {
    id: id,
    name: name,
  },
});

export const deleteName = (id) => ({
  type: DELETE_NAME,
  payload: {
    id: id,
  },
});
