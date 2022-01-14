import React, {useState} from 'react';
import styled from 'styled-components';
import imageMenuInner from '../images/imageMenuInner.png';


type Open = {open: boolean};

const MenuWrapper = styled.section<Open>`
  width: 100vw;
  height: 38px;
  position: relative;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  background-color: #fff;
  cursor: default;
  ${props => props.open && 'z-index: 2;'}
`;

const MainMenu = styled.ul<Open>`
  width: 76vw;
  height: 36px;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  > li {
    padding: 0 20px 34px 20px;
    display: inline-block;
    font-family: Nunito;
    font-size: 13px;
    line-height: 1.2;
    font-weight: 300;
    text-transform: uppercase;
    color: #282828;
  }
  ${props => props.open && `
    border-bottom: 1px solid #aaa;
    > li:first-child {
      color: #000;
      border-bottom: 2px solid #000;
      cursor: pointer;
    }
  `}
`;

const MenuOpenWrapper = styled.div`
  width: 100vw;
  background: #fff;
  display: flex;
  justify-content: center;
`;

const MenuOpen = styled.div`
  width: 76vw;
  padding: 25px 0 25px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuInnerWrapper = styled.div`
  width: 44vw;
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
    font-family: Nunito;
    font-size: 13px;
    line-height: 1.2;
    font-weight: 400;
    text-transform: uppercase;
    color: #000;
  }
  > li {
    height: 30px;
    display: inline-block;
    font-family: Nunito;
    font-size: 14px;
    line-height: 28px;
    font-weight: 300;
    color: #aaa;
    cursor: pointer;
    &:hover {
      color: #282828;
    }
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
  background-color: #fff;
  border: 1px solid #000;
`;

const Text = styled.p`
  width: 115px;
  margin: 25px;
  text-align: center;
  font-family: 'Playfair Display SC';
  font-size: 18px;
  line-height: 18px;
  font-weight: 400;
  text-transform: uppercase;
  color: #000;
`;


const Menu = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return(
    <MenuWrapper
      open={open}
      onMouseLeave={(): void => setOpen(false)}
    >
      <nav>
        <MainMenu open={open}>
          <li onMouseEnter={(): void => setOpen(true)}>
            women
          </li>
          <li>men</li>
          <li>kids</li>
          <li>accessories</li>
          <li>whats new</li>
          <li>brands</li>
          <li>sale</li>
          <li>blog</li>
        </MainMenu>
      </nav>

      {open &&
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
            <img
              src={imageMenuInner}
              alt='women in denim'
            />
            <Message>
              <Text>
                new denim collection now
              </Text>
            </Message>
          </ImageWrapper>
        </MenuOpen>
        </MenuOpenWrapper>
      }
    </MenuWrapper>
  )
}


export default Menu;
