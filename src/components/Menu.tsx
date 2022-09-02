import {useState, useEffect} from 'react';
import styled from 'styled-components/macro';
import {smallScreen, mediumScreen, useMediaQuery} from '../mediaQueries';
import {HashLink} from 'react-router-hash-link';
import imageMenuInner from '../images/imageMenuInner.png';
import {useAppSelector} from '../redux-hooks';
import {TAccount} from '../types/TAccount';




const MenuWrapper = styled.article<{number: boolean}>`
  width: 100%;
  height: 38px;
  position: relative;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  background-color: var(--color-background-main);
  cursor: default;

  ${props => props.number && 'z-index: 2;'}
  @media ${smallScreen}, ${mediumScreen} {justify-content: start}
`;

const MenuSymbol = styled(HashLink)<{open: boolean}>`
  height: 21px;
  margin-left: 22px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 3;

  > div {
    width: 20px;
    height: 3px;
    position: relative;
    background: ${props => props.open ?
      'var(--color-background-main)' :
      'var(--color-background-second)'
    };
    opacity: 1;
    border-radius: 2px;
    transition: all 0.2s ease-out;
  }

  > div:nth-child(4) {opacity: 0}
  
  ${props => props.open && `
    > div:nth-child(1) {
      transform: rotate(45deg);
    }
    
    > div:nth-child(2) {
      top: -6px;
      left: 12px;
      transform: rotate(-45deg);
    }
    
    > div:nth-child(3) {
      transform: rotate(-45deg);
    }

    > div:nth-child(4) {
      opacity: 1;
      top: -6px;
      left: 12px;
      transform: rotate(45deg);
    }
  `}
`;

const DropdownMenu = styled.div<{open: boolean}>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: calc(-100vh - 126px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color-background-second);
  opacity: 0.9;
  z-index: 2;
  transition: top 0.2s ease-out;

  ${props => props.open && 'top: -126px;'}

  > a {
    visibility: ${props => props.open ? 'visibility' : 'hidden'};
    margin-bottom: 30px;
    font-family: var(--font-second);
    font-size: 24px;
    font-weight: 300;
    color: var(--color-text-second);
    text-decoration: none;
  }
`;

const MainMenu = styled.div<{number: number}>`
  width: 1100px;
  height: 38px;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;

  > span, a {
    padding: 0 20px 34px 20px;
    display: inline-block;
    font-family: var(--font-second);
    font-size: 13px;
    line-height: 1.2;
    font-weight: 300;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-text-main);
    cursor: pointer;

    &:hover {
      border-bottom: 2px solid #000;
    }
  }
  
  ${props => `
    ${props.number > 0 && props.number < 6 && 'border-bottom: 1px solid var(--color-border);'}

    > span:nth-child(${props.number}) {
      border-bottom: 2px solid #000;
    }
  `}
`;

const MenuOpenWrapper = styled.div`
  width: 100%;
  background: var(--color-background-main);
  display: flex;
  justify-content: center;
`;

const MenuOpen = styled.div`
  width: 1100px;
  padding: 25px 25px 25px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuInnerWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;

const MenuInner = styled.div`
  width: 110px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > a:first-child {
    font-family: var(--font-second);
    font-size: 13px;
    line-height: 1.2;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--color-text-main);
  }

  > a {
    height: 30px;
    font-family: var(--font-second);
    font-size: 14px;
    line-height: 28px;
    font-weight: 300;
    color: var(--color-text-regular);
    text-decoration: none;
    user-select: none;

    &:hover {color: var(--color-text-main)}
  }
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Message = styled.div`
  width: 165px;
  height: 97px;
  position: absolute;
  top: 20px;
  left: 160px;
  background-color: var(--color-background-main);
  border: 1px solid #000;
`;

const Text = styled.p`
  width: 115px;
  margin: 25px;
  text-align: center;
  font-family: var(--font-main);
  font-size: 18px;
  line-height: 18px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-text-main);
`;




const Menu = (): JSX.Element => {
  const [number, setNumber] = useState<number>(0);
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);
  const screen = useMediaQuery();

  const activeAccount: boolean = useAppSelector(
    state => state.account.accounts
      .findIndex((account: TAccount): boolean => account.isActive) !== -1
  );

  useEffect(() => {
    dropdownMenu ?
      document.body.style.overflowY = 'hidden' :
      document.body.style.overflowY = '';
  }, [dropdownMenu]);

  
  return(
    <MenuWrapper
      number={number > 0 && number < 6}
      onMouseLeave={(): void => setNumber(0)}
    >
      {screen.big ?
        <>
          <MainMenu number={number}>
            <span onClick={(): void => setNumber(1)}>women</span>
            <span onClick={(): void => setNumber(2)}>men</span>
            <span onClick={(): void => setNumber(3)}>kids</span>
            <span onClick={(): void => setNumber(4)}>accessories</span>
            <span onClick={(): void => setNumber(5)}>sale</span>

            <HashLink
              to='/#whats-new'
              smooth
              onMouseEnter={(): void => setNumber(6)}
            >
              whats new
            </HashLink>

            <HashLink
              to='#top-brands'
              smooth
              onMouseEnter={(): void => setNumber(7)}
            >
              brands
            </HashLink>

            <HashLink
              to='blog#top'
              onMouseEnter={(): void => setNumber(8)}
            >
              blog
            </HashLink>
          </MainMenu>

          {number > 0 && number < 6 &&
            <MenuOpenWrapper>
              <MenuOpen>
                <MenuInnerWrapper>
                  <MenuInner>
                    <HashLink to='catalog'>bottoms</HashLink>
                    <HashLink to='catalog'>Jeans</HashLink>
                    <HashLink to='catalog'>Pants</HashLink>
                    <HashLink to='catalog'>Shorts</HashLink>
                    <HashLink to='catalog'>Skirts</HashLink>
                    <HashLink to='catalog'>Dresses</HashLink>
                  </MenuInner>

                  <MenuInner>
                    <HashLink to='catalog'>tops</HashLink>
                    <HashLink to='catalog'>Jackets & Coats</HashLink>
                    <HashLink to='catalog'>Shirts</HashLink>
                    <HashLink to='catalog'>T-shirts</HashLink>
                    <HashLink to='catalog'>Knitwear</HashLink>
                    <HashLink to='catalog'>Sweats</HashLink>
                  </MenuInner>

                  <MenuInner>
                    <HashLink to='catalog'>shoes & more</HashLink>
                    <HashLink to='catalog'>Shoes</HashLink>
                    <HashLink to='catalog'>Underwear</HashLink>
                    <HashLink to='catalog'>Accessories</HashLink>
                    <HashLink to='catalog'>Collectables</HashLink>
                    <HashLink to='catalog'>Eyewear</HashLink>
                  </MenuInner>

                  <MenuInner>
                    <HashLink to='catalog'>collections</HashLink>
                    <HashLink to='catalog'>New arrivals</HashLink>
                    <HashLink to='catalog'>Urban Style</HashLink>
                    <HashLink to='catalog'>Raw Correct</HashLink>
                  </MenuInner>
                </MenuInnerWrapper>

                <ImageWrapper>
                  <img src={imageMenuInner} alt='women in denim'/>

                  <Message>
                    <Text>new denim collection now</Text>
                  </Message>
                </ImageWrapper>
              </MenuOpen>
            </MenuOpenWrapper>
          }
        </>
        :
        <>
          <MenuSymbol
            open={dropdownMenu}
            onClick={(): void => setDropdownMenu(!dropdownMenu)}
            to='#top'
            smooth
          >
            <div /><div /><div /><div />
          </MenuSymbol>

          <DropdownMenu
            open={dropdownMenu}
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
              if (e.target !== e.currentTarget) setDropdownMenu(false);
            }}
          >
            <HashLink to={'/catalog#top'}>CATALOG</HashLink>
            <HashLink to={'/my-account#top'}>MY ACCOUNT</HashLink>
            <HashLink to={'/wish-list#top'}>WISH LIST</HashLink>
            <HashLink to={'/checkout#top'}>CHECKOUT</HashLink>
            <HashLink to={'/login#top'}>{activeAccount ? 'LOG OUT' : 'LOG IN'}</HashLink>
            <HashLink to={'/blog#top'}>BLOG</HashLink>
          </DropdownMenu>
        </>
      }
    </MenuWrapper>
  )
}




export default Menu;
