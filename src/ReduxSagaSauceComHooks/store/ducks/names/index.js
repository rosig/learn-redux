import { createActions, createReducer } from "reduxsauce";

// Criando action types e creators

export const { Types, Creators } = createActions({
  addName: ["name"],
  updateName: ["name", "id"],
  removeName: ["id"],
  addNameSaga: ["name"],
});

// console.log(Types);
// console.log(Creators);

// Criando os reducer handlers

const initialState = ["casa", "cachorro", "gato", "passaro"];

const add = (state = initialState, action) => [...state, action.name];

const update = (state = initialState, action) => {
  let names = state;
  names[action.id] = action.name;
  return names;
};

const remove = (state = initialState, action) => {
  const names = state.filter((item, index) => index !== action.id);
  return names;
};

//Mapeamento de quais types chamam quais métodos

export default createReducer(initialState, {
  [Types.ADD_NAME]: add,
  [Types.UPDATE_NAME]: update,
  [Types.REMOVE_NAME]: remove,
});

// importar actions lá no app
