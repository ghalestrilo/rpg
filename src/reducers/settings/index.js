import reducer from "../../util/reducer";
import {
  SELECT_SETTING,
  UPDATE_SETTING,
  RECEIVE_GET_SETTINGS,
  REQUEST_GET_SETTINGS
} from "../../actions/types";

const initialState = {
  list: [],
  edit: false,
  loading: false
};

const settings = {
  [REQUEST_GET_SETTINGS]: state => ({ ...state, loading: true }),
  [RECEIVE_GET_SETTINGS]: (state, payload) => ({
    ...state,
    loading: false,
    list: payload
  }),

  [SELECT_SETTING]: state => state,
  [UPDATE_SETTING]: state => state
};

export default reducer(settings, initialState);
