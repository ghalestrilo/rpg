import { combineReducers } from "redux";
import adventures from "./adventures";
import combat from "./combat";
import session from "./session";
import settings from "./settings";
import user from "./user";


export default combineReducers({
  adventures,
  combat,
  session,
  settings,
  user
});
