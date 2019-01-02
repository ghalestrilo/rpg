import reducer from "../../util/reducer";
import { avatars } from "../../images";
import { actionTypes } from "../../util/rules";

const initialState = {
  configuringCombat: false,
  pickingEnemy: false,

  event: null,
  newevent: false,

  enemies: [],
  history: []
};

import {
  FINISH_COMBAT,
  CONFIGURE_COMBAT,
  TOGGLE_HERO,
  ADD_ENEMY,
  PICK_ENEMY,
  REMOVE_ENEMY,
  BEGIN_COMBAT,
  CLEAR_NEWS,
  BEGIN_SESSION
} from "../../actions/types";


const prepActor = actor => ({
  ...actor,
  actions: Object.entries(actor.actions)
    .map(([ name, action ]) => ({
      ...action,
      avatar: avatars.actions[action.avatar],
      name: name,
      type: actionTypes[action.type] || action.type,
      target: (action.type === actionTypes.flee ? "self" : "pick")
    }))
});

const session = {
  [CONFIGURE_COMBAT]: (state, payload) => ({
    ...state,
    configuringCombat: true,
    event: {
      type: "combat",
      heroes: payload.heroes.map(hero => ({ ...hero, picked: true })),
      enemies: []
    }
  }),

  [ADD_ENEMY]: state => ({
    ...state,
    pickingEnemy: true
  }),

  [PICK_ENEMY]: (state, payload) => ({
    ...state,
    pickingEnemy: false,
    event: {
      ...state.event,
      enemies: [
        state.setting.enemies[payload],
        ...(state.event.enemies || [])
      ]
    }
  }),

  [REMOVE_ENEMY]: (state, payload) => ({
    ...state,
    event: {
      ...state.event,
      enemies: state.event.enemies.filter(
        (e, i) => i !== payload)
    }
  }),

  [TOGGLE_HERO]: (state, payload) => ({
    ...state,
    event: {
      ...state.event,
      heroes: state.event.heroes.map((character, i) =>
        (i === payload)
          ? { ...character, picked: !character.picked }
          : character)
    }
  }),

  [BEGIN_COMBAT]: state => ({
    ...state,
    configuringCombat: false,
    pickingEnemy: false
  }),

  [BEGIN_SESSION]: (state, payload) => ({
    ...state,

    setting: {
      ...payload.setting,
      enemies: Object.values(payload.setting.enemies || {})
        .map(x => prepActor(x))
    },

    // enemies: Object.values(payload.enemies || {})
    //   .map(x => prepActor(x))
    //   .map(enemy => ({
    //     ...enemy,
    //     avatar: avatars.enemies[enemy.avatar],
    //     picked: true
    //   })),

    heroes: Object.values(payload.heroes || {})
      .map(x => prepActor(x))
      .map(hero => ({
        ...hero,
        avatar: avatars.heroes[hero.avatar]
      }))
  }),

  [FINISH_COMBAT]: (state, payload) => ({
    ...state,
    newevent: true,
    history: [
      ...state.history,
      {
        ...state.event,
        result: payload
      }
    ]
  }),

  [CLEAR_NEWS]: state => ({
    ...state,
    newevent: false
  })
};

export default reducer(session, initialState);
