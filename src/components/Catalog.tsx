import React, {useState} from 'react';
import styled from 'styled-components/macro';
import banner from '../images/banner.png';
import bannerSmall from '../images/bannerSmall.png';
import product1 from '../images/product1.png';
import product2 from '../images/product2.png';
import product3 from '../images/product3.png';
import product4 from '../images/product4.png';
import product5 from '../images/product5.png';
import product6 from '../images/product6.png';
import product7 from '../images/product7.png';
import product8 from '../images/product8.png';
import product9 from '../images/product9.png';




const WrapperOuter = styled.article`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 960px;
  height: 1860px;
  border: 1px solid aqua;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 10px;
  background: #aaa;
`;

const BreadCrumbsWrapper = styled.article`
  width: 100%;
  margin-bottom: 22px;
  display: flex;
  justify-content: space-between;
`;

const BreadCrumbs = styled.button`
  font-family: Arial;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 400;
  color: #aaa;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const BreadCrumbsLeft = styled(BreadCrumbs)`
  width: 82px;
  height: 10px;
`;

const BreadCrumbsRight = styled(BreadCrumbs)`
  width: 130px;
  height: 10px;
`;


//Dropdowns--------------------------------------
const Dropdown = styled.div<{open: boolean}>`
  width: 195px;
  margin-bottom: 7px;
  padding: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-family: Nunito;
  font-size: 11px;
  font-weight: 300;
  color: #000;
  background: #f7f7f7;
  border: 1px solid #e4e2e1;
  border-radius: 20px;
  span:nth-child(2) {transform: rotate(90deg);}

  :hover {
    background: #fff;
    border-radius: 0;
  }

  ${props => props.open && `
    background: #fff;
    border-radius: 0;
    span:nth-child(2) {transform: rotate(-90deg);}
  `}
`;

const DropdownHeader = styled.div`
  width: 100%;
  height: 29px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;


//Buttons----------------------------------------
const ButtonFilter = styled.button`
  margin-left: 4px;
  font-family: Nunito;
  font-size: 10px;
  line-height: 24px;
  font-weight: 400;
  color: #000;
  background: #fff;
  border: none;
  cursor: pointer;
  :hover {text-decoration: underline;}
`;

const ButtonWomenWrapper = styled.div`
  width: 107px;
  margin-top: 2px;
`;

const ResetFilter = styled.button`
  margin: 24px 0 8px 0;
  font-family: Arial;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 400;
  color: #aaa;
  background: none;
  border: none;
  cursor: pointer;
  :hover {text-decoration: underline;}
`;

const ButtonCategoryWrapper = styled.div`
  width: 115px;
  margin-top: 2px;
`;

const ButtonFilterBold = styled(ButtonFilter)`
  font-weight: 700;
`;

const ButtonFilterSecond = styled(ButtonFilter)`
  margin-left: 12px;
`;
//-----------------------------------------------


//Checkboxes-------------------------------------
const Checkbox = styled.label`
  margin-bottom: 12px;
  font-family: Nunito;
  font-size: 10px;
  font-weight: 400;
  color: #000;
  height: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {text-decoration: underline;}
  > input {
    margin: 0 7px 0 0;
    accent-color: #000;
  }
`;

const CheckboxWrapper = styled.div`
  width: 160px;
  height: 180px;
  margin: 10px 0 0 2px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-between;
`;

const CheckboxSizeWrapper = styled(CheckboxWrapper)`
  height: 90px;
`;

const CheckboxColorWrapper = styled(CheckboxWrapper)`
  width: 164px;
`;
//-----------------------------------------------


//Range------------------------------------------
const RangeWrapper = styled.div`
  width: 160px;
  height: 10px;
  margin-bottom: 80px;
  position: relative;
  background: #e4e2e1;

  input[type='range'] {
    &::-webkit-slider-runnable-track, 
    &::-webkit-slider-thumb, & {
      -webkit-appearance: none;
    }

    width: 100%;
    margin: 0;
    background: none;
    pointer-events: none;

    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 100%;
      background: none;
      border: none;
    }

    &::-webkit-slider-thumb {
      width: 20px;
      height: 20px;
      border-radius: 10px;
      background: #000;
      pointer-events: auto;
    }
  }
`;

const Range1 = styled.input`
  position: absolute;
  left: 0px;
  top: 0px;
`;

const Range2 = styled.input`
  position: absolute;
  left: 0px;
  top: 0px;
`;

const RangeValue = styled.div`
  width: 20px;
  height: 20px;
  margin-top: 20px;
  border: 1px solid #aaa;
`;
//-----------------------------------------------


//BannerSmall------------------------------------
const BannerSmall = styled.div`
  width: 195px;
  height: 312px;
  margin-top: 50px;
  position: relative;

  div {
    width: 119px;
    height: 57px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
    position: absolute;
    top: 255px;
    left: 0px;
    font-family: Nunito;
    line-height: 14px;
    font-weight: 300;

    span:first-child {
      font-size: 14px;
      color: #000;
      margin-bottom: 2px;
    }

    span:last-child {
      font-size: 11px;
      color: #aaa;
    }
  }
`;
//-----------------------------------------------




const Catalog = (): JSX.Element => {
  const [women, setWomen] = useState<boolean>(false);
  const [category, setCategory] = useState<boolean>(false);
  const [size, setSize] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<boolean>(false);
  const [color, setColor] = useState<boolean>(false);
  const [brand, setBrand] = useState<boolean>(false);

  const [range1, setRange1] = useState<number>(30);
  const [range2, setRange2] = useState<number>(70);


  return(
    <WrapperOuter>
      <WrapperInner>
        <Line />
        <BreadCrumbsWrapper>
          <BreadCrumbsLeft type='button'>
            Home / Women  
          </BreadCrumbsLeft>
          <BreadCrumbsRight type='button'>
            {'<'} Return to Previous Page
          </BreadCrumbsRight>
        </BreadCrumbsWrapper>


        <Dropdown open={women}>
          <DropdownHeader onClick={(): void => {
            women ? setWomen(false) : setWomen(true)
          }}>
            <span>WOMEN</span>
            <span>&#10095;</span>
          </DropdownHeader>

          {women &&
            <ButtonWomenWrapper>
              <ButtonFilter>BOTTOMS</ButtonFilter>
              <ButtonFilter>TOPS</ButtonFilter>
              <ButtonFilter>SHOES & MORE</ButtonFilter>
              <ButtonFilter>COLLECTION</ButtonFilter>
            </ButtonWomenWrapper>
          }
        </Dropdown>


        <ResetFilter>Reset Filter</ResetFilter>


        <Dropdown open={category}>
          <DropdownHeader onClick={(): void => {
            category ? setCategory(false) : setCategory(true)
          }}>
            <span>CATEGORY</span>
            <span>&#10095;</span>
          </DropdownHeader>

          {category &&
            <ButtonCategoryWrapper>
              <ButtonFilterBold>BOTTOMS</ButtonFilterBold>
              <ButtonFilterSecond>TOPS</ButtonFilterSecond>
              <ButtonFilterSecond>SHOES & MORE</ButtonFilterSecond>
              <ButtonFilterSecond>COLLECTION</ButtonFilterSecond>
              <ButtonFilterBold>TOPS</ButtonFilterBold>
              <ButtonFilterSecond>JACKETS & COATS</ButtonFilterSecond>
              <ButtonFilterSecond>SHIRTS</ButtonFilterSecond>
              <ButtonFilterSecond>T-SHIRTS</ButtonFilterSecond>
              <ButtonFilterSecond>KNITWEAR</ButtonFilterSecond>
              <ButtonFilterSecond>SWEATS</ButtonFilterSecond>
            </ButtonCategoryWrapper>
          }
        </Dropdown>


        <Dropdown open={size}>
          <DropdownHeader onClick={(): void => {
            size ? setSize(false) : setSize(true)
          }}>
            <span>SIZE</span>
            <span>&#10095;</span>
          </DropdownHeader>

          {size &&
            <CheckboxSizeWrapper>
              <Checkbox>
                <input type='checkbox' name='xs'/>
                XS (34)
              </Checkbox>

              <Checkbox>
                <input type='checkbox' name='s'/>
                S (36)
              </Checkbox>

              <Checkbox>
                <input type='checkbox' name='m' />
                M (38)
              </Checkbox>

              <Checkbox>
                <input type='checkbox' name='l' />
                L (42)
              </Checkbox>

              <Checkbox>
                <input type='checkbox' name='xl' />
                XL (46)
              </Checkbox>

              <Checkbox>
                <input type='checkbox' name='xxl' />
                XXL (52)
              </Checkbox>
            </CheckboxSizeWrapper>
          }
        </Dropdown>


        <Dropdown open={priceRange}>
          <DropdownHeader onClick={(): void => {
            priceRange ? setPriceRange(false) : setPriceRange(true)
          }}>
            <span>PRICE RANGE</span>
            <span>&#10095;</span>
          </DropdownHeader>

          {priceRange && 
            <RangeWrapper>
              <Range1
                type='range'
                min='0'
                value={range1}
                max='100'
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                  setRange1(+e.target.value);
                }}
              />
              
              <Range2
                type='range'
                min='0'
                value={range2}
                max='100'
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                  setRange2(+e.target.value);
                }}
              />

              <RangeValue>{range1}</RangeValue>
              <RangeValue>{range2}</RangeValue>
            </RangeWrapper>
          }
        </Dropdown>


        <Dropdown open={color}>
          <DropdownHeader onClick={(): void => {
            color ? setColor(false) : setColor(true)
          }}>
            <span>COLOR</span>
            <span>&#10095;</span>
          </DropdownHeader>

          {color &&
            <CheckboxColorWrapper>
              <Checkbox>
                <input type='checkbox' name='beige'/>
                BEIGE
              </Checkbox>

              <Checkbox>
                <input type='checkbox' name='black'/>
                BLACK
              </Checkbox>

              <Checkbox>
                <input type='checkbox' name='blue'/>
                BLUE
              </Checkbox>

              <Checkbox>
                <input type='checkbox' name='brown'/>
                BROWN
              </Checkbox>

              <Checkbox>
                <input type='checkbox' name='cream'/>
                CREAM
              </Checkbox>

              <Checkbox>
                <input type='checkbox' name='gold'/>
                GOLD
              </Checkbox>

              <Checkbox>
                <input type='checkbox' name='green'/>
                GREEN
              </Checkbox>

              <Checkbox>
                <input type='checkbox' name='grey'/>
                GREY
              </Checkbox>

              <Checkbox>
                <input type='checkbox' name='navy'/>
                NAVY
              </Checkbox>

              <Checkbox>
                <input type='checkbox' name='orange'/>
                ORANGE
              </Checkbox>

              <Checkbox>
                <input type='checkbox' name='pink'/>
                PINK
              </Checkbox>

              <Checkbox>
                <input type='checkbox' name='purple'/>
                PURPLE
              </Checkbox>
            </CheckboxColorWrapper>
          }
        </Dropdown>

   
        <Dropdown open={brand}>
          <DropdownHeader onClick={(): void => {
            brand ? setBrand(false) : setBrand(true)
          }}>
            <span>BRAND</span>
            <span>&#10095;</span>
          </DropdownHeader>

          {brand &&
            <CheckboxWrapper>
              <Checkbox>
                <input type='checkbox' name='armany'/>
                ARMANY
              </Checkbox>

              <Checkbox>
                <input type='checkbox' name='burberry'/>
                BURBERRY
              </Checkbox>

              <Checkbox>
                <input type='checkbox' name='chanel'/>
                CHANEL
              </Checkbox>

              <Checkbox>
                <input type='checkbox' name='dolce&gabbana'/>
                DOLCE&GABBANA
              </Checkbox>

              <Checkbox>
                <input type='checkbox' name='escada'/>
                ESCADA
              </Checkbox>

              <Checkbox>
                <input type='checkbox' name='fendi'/>
                FENDI
              </Checkbox>
            </CheckboxWrapper>
          }
        </Dropdown>


        <BannerSmall>
          <img src={bannerSmall} alt='bannerSmall' />
          <div>
            <span>MICHAEL KORS</span>
            <span>SPRING 2022</span>
          </div>
        </BannerSmall>
      </WrapperInner>
    </WrapperOuter>
  );
}




export default Catalog;
