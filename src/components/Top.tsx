import React, {useState} from 'react';
import Currency from './Currency';
import styled from 'styled-components/macro';


const Nav = styled.nav`
  width: 100vw;
  height: 36px;
  display: flex;
  justify-content: space-evenly;
  background-color: var(--color-background-second);
`;

const GroupLeft = styled.div`
  width: 223px;
  display: flex;
  justify-content: space-between;
`;

const Dropdown = styled.div<{open: boolean}>`
  width: 85px;
  height: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${props => props.open && `
    height: 130px;
    background: var(--color-top-dropdown);
  `}
`;

const Link = styled.a`
  width: 65px;
  height: 12px;
  margin-top: 12px;
  font-family: var(--font-second);
  font-size: 10px;
  color: var(--color-text-regular);
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  &:hover {color: var(--color-text-second)}
`;

const LinkMain = styled(Link)<{open: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::after {
    content: '◢';
    display: inline-block;
    font-size: 8px;
    color: var(--color-text-regular);
    transform: rotate(${props => props.open ? '' : '-'}45deg);
  }
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
  const list: string[] = ['ABOUT US', 'CONTACT', 'STORE LOCATION'];
  const [open, setOpen] = useState<boolean>(false);


  return(
    <Nav>
      <GroupLeft>
        <Dropdown
          open={open}
          onMouseLeave={(): void => setOpen(false)}
        >
          <LinkMain
            href='#'
            open={open}
            onMouseEnter={(): void => setOpen(true)}
          >
            COMPANY
          </LinkMain>

          {open && list.map((item: string): JSX.Element => {
            return(
              <Link
                href='#'
                key={item}
              >
                {item}
              </Link>
            );
          })}
        </Dropdown>

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
