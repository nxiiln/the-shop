import React from 'react';
import Top from './Top';
import CartPreview from './CartPreview';
import Menu from './Menu';
import styled from 'styled-components/macro';


const TheShop = styled.h1`
  font-family: var(--font-main);
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
      <CartPreview />
      <Menu />
    </header>
  );
}


export default Header;
