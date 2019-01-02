const bypass = x => x;

const reducer = (listeners, initialState) =>
  (state = initialState, action) =>
    (listeners[action.type] || bypass)(state || initialState, action && action.payload);

export default reducer;
