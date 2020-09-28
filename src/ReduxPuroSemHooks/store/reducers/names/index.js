import { ADD_NAME, UPDATE_NAME, DELETE_NAME } from "../../actions/types";

const initialState = ["casa", "cachorro", "gato"];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_NAME: {
      return [...state, action.payload.name];
    }
    case UPDATE_NAME: {
      let names = state;
      names[action.payload.id] = action.payload.name;
      return names;
    }
    case DELETE_NAME: {
      const names = state.filter((item, index) => index !== action.payload.id);
      return names;
    }
    default:
      return state;
  }
}
