import {useState} from 'react';
import styled from 'styled-components/macro';
import {smallScreen, mediumScreen, useMediaQuery} from '../mediaQueries';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import imageMenuInner from '../images/imageMenuInner.png';


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

const MenuSymbol = styled.div`
  height: 15px;
  margin-left: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  > div {
    width: 20px;
    height: 3px;
    background: var(--color-background-second);
    border-radius: 2px;
  }
`;

const MainMenu = styled.div<{number: number}>`
  width: 1100px;
  height: 36px;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;

  > a {
    padding: 0 20px 34px 20px;
    display: inline-block;
    font-family: var(--font-second);
    font-size: 13px;
    line-height: 1.2;
    font-weight: 300;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-text-main);
  }
  
  ${props => `
    ${!!props.number && 'border-bottom: 1px solid var(--color-border);'}

    > a:nth-child(${props.number}) {
      border-bottom: 2px solid #000;
      cursor: pointer;
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

const MenuInner = styled.ul`
  width: 110px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > li:first-child {
    font-family: var(--font-second);
    font-size: 13px;
    line-height: 1.2;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--color-text-main);
  }

  > li {
    height: 30px;
    display: inline-block;
    font-family: var(--font-second);
    font-size: 14px;
    line-height: 28px;
    font-weight: 300;
    color: var(--color-text-regular);
    cursor: pointer;

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
  const screen = useMediaQuery();

  
  return(
    <MenuWrapper
      number={!!number}
      onMouseLeave={(): void => setNumber(0)}
    >
      {screen.big ?
        <>
          <MainMenu number={number}>
            <Link to='catalog' onMouseEnter={(): void => setNumber(1)}>women</Link>
            <Link to='catalog' onMouseEnter={(): void => setNumber(2)}>men</Link>
            <Link to='catalog' onMouseEnter={(): void => setNumber(3)}>kids</Link>
            <Link to='catalog' onMouseEnter={(): void => setNumber(4)}>accessories</Link>
            <Link to='catalog' onMouseEnter={(): void => setNumber(5)}>sale</Link>

            <HashLink
              to='the-shop/#whats-new'
              onMouseEnter={(): void => setNumber(6)}
            >
              whats new
            </HashLink>

            <HashLink
              to='the-shop/#top-brands'
              onMouseEnter={(): void => setNumber(7)}
            >
              brands
            </HashLink>
            
            <Link to='blog' onMouseEnter={(): void => setNumber(8)}>blog</Link>
          </MainMenu>

          {!!number &&
            <MenuOpenWrapper>
              <MenuOpen>
                <MenuInnerWrapper>
                  <MenuInner>
                    <li>bottoms</li>
                    <li>Jeans</li>
                    <li>Pants</li>
                    <li>Shorts</li>
                    <li>Skirts</li>
                    <li>Dresses</li>
                  </MenuInner>

                  <MenuInner>
                    <li>tops</li>
                    <li>Jackets & Coats</li>
                    <li>Shirts</li>
                    <li>T-shirts</li>
                    <li>Knitwear</li>
                    <li>Sweats</li>
                  </MenuInner>

                  <MenuInner>
                    <li>shoes & more</li>
                    <li>Shoes</li>
                    <li>Underwear</li>
                    <li>Accessories</li>
                    <li>Collectables</li>
                    <li>Eyewear</li>
                  </MenuInner>

                  <MenuInner>
                    <li>collections</li>
                    <li>New arrivals</li>
                    <li>Urban Style</li>
                    <li>Raw Correct</li>
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
        <MenuSymbol>
          <div />
          <div />
          <div />
        </MenuSymbol>
      }
    </MenuWrapper>
  )
}


export default Menu;
