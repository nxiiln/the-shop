import React from 'react';
import Top from './Top';
import Search from './Search';
import Cart from './Cart';
import Menu from './Menu';
import styled from 'styled-components';


const TheShop = styled.h1`
  font-family: Playfair Display SC;
  font-size: 36px;
  line-height: 1.2;
  font-weight: 400;
  text-align: center;
  color: #000;
`;


const Header = (): JSX.Element => {
  return(
    <header>
      <Top />
      <TheShop>THE SHOP</TheShop>
      <Search />
      <Cart />
      <Menu />
    </header>
  );
}


export default Header;