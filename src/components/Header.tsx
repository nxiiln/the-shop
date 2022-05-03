import React from 'react';
import Top from './Top';
import CartPreview from './CartPreview';
import Menu from './Menu';
import styled from 'styled-components/macro';


const Wrapper = styled.header`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CentralGroup = styled.div`
  width: 1100px;
  min-width: 960px;
  height: 90px;
  position: relative;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const Title = styled.h1`
  width: 100%;
  height: 55px;
  position: absolute;
  display: flex;
  justify-content: center;
  font-family: var(--font-main);
  font-size: 36px;
  font-weight: 400;
  color: var(--color-text-main);
`;

const CartPreviewWrapper = styled.div`
  position: relative;
`;


const Header = (): JSX.Element => {
  return(
    <Wrapper>
      <Top />
      <CentralGroup>
        <Title>THE SHOP</Title>
        <CartPreviewWrapper>
          <CartPreview />
        </CartPreviewWrapper>
      </CentralGroup>
      <Menu />
    </Wrapper>
  );
}


export default Header;
