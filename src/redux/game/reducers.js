import { combineReducers } from 'redux';
import types from './types';
import dataTiles from '../../data/tiles.json';

const initialState = dataTiles.sort(() => Math.random() - 0.5);

const tiles = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.RELOAD_TILES:
      return payload.tiles.sort(() => Math.random() - 0.5);
    case types.CHANGE_SELECTED:
      return state.map(el =>
        el.id === payload.id ? { ...el, selected: true } : el,
      );
    case types.CLOSE_SELECTED:
      return state.map(t =>
        t.selected === true ? { ...t, selected: false } : t,
      );
    case types.DONE:
      return state.map(t => (t.selected === true ? { ...t, done: true } : t));
    default:
      return state;
  }
};

export default combineReducers({
  tiles,
});
