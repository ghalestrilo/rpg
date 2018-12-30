const reducer = (listeners, initialState) =>
  (state = initialState, action) =>
    (listener => (listener ? listener(state, action.payload) : state)(listeners[action.type]));

export default reducer;
