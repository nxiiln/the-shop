import {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components/macro';
import {HashLink} from 'react-router-hash-link';
import {useAppDispatch, useAppSelector} from '../redux-hooks';
import {quickViewChange} from '../slices/quickView';
import {IProduct} from '../types/IProduct';
import {productImages} from '../images/productImages';
import {sizes, colors} from './CatalogFilters';
import {cartAdd, cartProductColor, cartProductSize, cartRemove} from '../slices/cart';
import {wishListAdd, wishListProductColor, wishListProductSize, wishListRemove} from '../slices/wishList';
import {LabelCheckbox} from './Form';
import Button from './Button';
import cartSymbol from '../images/cartSymbol.png';
import wishListSymbol from '../images/wishList.png';




const Overlay = styled.div<{$display: boolean}>`
  ${props => !props.$display && 'display: none;'}
  width: 100vw;
  height: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const WrapperOuter = styled.div<{$display: boolean}>`
  ${props => !props.$display && 'display: none;'}
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
  transition: background 0.15s ease-out;
  
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

interface IDropdown {
  open: boolean;
  openHeight: string;
  top: string;
  zIndex: number;
}

const Dropdown = styled.div<IDropdown>`
  width: 330px;
  height: 30px;
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
  transition: all 0.15s ease-out;

  &:hover {
    background: var(--color-background-main);
    border-radius: 0;
  }

  label {
    @keyframes open {
      0% {opacity: 0}
      100% {opacity: 1}
    }

    animation: 0.3s open;
  }

  ${props => props.open && `
    height: ${props.openHeight};
    background: var(--color-background-main);
    border-radius: 0;
  `}
`;

const DropdownHeader = styled.div<{open: boolean}>`
  width: 310px;
  min-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;

  > span:last-child {
    transform: ${props => props.open ? 'rotate(90deg)' : 'rotate(0deg)'};
    transition: transform 0.15s ease-out;
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
`;




const QuickView = (product: IProduct): JSX.Element => {
  const wishList: IProduct[] = useAppSelector(state => state.wishList);
  const cart: IProduct[] = useAppSelector(state => state.cart);
  const cartProduct: IProduct | undefined = cart
    .find((cartProduct: IProduct): boolean => cartProduct.id === product.id);

  const [sizeOpen, setSizeOpen] = useState<boolean>(false);
  const [size, setSize] = useState<string>('');
  const calculatedSize: string = cartProduct?.size || size || product.size;
  
  const [colorOpen, setColorOpen] = useState<boolean>(false);
  const [color, setColor] = useState<string>('');
  const calculatedColor: string = cartProduct?.color || color || product.color;

  const quickView = useAppSelector(state => state.quickView);
  const dispatch = useAppDispatch();

  const closeQuickView = useCallback(
    (): void => {
      dispatch(quickViewChange(false));
      setSize('');
      setSizeOpen(false);
      setColor('');
      setColorOpen(false);
  }, [dispatch]);

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
  }, [quickView, closeQuickView]);


  return(
    <>
      <Overlay $display={quickView} onClick={closeQuickView} />

      <WrapperOuter $display={quickView}>
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
              alt={`product${product.id}`}
            />
          </ImageLink>

          <DescriptionWrapper>
            <Id>PR-{product.id}256-08</Id>
            <Name>{product.name}</Name>
            <Price>${product.price}</Price>

          <Dropdown
            open={sizeOpen}
            openHeight='100px'
            top='110px'
            zIndex={3}
          >
            <DropdownHeader open={sizeOpen} onClick={(): void => setSizeOpen(!sizeOpen)}>
              <span>SIZE: {calculatedSize}</span>
              <span>❯</span>
            </DropdownHeader>

            {sizeOpen &&
              <CheckboxSizeWrapper>
                {sizes.map((currSize: string): JSX.Element =>
                  <LabelCheckbox
                    key={currSize}
                    margin='0 0 10px 0'
                  >
                    <input
                      type='checkbox'
                      checked={currSize === calculatedSize}
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
                  </LabelCheckbox>
                )}
              </CheckboxSizeWrapper>
            }
          </Dropdown>


          <Dropdown
            open={colorOpen}
            openHeight='140px'
            top='155px'
            zIndex={2}
          >
            <DropdownHeader open={colorOpen} onClick={(): void => setColorOpen(!colorOpen)}>
              <span>COLOR: {calculatedColor}</span>
              <span>❯</span>
            </DropdownHeader>

            {colorOpen &&
              <CheckboxColorWrapper>
                {colors.map((currColor: string): JSX.Element =>
                  <LabelCheckbox
                    key={currColor}
                    margin='0 0 10px 0'
                  >
                    <input
                      type='checkbox'
                      checked={currColor === calculatedColor}
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
                  </LabelCheckbox>
                )}
              </CheckboxColorWrapper>
            }
          </Dropdown>


          <Buttons>
            <Button
              type='button'
              width='45%'
              icon={cartSymbol}
              onClick={(): void => {
                const size: string = calculatedSize;
                const color: string = calculatedColor;
                !cart.some(cartProduct => cartProduct.id === product.id) ?
                  dispatch(cartAdd({...product, size, color})) : dispatch(cartRemove(product));
              }}
            >
              {!cart.some(cartProduct => cartProduct.id === product.id) ?
                'ADD TO CART' : 'PRODUCT IN CART'
              }
            </Button>

            <Button
              type='button'
              variant='outline'
              width='45%'
              icon={wishListSymbol}
              onClick={(): void => {
                const size: string = calculatedSize;
                const color: string = calculatedColor;
                !wishList.some(wishListProduct => wishListProduct.id === product.id) ?
                  dispatch(wishListAdd({...product, size, color})) : dispatch(wishListRemove(product));
              }}
            >
              {!wishList.some(wishListProduct => wishListProduct.id === product.id) ?
                'WISHLIST' : 'PRODUCT IN WISHLIST'
              }
            </Button>
          </Buttons>
          </DescriptionWrapper>
        </WrapperInner>
      </WrapperOuter>
    </>
  )
}




export default QuickView;
