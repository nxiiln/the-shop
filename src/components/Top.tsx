import React, {useState} from 'react';
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
  justify-content: start;
`;

const Dropdown = styled.div<{open: boolean, width: string, height: string}>`
  ${props =>`
    width: ${props.width};
    height: ${props.height};
    display: flex;
    flex-direction: column;
    align-items: center;

    ${props.open && `
      height: ${props.height};
      background: var(--color-top-dropdown);
    `}
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

const ButtonCurrency = styled.button`
  width: 35px;
  margin-top: 12px;
  padding: 0;
  display: flex;
  font-family: var(--font-second);
  font-size: 10px;
  color: #aaa;
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover {color: var(--color-text-second)}
`;

const ButtonCurrencyMain = styled(ButtonCurrency)<{open: boolean}>`
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
  const [companyOpen, setCompanyOpen] = useState<boolean>(false);

  const [currencyOpen, setCurrencyOpen] = useState<boolean>(false);
  const [isUsd, setIsUsd] = useState<boolean>(true);


  return(
    <Nav>
      <GroupLeft>
        <Dropdown
          width='85px'
          height='130px'
          open={companyOpen}
          onMouseLeave={(): void => setCompanyOpen(false)}
        >
          <LinkMain
            href='#'
            open={companyOpen}
            onMouseEnter={(): void => setCompanyOpen(true)}
          >
            COMPANY
          </LinkMain>

          {companyOpen && list.map((item: string): JSX.Element => {
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


        <Dropdown
          width='55px'
          height='65px'
          open={currencyOpen}
          onClick={(): void => setCurrencyOpen(false)}
          onMouseLeave={(): void => setCurrencyOpen(false)}
        >
          <ButtonCurrencyMain
            type='button'
            open={currencyOpen}
            onMouseEnter={(): void => setCurrencyOpen(true)}
          >
            {isUsd ? 'USD' : 'EUR'}
          </ButtonCurrencyMain>

          {currencyOpen &&
            <ButtonCurrency
              type='button'
              onClick={(): void => setIsUsd(!isUsd)}
            >
              {isUsd ? 'EUR' : 'USD'}
            </ButtonCurrency>
          }
        </Dropdown>
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
