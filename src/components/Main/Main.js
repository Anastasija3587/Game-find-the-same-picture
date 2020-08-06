import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Main.module.css';
import { changeSelected, closeSelected, done } from '../../redux/game/actions';

const Main = () => {
  const dispatch = useDispatch();

  const [selectedTile, setSelectedTile] = useState({});
  const [count, setCount] = useState(0);

  const tilesByState = useSelector(state => state.game.tiles);
  const amountDone = tilesByState.filter(t => t.done === true);
  const amountSelect = tilesByState.filter(
    t => t.selected === true && t.done === false,
  );

  const selected = (e, tile) => {
    if (amountSelect.length === 2 || e.target.id === String(selectedTile.id))
      return;
    setCount(count + 1);
    dispatch(changeSelected(tile.id));
    if (selectedTile.color) {
      if (selectedTile.color === tile.color) {
        setTimeout(() => {
          dispatch(done());
          setSelectedTile({});
        }, 1500);
      } else {
        setTimeout(() => {
          dispatch(closeSelected());
          setSelectedTile({});
        }, 1500);
      }
    }
    setSelectedTile(tile);
  };

  return (
    <>
      {amountDone.length !== tilesByState.length ? (
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
      ) : (
        <h2 className={styles.title}> You won in {count / 2} rounds. </h2>
      )}
    </>
  );
};

export default Main;
