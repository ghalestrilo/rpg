import { combineReducers } from "redux";
import userReducer from "./user";
import adventureReducer from "./adventures";

import combatReducer from "./combat";
import sessionReducer from "./session";


export default combineReducers({
  user: userReducer,
  adventures: adventureReducer,
  combat: combatReducer,
  session: sessionReducer
});
