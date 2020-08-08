import types from './types';

export const changeSelected = id => ({
  type: types.CHANGE_SELECTED,
  payload: {
    id,
  },
});

export const closeSelected = () => ({
  type: types.CLOSE_SELECTED,
});

export const done = () => ({
  type: types.DONE,
});

export const reload = tiles => ({
  type: types.RELOAD_TILES,
  payload: {
    tiles,
  },
});

export const selectedTile = tile => ({
  type: types.SELECTED_TILE,
  payload: {
    tile,
  },
});
