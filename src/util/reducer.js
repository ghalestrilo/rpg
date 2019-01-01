import { warn, log } from "../util/console";

const bypass = x => x;

const reducer = (listeners, initialState) =>
  (state = initialState, action) =>
    log((listeners[action.type] || bypass)(state || initialState, action && action.payload));

export default reducer;
