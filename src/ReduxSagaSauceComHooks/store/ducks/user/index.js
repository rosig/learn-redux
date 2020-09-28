import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  toggleFlagName: [],
  toggleFlagAge: [],
  updateName: ["name"],
  updateAge: ["age"],
  flagSaga: [],
  updateInput: ["text", "type"],
});

console.log(Types);
console.log(Creators);

const initialState = {
  flagName: false,
  flagAge: false,
  name: "pc",
  age: 777,
};

const toggleFlagName = (state = initialState, action) => {
  return { ...state, flagName: !state.flagName };
};

const toggleFlagAge = (state = initialState, action) => {
  return { ...state, flagAge: !state.flagAge };
};

const updateName = (state = initialState, action) => {
  return { ...state, name: action.name };
};

const updateAge = (state = initialState, action) => {
  return { ...state, age: action.age };
};

const updateInput = (state = initialState, action) => {
  console.log(action);
  if (action.type === "name") {
    return { ...state, name: action.text };
  }
  return { ...state, age: action.text };
};

export default createReducer(initialState, {
  [Types.TOGGLE_FLAG_NAME]: toggleFlagName,
  [Types.TOGGLE_FLAG_AGE]: toggleFlagAge,
  [Types.UPDATE_NAME]: updateName,
  [Types.UPDATE_AGE]: updateAge,
  [Types.FLAG_SAGA]: null,
  [Types.UPDATE_INPUT]: updateInput,
});
