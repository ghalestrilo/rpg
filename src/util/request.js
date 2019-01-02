import { REQUEST_ERROR } from "../actions/types";

const request = (requestType, receiveType) => promise => dispatch => {
  dispatch({ type: requestType });
  dispatch(promise)
    .then(data => dispatch({ type: receiveType, payload: data }))
    .catch(err => dispatch({
      type: REQUEST_ERROR,
      payload: err
    }));
};

export default request;
