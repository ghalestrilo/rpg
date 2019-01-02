import { database as API } from "../../util";
import request from "../../util/request";
import arrayFromIndexedObject from "../../util/arrayFromIndexedObject";

import {
  SET_SETTINGS,
  REQUEST_GET_SETTINGS,
  RECEIVE_GET_SETTINGS
} from "../types";

export const setSettings = list => ({
  type: SET_SETTINGS,
  payload: list
});

export const getSettings = () =>
  request(REQUEST_GET_SETTINGS, RECEIVE_GET_SETTINGS)(() =>
    API.ref("/settings")
      .once("value")
      .then(snapshot => arrayFromIndexedObject(snapshot.val())));
