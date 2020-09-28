import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  updateInput: ["text", "type"],
});

console.log(Types);
console.log(Creators);

const initialState = {
  name: "pc",
  age: 777,
};

const updateInput = (state = initialState, action) => {
  console.log(action);
  if (action.type === "name") {
    return { ...state, name: action.text };
  }
  return { ...state, age: action.text };
};

export default createReducer(initialState, {
  [Types.UPDATE_INPUT]: updateInput,
});