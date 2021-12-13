import React from 'react';
import Top from '../Top/Top';
import styles from './header.module.scss';


const Header = () => {
  return(
    <header>
      <Top />
      <h1 className={styles.theShop}>THE SHOP</h1>
    </header>
  );
}


export default Header;
