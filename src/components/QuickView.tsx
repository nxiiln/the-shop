import {useState, useEffect} from 'react';
import styled from 'styled-components/macro';
import {HashLink} from 'react-router-hash-link';
import {useAppDispatch, useAppSelector} from '../redux-hooks';
import {quickViewChange} from '../slices/quickView';
import {IProduct} from '../types/IProduct';
import {productImages} from '../images/productImages';
import {sizes, colors} from './CatalogFilters';
import {cartAdd, cartProductColor, cartProductSize, cartRemove} from '../slices/cart';
import {wishListAdd, wishListProductColor, wishListProductSize, wishListRemove} from '../slices/wishList';
import wishListSymbol from '../images/wishList.png';




const Overlay = styled.div<{display: boolean}>`
  ${props => !props.display && 'display: none;'}
  width: 100vw;
  height: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const WrapperOuter = styled.div<{display: boolean}>`
  ${props => !props.display && 'display: none;'}
  width: 700px;
  height: 430px;
  position: fixed;
  top: calc(50vh - 430px / 2);
  left: calc(50vw - 700px / 2);
  background: var(--color-background-main);
  z-index: 2;
`;

const WrapperInner = styled.div`
  width: 643px;
  height: 380px;
  position: relative;
  margin: 20px 0 0 38px;
  display: flex;
  flex-wrap: wrap;
`;


// Title
const TitleWrapper = styled.div`
  width: 643px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-family: var(--font-main);
  font-size: 24px;
  font-weight: 400;
  color: var(--color-text-main);
`;

const Line = styled.div`
  width: 442px;
  height: 1px;
  background: var(--color-border);
`;

const Close = styled.button`
  width: 29px;
  height: 29px;
  position: relative;
  align-self: start;
  background: var(--color-background-main);
  border: 1px solid var(--color-border);
  cursor: pointer;
  
  &:hover {background: var(--color-button-outline-hover)}

  > span:first-child  {
    display: inline-block;
    position: absolute;
    top: -5px;
    left: 7px;
    font-family: var(--font-second);
    font-size: 25px;
    color: var(--color-text-main);
    transform: rotate(45deg);
  }
`;

const ImageLink = styled(HashLink)`
  > img {
    width: 230px;
    height: 318px;
  }
`;


// Description
const DescriptionWrapper = styled.div`
  width: 330px;
  margin-left: 48px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const Id = styled.span`
  font-family: var(--font-regular);
  font-size: 11px;
  font-weight: 400;
  color: var(--color-text-regular);
`;

const Name = styled.span`
  margin-bottom: 15px;
  font-family: var(--font-main);
  font-size: 24px;
  font-weight: 400;
  color: var(--color-text-main);
  text-transform: uppercase;
`;

const Price = styled.span`
  margin-bottom: 30px;
  font-family: var(--font-second);
  font-size: 18px;
  font-weight: 300;
  color: var(--color-text-main);
`;

const Dropdown = styled.div<{open: boolean, top: string, zIndex: number}>`
  width: 330px;
  margin-bottom: 15px;
  padding: 0 10px 0 10px;
  position: absolute;
  top: ${props => props.top};
  display: flex;
  flex-direction: column;
  align-items: start;
  font-family: var(--font-second);
  font-size: 11px;
  font-weight: 300;
  line-height: 1.2;
  color: var(--color-text-main);
  background: var(--color-background-highlight);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  z-index: ${props => props.zIndex};

  > span:nth-child(2) {transform: rotate(90deg)}

  &:hover {
    background: var(--color-background-main);
    border-radius: 0;
  }

  ${props => props.open && `
    background: var(--color-background-main);
    border-radius: 0;
    span:nth-child(2) {transform: rotate(-90deg)}
  `}
`;

const DropdownHeader = styled.div`
  width: 310px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
`;

const Checkbox = styled.label`
  height: 18px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  font-family: var(--font-second);
  font-size: 10px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-text-main);
  cursor: pointer;

  &:hover {text-decoration: underline}

  > input {
    margin: 0 7px 0 0;
    accent-color: var(--color-text-main);
    cursor: pointer;
  }
`;

const CheckboxWrapper = styled.div`
  margin: 10px 0 0 2px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-between;
`;

const CheckboxSizeWrapper = styled(CheckboxWrapper)`
  width: 220px;
  height: 60px;
`;

const CheckboxColorWrapper = styled(CheckboxWrapper)`
  width: 100%;
  height: 100px;
`;

const Buttons = styled.div`
  margin-top: 120px;
  display: flex;
  justify-content: space-between;

  > button {
    width: 45%;
    height: 30px;
    font-family: var(--font-second);
    font-size: 10px;
    font-weight: 300;
    cursor: pointer;
  }

  > button:first-child {
    color: var(--color-text-second);
    background: var(--color-background-second);
    border: none;

    &:hover {background: var(--color-button-solid-hover)}
  }

  > button:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-text-main);
    background: var(--color-background-main);
    border: 1px solid var(--color-border);
    img {margin-right: 7px}

    &:hover {background: var(--color-button-outline-hover)}
  }
`;




const QuickView = (product: IProduct): JSX.Element => {
  const cart: IProduct[] = useAppSelector(state => state.cart);
  const cartProduct: IProduct | undefined = cart
    .find((cartProduct: IProduct): boolean => cartProduct.id === product.id);
  const wishList: IProduct[] = useAppSelector(state => state.wishList);

  const [sizeOpen, setSizeOpen] = useState<boolean>(false);
  const initialSize: string = typeof cartProduct === 'undefined' ? product.size : cartProduct.size;
  const [size, setSize] = useState<string>(initialSize);
  
  const [colorOpen, setColorOpen] = useState<boolean>(false);
  const initialColor: string = typeof cartProduct === 'undefined' ? product.color : cartProduct.color;
  const [color, setColor] = useState<string>(initialColor);

  const quickView = useAppSelector(state => state.quickView);
  const dispatch = useAppDispatch();

  const closeQuickView = (): void => {dispatch(quickViewChange(false))};

  useEffect((): {(): void} => {
    quickView ?
      document.body.style.overflowY = 'hidden' :
      document.body.style.overflowY = '';
    
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') closeQuickView();
    }
    
    document.body.addEventListener('keyup', handleEscape);

    return (): void => {
      document.body.removeEventListener('keyup', handleEscape);
    };
  }, [quickView]);


  return(
    <>
      <Overlay display={quickView} onClick={closeQuickView} />

      <WrapperOuter display={quickView}>
        <WrapperInner>
          <TitleWrapper>
            <Title>QUICK VIEW</Title>
            <Line />
            <Close type='button' onClick={closeQuickView}>
              <span>+</span>
            </Close>
          </TitleWrapper>

          <ImageLink
            to={`/catalog/product${product.id}#top`}
            onClick={closeQuickView}
          >
            <img
              src={productImages[`product${product.id}`]}
              alt='woman in white dress'
            />
          </ImageLink>

          <DescriptionWrapper>
            <Id>PR-{product.id}256-08</Id>
            <Name>{product.name}</Name>
            <Price>${product.price}</Price>

          <Dropdown open={sizeOpen} top='110px' zIndex={3}>
            <DropdownHeader onClick={(): void => setSizeOpen(!sizeOpen)}>
              <span>SIZE: {size}</span>
              <span>❯</span>
            </DropdownHeader>

            {sizeOpen &&
              <CheckboxSizeWrapper>
                {sizes.map((currSize: string): JSX.Element =>
                  <Checkbox key={currSize}>
                    <input
                      type='checkbox'
                      checked={currSize === size}
                      onChange={(): void => {
                        setSize(currSize);
                        const size: string = currSize;
                        
                        if (cart.some(cartProduct => cartProduct.id === product.id)) {
                          dispatch(cartProductSize({...product, size}));
                        }

                        if (wishList.some(wishListProduct => wishListProduct.id === product.id)) {
                          dispatch(wishListProductSize({...product, size}));
                        }
                      }}
                    />
                    {currSize}
                  </Checkbox>
                )}
              </CheckboxSizeWrapper>
            }
          </Dropdown>


          <Dropdown open={colorOpen} top='155px' zIndex={2}>
            <DropdownHeader onClick={(): void => setColorOpen(!colorOpen)}>
              <span>COLOR: {color}</span>
              <span>❯</span>
            </DropdownHeader>

            {colorOpen &&
              <CheckboxColorWrapper>
                {colors.map((currColor: string): JSX.Element =>
                  <Checkbox key={currColor}>
                    <input
                      type='checkbox'
                      checked={currColor === color}
                      onChange={(): void => {
                        setColor(currColor);
                        const color: string = currColor;

                        if (cart.some(cartProduct => cartProduct.id === product.id)) {
                          dispatch(cartProductColor({...product, color}));
                        }

                        if (wishList.some(wishListProduct => wishListProduct.id === product.id)) {
                          dispatch(wishListProductColor({...product, color}));
                        }
                      }}
                    />
                    {currColor}
                  </Checkbox>
                )}
              </CheckboxColorWrapper>
            }
          </Dropdown>


          <Buttons>
            <button
              type='button'
              onClick={(): void => {
                !cart.some(cartProduct => cartProduct.id === product.id) ?
                dispatch(cartAdd({...product, size, color})) : dispatch(cartRemove(product));
              }}
            >
              {!cart.some(cartProduct => cartProduct.id === product.id) ?
                'ADD TO CART' : 'PRODUCT IN CART'
              }
            </button>

            <button
              type='button'
              onClick={(): void => {
                !wishList.some(wishListProduct => wishListProduct.id === product.id) ?
                dispatch(wishListAdd({...product, size, color})) : dispatch(wishListRemove(product));
              }}
            >
              <img src={wishListSymbol} alt='wishList' />
              {!wishList.some(wishListProduct => wishListProduct.id === product.id) ?
                'WISHLIST' : 'PRODUCT IN WISHLIST'
              }
            </button>
          </Buttons>
          </DescriptionWrapper>
        </WrapperInner>
      </WrapperOuter>
    </>
  )
}




export default QuickView;
