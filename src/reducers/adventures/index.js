import {
  CHOOSE_ADVENTURE,
  DELETE_ADVENTURE,
  SAVE_ADVENTURE,
  SET_SESSION,
  REQUEST_GET_ADVENTURES,
  RECEIVE_GET_ADVENTURES,
  RECEIVE_GET_PLAYERS,
  REQUEST_GET_PLAYERS
} from "../../actions/types";
import modifyAt from "../../util/modifyAt";
import reducer from "../../util/reducer";

export const initialAdventures = {
  chosen: {},
  list: [],
  edit: "",
  heroes: {},

  editing: false,
  index: 0
};

const adventures = {
  [REQUEST_GET_ADVENTURES]: state => ({ ...state, loading: true }),
  [RECEIVE_GET_ADVENTURES]: (state, payload) => ({
    ...state,
    list: payload,
    loading: false
  }),

  [REQUEST_GET_PLAYERS]: state => ({ ...state, loading: true }),
  [RECEIVE_GET_PLAYERS]: (state, payload) => ({
    ...state,
    heroes: payload,
    loading: false
  }),

  [DELETE_ADVENTURE]: state => state,

  [CHOOSE_ADVENTURE]: (state, payload) => ({
    ...state,
    chosen: payload
  }),

  [SET_SESSION]: (state, payload) => ({
    ...state,
    chosen: {
      ...state.chosen,
      nextSession: payload
    }
  }),

  [SAVE_ADVENTURE]: (state, payload) => ({
    ...state,
    list: state.editing
      ? modifyAt(payload.index, state.list)(() => payload.adventure)
      : [ ...state.list, payload.adventure ]
  })
};

export default reducer(adventures, initialAdventures);
