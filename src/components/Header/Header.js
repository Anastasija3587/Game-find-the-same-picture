import React from 'react';
import { useDispatch } from 'react-redux';
import reloadIcon from '../../materials/reload.svg';
import tiles from '../../data/tiles.json';
import { reload } from '../../redux/game/actions';
import styles from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className={styles.head}>
      <p className={styles.title}>Lets play!</p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch(reload(tiles))}
      >
        <img src={reloadIcon} alt="iconReload" width="50" height="50" />
      </button>
    </header>
  );
};

export default Header;
