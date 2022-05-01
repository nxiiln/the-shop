import React from 'react';
import Company from './Company';
import Currency from './Currency';
import styled from 'styled-components/macro';


const Nav = styled.nav`
  width: 100vw;
  height: 36px;
  display: flex;
  justify-content: space-evenly;
  background-color: #000;
`;

const GroupLeft = styled.div`
  width: 223px;
  display: flex;
  justify-content: space-between;
`;

const GroupCenter = styled.div`
  padding-top: 12px;
  padding-left: 5vw;
  font-family: var(--font-second);
  font-size: 10px;
  text-transform: uppercase;
  color: #fff;
`;

const GroupRight = styled.div`
  width: 295px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Line = styled.div`
  width: 1px;
  height: 8px;
  background-color: #4f4f4f;
`;

const Button = styled.button`
  height: 12px;
  display: block;
  padding: 0;
  font-family: var(--font-second);
  font-size: 10px;
  text-transform: uppercase;
  text-align: start;
  line-height: 0;
  color: #aaa;
  background-color: #000;
  border: none;
  &:hover {
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const MyAccount = styled(Button)`
  width: 72px;
`;

const WishList = styled(Button)`
  width: 54px;
`;

const Checkout = styled(Button)`
  width: 58px;
`;

const LogIn = styled(Button)`
  width: 38px;
`;


const Top = (): JSX.Element => {
  return(
    <Nav>
      <GroupLeft>
        <Company />
        <Currency />
      </GroupLeft>

      <GroupCenter>
        free shipping on orders above 50$
      </GroupCenter>

      <GroupRight>
        <MyAccount type='button'>my account</MyAccount>
        <Line />
        <WishList type='button'>wish list</WishList>
        <Line />
        <Checkout type='button'>checkout</Checkout>
        <Line />
        <LogIn type='button'>log in</LogIn>
      </GroupRight>
    </Nav>
  );
}


export default Top;
