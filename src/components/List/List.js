import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './List.module.css';
import {
  changeSelected,
  closeSelected,
  done,
  selectedTile,
} from '../../redux/game/actions';

const List = ({ count, setCount }) => {
  const dispatch = useDispatch();

  const tilesByState = useSelector(state => state.game.tiles);
  const amountSelect = tilesByState.filter(
    t => t.selected === true && t.done === false,
  );
  const tileSelected = useSelector(state => state.game.selectedTile);

  const selected = (e, tile) => {
    if (amountSelect.length === 2 || e.target.id === String(tileSelected.id))
      return;
    setCount(count + 1);
    localStorage.setItem('count', count);
    dispatch(changeSelected(tile.id));
    if (tileSelected.color) {
      if (tileSelected.color === tile.color) {
        setTimeout(() => {
          dispatch(done());
          dispatch(selectedTile({}));
        }, 1500);
      } else {
        setTimeout(() => {
          dispatch(closeSelected());
          dispatch(selectedTile({}));
        }, 1500);
      }
    }
    dispatch(selectedTile(tile));
  };

  return (
    <ul className={styles.list}>
      {tilesByState &&
        tilesByState.map(tile => (
          <li key={tile.id} className={styles.item}>
            <button
              disabled={!!tile.done}
              className={tile.done ? styles.hidden : styles.btn}
              type="button"
              onClick={e => selected(e, tile)}
            >
              <div
                id={tile.id}
                className={styles.tile}
                style={
                  tile.selected
                    ? { backgroundColor: tile.color }
                    : { backgroundColor: 'rgb(188,143,143)' }
                }
              />
            </button>
          </li>
        ))}
    </ul>
  );
};

List.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};

export default List;
