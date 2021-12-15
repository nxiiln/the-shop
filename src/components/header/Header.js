import React from 'react';
import Top from '../Top/Top';
import Search from '../Search/Search';
import styles from './header.module.scss';


const Header = () => {
  return(
    <header>
      <Top />
      <h1 className={styles.theShop}>THE SHOP</h1>
      <Search />
    </header>
  );
}


export default Header;
