import React from 'react';
import Top from '../Top/Top';
import Search from '../Search/Search';
import Cart from '../Cart/Cart';
import Menu from '../Menu/Menu';
import Banner from '../Banner/Banner';
import styles from './header.module.scss';


const Header = () => {
  return(
    <header>
      <Top />
      <h1 className={styles.theShop}>THE SHOP</h1>
      <Search />
      <Cart />
      <Menu />
    </header>
  );
}


export default Header;
