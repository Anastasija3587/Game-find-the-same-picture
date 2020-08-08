import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.head}>
      <p className={styles.title}>Lets play!</p>
    </header>
  );
};

export default Header;
