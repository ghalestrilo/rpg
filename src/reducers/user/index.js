import reducer from "../../util/reducer";
import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  RECEIVE_LOGIN_ERROR,
  REQUEST_ADD_USER,
  RECEIVE_ADD_USER,
  SIGNUP_FAILURE,
  LOGOUT
} from "../../actions/types";

export const initialUser = {
  email: null,
  senha: null,
  nome: null,
  datanasc: null,
  sexo: null,
  loading: false
};

const user = {
  [REQUEST_LOGIN]: state => ({ ...state, loading: true }),
  [RECEIVE_LOGIN]: (state, payload) => (payload ? payload : { ...payload, loading: false }),
  [RECEIVE_LOGIN_ERROR]: (state, payload) => (payload ? payload : { ...payload, loading: false }),
  [REQUEST_ADD_USER]: (state, payload) => (payload ? payload : state),

  [RECEIVE_ADD_USER]: (state, payload) => (payload ? payload : state),

  // case "REQUEST_ERROR":
  //   throw new Error(payload),

  [SIGNUP_FAILURE]: state => (state),
  [LOGOUT]: (state, payload) => (initialUser)
};

export default reducer(user, initialUser);
