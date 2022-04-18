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

const Groups = styled.div`
  display: flex;
  justify-content: space-between;
`;


//Dropdown---------------------------------------
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


//Button-----------------------------------------
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


//Checkbox---------------------------------------
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


//HeaderWrapper----------------------------------
const HeaderWrapper = styled.div`
  width: 725px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-family: 'Playfair Display SC';
    font-size: 24px;
    font-weight: 400;
    color: #000;
  }

  div {
    width: 550px;
    margin: 0;
  }

  span {
    font-family: Arial;
    font-size: 10px;
    font-weight: 400;
    color: #aaa;
  }
`;


//Banner-----------------------------------------
const Banner = styled.div`
  margin-top: 15px;
  position: relative;

  span:nth-child(2) {
    position: absolute;
    top: 155px;
    left: 35px;
    font-family: 'Playfair Display SC';
    font-size: 48px;
    font-weight: 400;
    color: #000;
  }

  span:nth-child(3) {
    position: absolute;
    top: 220px;
    left: 35px;
    font-family: Nunito;
    font-size: 12px;
    font-weight: 300;
    color: #282828;
  }
`;


//WrapperDropdownsSmallPagination----------------
const WrapperDropdownsSmallPagination = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 6px;
  display: flex;
`;


//DropdownSmall---------------------------------
const DropdownSmallWrapper = styled.div<{type: string}>`
  ${props => props.type === 'sort' ? 'width: 175px;' : `
    width: 100px;
    margin-left: 30px;
  `}

  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  > span:nth-child(1) {
    font-family: Nunito;
    font-size: 10px;
    font-weight: 300;
    color: #000;
  }

  > span:nth-child(3) {
    font-size: 10px;
    color: #bebebe;
  }
`;

const DropdownSmall = styled.div<{type: string; open: boolean}>`
  width: ${props => props.type === 'sort' ? '104px' : '61px'};
  height: ${props => props.open ? '106px' : '30px'};
  align-self: start;
  border: 1px solid #e4e2e1;
`;

const DropdownSmallHeader = styled.div`
  height: 30px;
  padding-left: 12px;
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  font-family: Arial;
  font-size: 11px;
  font-weight: 400;
  color: #aaa;
`;

const Triangle = styled.div<{type: string}>`
  position: absolute;
  top: 12px;
  left: ${props => props.type === 'sort' ? '90px' : '48px'};
  border-top: 4px solid #000;
  border-right: 3px solid transparent;
  border-left: 3px solid transparent;
`;

const DropdownSmallBody = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  background: #fff;
`;

const DropdownSmallMode = styled.button`
  margin: 0 0 8px 7px;
  display: flex;
  font-family: Arial;
  font-size: 11px;
  font-weight: 400;
  color: #aaa;
  background: transparent;
  border: none;
  :hover {
    color: #000;
    cursor: pointer;
  }
`;


//Products---------------------------------------
const Products = styled.div`
  width: 725px;
  height: 1220px;
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
`;

const Product = styled.div`
  width: auto;
  height: 360px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #000;
  text-transform: uppercase;
`;

const ProductName = styled.span`
  font-family: 'Playfair Display SC';
  font-size: 14px;
  font-weight: 400;
`;

const ProductPrice = styled.span`
  font-family: Nunito;
  font-size: 11px;
  font-weight: 300;
`;

const ProductTriangle = styled.div<{attr: string}>`
  width: 0;
  height: 0;
  position: absolute;
  top: -5px;
  left: -22px;
  border-right: 35px solid transparent;
  border-bottom: ${props => props.attr === 'new' ?
    '35px solid #000' : '35px solid #c50e20'
  };
  border-left: 35px solid transparent;
  transform: rotate(-45deg);
`;

const ProductTriangleDescription = styled.span`
  position: absolute;
  top: 5px;
  left: 5px;
  font-family: 'Playfair Display SC';
  font-size: 11px;
  line-height: 1.2;
  font-weight: 700;
  color: #fff;
`;




const Catalog = (): JSX.Element => {
  interface Product {
    id: number;
    image: string;
    name: string;
    price: number;
    triangle: string;
  }

  const products: Product[] = [
    {
      id: 1,
      image: product1,
      name: 'detailed swing dress',
      price: 1875,
      triangle: 'new',
    },
    {
      id: 2,
      image: product2,
      name: 'maxararzy frilled dress',
      price: 1875,
      triangle: 'sale',
    },
    {
      id: 3,
      image: product3,
      name: 'detailed swing dress',
      price: 1875,
      triangle: '',
    },
    {
      id: 4,
      image: product4,
      name: 'maxararzy frilled dress',
      price: 1875,
      triangle: '',
    },
    {
      id: 5,
      image: product5,
      name: 'detailed swing dress',
      price: 1875,
      triangle: '',
    },
    {
      id: 6,
      image: product6,
      name: 'maxararzy frilled dress',
      price: 1875,
      triangle: 'sale',
    },
    {
      id: 7,
      image: product7,
      name: 'detailed swing dress',
      price: 1875,
      triangle: '',
    },
    {
      id: 8,
      image: product8,
      name: 'maxararzy frilled dress',
      price: 1875,
      triangle: '',
    },
    {
      id: 9,
      image: product9,
      name: 'detailed swing dress',
      price: 1875,
      triangle: '',
    },
  ];


  const [women, setWomen] = useState<boolean>(false);
  const [category, setCategory] = useState<boolean>(false);
  const [size, setSize] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<boolean>(false);
  const [color, setColor] = useState<boolean>(false);
  const [brand, setBrand] = useState<boolean>(false);

  const [range1, setRange1] = useState<number>(30);
  const [range2, setRange2] = useState<number>(70);

  const [sortingOpen, setSortingOpen] = useState<boolean>(false);
  const [sortingMode, setSortingMode] = useState<string>('Position');

  const [showOpen, setShowOpen] = useState<boolean>(false);
  const [showMode, setShowMode] = useState<number>(9);


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


        <Groups>
          <div>
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
          </div>


          <div>
            <HeaderWrapper>
              <h2>WOMEN</h2>
              <Line />
              <span>557 items</span>
            </HeaderWrapper>


            <Banner>
              <img src={banner} alt='banner' />
              <span>LOVE SUNHAT</span>
              <span>NEW SUMMER HAT COLLECTION 2022</span>
            </Banner>

            
            <WrapperDropdownsSmallPagination>
              <DropdownSmallWrapper
                type='sort'
                onMouseEnter={(): void => setSortingOpen(true)}
                onMouseLeave={(): void => setSortingOpen(false)}
                onClick={(): void => setSortingOpen(false)}
              >
                <span>SORT BY</span>
                <DropdownSmall type='sort' open={sortingOpen}>
                  <DropdownSmallHeader>
                    {sortingMode}
                    <Triangle type='sort' />
                  </DropdownSmallHeader>

                  {sortingOpen &&
                    <DropdownSmallBody>
                      <DropdownSmallMode
                        type='button'
                        onClick={(): void => setSortingMode('Position')}
                      >
                        Position
                      </DropdownSmallMode>

                      <DropdownSmallMode
                        type='button'
                        onClick={(): void => setSortingMode('Price')}
                      >
                        Price
                      </DropdownSmallMode>

                      <DropdownSmallMode
                        type='button'
                        onClick={(): void => setSortingMode('Name')}
                      >
                        Name
                      </DropdownSmallMode>
                    </DropdownSmallBody>
                  }
                </DropdownSmall>

                <span>&#8595;</span>
              </DropdownSmallWrapper>


              <DropdownSmallWrapper
                type='show'
                onMouseEnter={(): void => setShowOpen(true)}
                onMouseLeave={(): void => setShowOpen(false)}
                onClick={(): void => setShowOpen(false)}
              >
                <span>SHOW</span>
                <DropdownSmall type='show' open={showOpen}>
                  <DropdownSmallHeader>
                    {showMode}
                    <Triangle type='show' />
                  </DropdownSmallHeader>

                  {showOpen &&
                    <DropdownSmallBody>
                      <DropdownSmallMode
                        type='button'
                        onClick={(): void => setShowMode(12)}
                      >
                        12
                      </DropdownSmallMode>

                      <DropdownSmallMode
                        type='button'
                        onClick={(): void => setShowMode(9)}
                      >
                        9
                      </DropdownSmallMode>

                      <DropdownSmallMode
                        type='button'
                        onClick={(): void => setShowMode(6)}
                      >
                        6
                      </DropdownSmallMode>
                    </DropdownSmallBody>
                  }
                </DropdownSmall>                
              </DropdownSmallWrapper>
            </WrapperDropdownsSmallPagination>


            <Products>
              {products.map((product: Product): JSX.Element => {
                return(
                  <Product>
                    <img src={product.image} alt={product.name} />
                    {(product.triangle === 'new' || product.triangle === 'sale') &&
                      <>
                        <ProductTriangle
                          attr={product.triangle === 'new' ? 'new' : 'sale'}
                        />
                        <ProductTriangleDescription>
                          {product.triangle === 'new' ? 'new' : 'sale'}
                        </ProductTriangleDescription>
                      </>
                    }
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>${product.price}</ProductPrice>
                  </Product>
                );
              })}
            </Products>
          </div>
        </Groups>
      </WrapperInner>
    </WrapperOuter>
  );
}




export default Catalog;
