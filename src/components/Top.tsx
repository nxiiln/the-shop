import {useState} from 'react';
import styled from 'styled-components/macro';
import {mediumScreen, useMediaQuery} from '../mediaQueries';
import {HashLink} from 'react-router-hash-link';
import CartPreview from './CartPreview';




const WrapperOuter = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--color-background-second);
`;

const WrapperInner = styled.div`
  width: 1100px;
  height: 36px;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div:nth-child(1) {
    height: 36px;
    display: flex;
  }

  > div:nth-child(2) {
    height: auto;
    display: flex;
    align-items: center;
  }
`;

const Title = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  font-family: var(--font-second);
  font-size: 10px;
  font-weight: 300;
  color: var(--color-text-second);

  @media ${mediumScreen} {
    justify-content: end;
    > span {margin-right: 10px}
  }
`;

const Dropdown = styled.div<{open: boolean, width: string, height: string}>`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${props => `
    width: ${props.width};
    height: ${props.height};
    ${props.open && 'background: #333;'}
  `}
`;

const LinkSimple = styled(HashLink)`
  width: 65px;
  margin: 11px 0 4px 0;
  font-family: var(--font-second);
  font-size: 10px;
  color: var(--color-text-regular);
  text-decoration: none;
  cursor: pointer;
  user-select: none;

  &:hover {color: var(--color-text-second)}
`;

const LinkMain = styled(LinkSimple)<{open: boolean}>`
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

const LinkUnderline = styled(LinkSimple)<{withoutBorder?: boolean}>`
  width: auto;
  margin: 0;
  padding: 0 12px 0 12px;
  
  &:hover {text-decoration: underline}

  ${props => !props.withoutBorder &&
    'border-right: 1px solid var(--color-text-regular);'
  }
`;

const Button = styled.button`
  width: 35px;
  margin: 11px 0 4px 0;
  padding: 0;
  display: flex;
  font-family: var(--font-second);
  font-size: 10px;
  color: var(--color-text-regular);
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {color: var(--color-text-second)}
`;

const ButtonMain = styled(Button)<{open: boolean}>`
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




const Top = (): JSX.Element => {
  const [contactOpen, setContactOpen] = useState<boolean>(false);
  const [currencyOpen, setCurrencyOpen] = useState<boolean>(false);
  const [isUsd, setIsUsd] = useState<boolean>(true);
  const screen = useMediaQuery();


  return(
    <WrapperOuter id='top'>
      <Title>
        {!screen.small && <span>FREE SHIPPING ON ORDERS ABOVE 50$</span>}
      </Title>


      <WrapperInner>
        <div>
          {screen.big &&
            <Dropdown
              width='85px'
              height='110px'
              open={contactOpen}
              onMouseEnter={(): void => setContactOpen(true)}
              onMouseLeave={(): void => setContactOpen(false)}
            >
              <LinkMain
                as='span'
                open={contactOpen}
              >
                CONTACT
              </LinkMain>

              {contactOpen &&
                <>
                  <LinkSimple to='#store-location' smooth>STORE LOCATION</LinkSimple>
                  <LinkSimple to='#about-us' smooth>ABOUT US</LinkSimple>
                </>
              }
            </Dropdown>
          }


          <Dropdown
            width='55px'
            height='65px'
            open={currencyOpen}
            onMouseEnter={(): void | false => !screen.touch && setCurrencyOpen(true)}
            onMouseLeave={(): void | false => !screen.touch && setCurrencyOpen(false)}
            onClick={(): void | false => screen.touch && setCurrencyOpen(!currencyOpen)}
            >
            <ButtonMain
              type='button'
              open={currencyOpen}
            >
              {isUsd ? 'USD' : 'EUR'}
            </ButtonMain>

            {currencyOpen &&
              <Button
                type='button'
                onClick={(): void => setIsUsd(!isUsd)}
              >
                {isUsd ? 'EUR' : 'USD'}
              </Button>
            }
          </Dropdown>
        </div>


        {screen.big &&
          <div>
            <LinkUnderline to='my-account'>MY ACCOUNT</LinkUnderline>
            <LinkUnderline to='wish-list'>WISH LIST</LinkUnderline>
            <LinkUnderline to='checkout'>CHECKOUT</LinkUnderline>
            <LinkUnderline to='login' withoutBorder>LOG IN</LinkUnderline>
          </div>
        }

        {screen.small && <CartPreview />}
      </WrapperInner>
    </WrapperOuter>
  );
}




export default Top;
