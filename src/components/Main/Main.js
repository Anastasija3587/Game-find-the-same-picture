import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Main.module.css';
import { selectedTile, reload } from '../../redux/game/actions';
import List from '../List/index';
import reloadIcon from '../../materials/reload.svg';
import tiles from '../../data/tiles.json';

const Main = () => {
  const dispatch = useDispatch();

  const initialCount = Number(localStorage.getItem('count')) + 1 || 1;
  const [count, setCount] = useState(initialCount);

  const tilesByState = useSelector(state => state.game.tiles);
  const amountDone = tilesByState.filter(t => t.done === true);
  const countLocal = localStorage.getItem('count');

  const onReload = () => {
    dispatch(reload(tiles));
    dispatch(selectedTile({}));
    setCount(1);
  };

  return (
    <>
      <button className={styles.btnReload} type="button" onClick={onReload}>
        <img src={reloadIcon} alt="iconReload" width="50" height="50" />
      </button>
      {amountDone.length !== tilesByState.length ? (
        <List count={count} setCount={setCount} />
      ) : (
        <h2 className={styles.title}> You won in {countLocal / 2} rounds. </h2>
      )}
    </>
  );
};

export default Main;
