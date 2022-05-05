import React, {useState} from 'react';
import styled from 'styled-components/macro';




const WrapperOuter = styled.article`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: var(--color-background-second);
`;

const WrapperInner = styled.div`
  width: 1100px;
  min-width: 960px;
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
  width: 100vw;
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

const Link = styled.a`
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

const LinkUnderline = styled(Link)<{withoutBorder?: boolean}>`
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
  color: #aaa;
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


  return(
    <WrapperOuter>
      <Title>FREE SHIPPING ON ORDERS ABOVE 50$</Title>
      <WrapperInner>
        <div>
          <Dropdown
            width='85px'
            height='110px'
            open={contactOpen}
            onMouseLeave={(): void => setContactOpen(false)}
          >
            <LinkMain
              href='#footer'
              open={contactOpen}
              onMouseEnter={(): void => setContactOpen(true)}
            >
              CONTACT
            </LinkMain>

            {contactOpen &&
              <>
                <Link href='#store-location'>STORE LOCATION</Link>
                <Link href='#about-us'>ABOUT US</Link>
              </>
            }
          </Dropdown>


          <Dropdown
            width='55px'
            height='65px'
            open={currencyOpen}
            onClick={(): void => setCurrencyOpen(false)}
            onMouseLeave={(): void => setCurrencyOpen(false)}
          >
            <ButtonMain
              type='button'
              open={currencyOpen}
              onMouseEnter={(): void => setCurrencyOpen(true)}
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


        <div>
          <LinkUnderline href='#'>MY ACCOUNT</LinkUnderline>
          <LinkUnderline href='#'>WISH LIST</LinkUnderline>
          <LinkUnderline href='#'>CHECKOUT</LinkUnderline>
          <LinkUnderline href='#' withoutBorder>LOG IN</LinkUnderline>
        </div>
      </WrapperInner>
    </WrapperOuter>
  );
}




export default Top;
