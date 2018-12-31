import initialState from "./state.js";
import {
  NEW_EVENT,
  FINISH_COMBAT,
  BEGIN_COMBAT

} from "../../actions/types";

import {
  applyAction,
  nextplayer,
  shuffle
} from "../../util/rules";
import modifyAt from "../../util/modifyAt";
import reducer from "../../util/reducer";

const combat = {
  [BEGIN_COMBAT]: (state, payload) => buildCombatFromEvent(payload),

  [NEW_EVENT]: (state, payload) => ({
    ...state,
    events: [ payload, ...state.events ],
    actors: modifyAt(payload.target, state.actors)(applyAction(payload.action)),
    player: nextplayer(state.player, state.actors)
  }),

  [FINISH_COMBAT]: (state, payload) => ({
    ...state,
    ongoing: false,
    result: payload
  })
};

const buildCombatFromEvent = event => ({
  actors: shuffle([
    ...event.enemies.map(enemy => ({ ...enemy, hero: false })),
    ...event.heroes
      .map(hero => ({ ...hero, hero: true }))
      .filter(hero => hero.picked)
  ]).map(actor => ({
    ...actor,
    status: {
      hp: actor.maxhp,
      fled: false,
      dead: false,
      effects: []
    }
  })),
  events: [],
  ongoing: true,
  player: 0,
  result: null
});

export default reducer(combat, initialState);
