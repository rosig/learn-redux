import { combineReducers } from "redux";

import names from "./names";
import users from "./user";
import musicas from "./musicas";

export default combineReducers({ names, users, musicas });
