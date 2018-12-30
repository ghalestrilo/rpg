import { database as API } from "../../util";
import {
  REQUEST_ERROR,
  REQUEST_GET_ADVENTURES,
  RECEIVE_GET_ADVENTURES,
  DELETE_ADVENTURE,
  RECEIVE_GET_PLAYERS,
  REQUEST_GET_PLAYERS,
  SET_SESSION,
  BEGIN_SESSION,
  SET_CHOSEN
} from "../types";

// export const needsLoading = dispatch => type => actionCreator => args => {
//   dispatch({ type });
//   dispatch(actionCreator(args));
// };

export const requestError = error => ({
  type: REQUEST_ERROR,
  payload: error
});

export const beginSession = adventureData => ({
  type: BEGIN_SESSION,
  payload: adventureData
});

export const saveAdventure = newAdventure => dispatch =>
  API.ref(`/adventures/${newAdventure.id}`)
    .set({ ...newAdventure, id: Date.now() })
    .then(() => dispatch(getAdventures()))
    .catch(error => dispatch(requestError(error)));

export const getAdventures = () => dispatch => {
  dispatch({ type: REQUEST_GET_ADVENTURES });
  return API.ref("/adventures")
    .on("value", snapshot => {
      dispatch({
        type: RECEIVE_GET_ADVENTURES,
        payload: snapshot.val()
      });
    });
};

export const setChosenAdventure = adventure => dispatch => {
  dispatch({ type: REQUEST_GET_ADVENTURES });
  return API.ref(`/adventures/${adventure.id}`)
    .on("value", snapshot =>
      dispatch({
        type: SET_CHOSEN,
        payload: snapshot.val()
      }));
};

export const deleteAdventure = adventure => dispatch =>
  API.ref(`/adventures/${adventure.id}`)
    .remove()
    .then(() => dispatch({ type: DELETE_ADVENTURE }));

export const updateAdventure = adventure => dispatch =>
  API.ref(`/adventures/${adventure.id}`)
    .set(adventure)
    .then(() => dispatch(getAdventures()))
    .catch(error => dispatch(requestError(error)));

export const setNextSession = (id, nextSession) => dispatch =>
  API.ref(`/adventures/${id}/nextSession`)
    .set(nextSession)
    .then(() => dispatch({ type: SET_SESSION, payload: nextSession }))
    .catch(error => dispatch(requestError(error)));

export const addPlayer = (adventureID, newPlayer) => dispatch =>
  API.ref(`/adventures/${adventureID}/heroes/${newPlayer.name}`)
    .set(newPlayer)
    .then(() => getPlayers(adventureID))
    .catch(error => dispatch(requestError(error)));

export const getPlayers = adventureID => dispatch => {
  dispatch({ type: REQUEST_GET_PLAYERS });
  return API.ref(`/adventures/${adventureID}/heroes`)
    .on("value", snapshot =>
      dispatch({
        type: RECEIVE_GET_PLAYERS,
        payload: snapshot.val()
      }));
};
