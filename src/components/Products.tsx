import {useState} from 'react';
import styled from 'styled-components/macro';
import {useMediaQuery} from '../mediaQueries';
import {HashLink} from 'react-router-hash-link';
import {useAppSelector, useAppDispatch} from '../redux-hooks';
import {cartAdd, cartRemove} from '../slices/cart';
import {wishListAdd, wishListRemove} from '../slices/wishList';
import {quickViewChange} from '../slices/quickView';
import {IProduct} from '../types/IProduct';
import {productImages} from '../images/productImages';
import QuickView from './QuickView';
import Button from './Button';
import cartSymbol from '../images/cartSymbol.png';
import wishListSymbol from '../images/wishList.png';




const ProductsWrapper = styled.div<{maxWidth?: string, margin?: string}>`
  width: 100%;
  max-width: ${props => props.maxWidth};
  margin: ${props => props.margin};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Product = styled(HashLink)`
  width: 230px;
  height: 360px;
  margin-bottom: 75px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-text-main);

  &:hover {cursor: pointer}

  > img {width: 100%}
`;

const ProductName = styled.span`
  font-family: var(--font-main);
  font-size: 14px;
  font-weight: 400;
`;

const ProductPrice = styled.span`
  font-family: var(--font-second);
  font-size: 11px;
  font-weight: 300;
`;

const ProductTriangle = styled.div<{attr: string}>`
  width: 0;
  height: 0;
  position: absolute;
  top: -4px;
  left: -22px;
  border-right: 35px solid transparent;
  border-bottom: ${props => props.attr === 'new' ?
    '35px solid var(--color-triangle-new)' :
    '35px solid var(--color-triangle-sale)'
  };
  border-left: 35px solid transparent;
  transform: rotate(-45deg);
`;

const ProductTriangleDescription = styled.span`
  position: absolute;
  top: 5px;
  left: 5px;
  font-family: var(--font-main);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 700;
  color: var(--color-text-second);
`;

const ProductOpen = styled.div`
  width: 230px;
  height: 425px;
  padding-bottom: 10px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.23);
`;

const QuickShop = styled(Button)`
  color: var(--color-text-main);
  background: var(--color-background-main);
  opacity: 0.8;
  border: none;

  &:hover {
    background: var(--color-background-main);
    opacity: 1;
  }
`;




interface IProps {
  products: IProduct[];
  maxWidth?: string;
  margin?: string;
}

const Products = (props: IProps): JSX.Element => {
  const screen = useMediaQuery();
  const [productOpen, setProductOpen] = useState<number>(0);
  const [productQuickView, setProductQuickView] = useState<IProduct>(props.products[0]);
  const cart = useAppSelector(state => state.cart);
  const wishList = useAppSelector(state => state.wishList);
  const dispatch = useAppDispatch();

  type Click = React.MouseEvent<HTMLButtonElement, MouseEvent>;


  return(
    <ProductsWrapper maxWidth={props.maxWidth} margin={props.margin}>
      {props.products.map((product: IProduct): JSX.Element =>
        <Product
          key={product.id}
          to={`/catalog/product${product.id}#top`}
          onMouseEnter={(): void => setProductOpen(product.id)}
          onMouseLeave={(): void => setProductOpen(0)}
        >
          <img src={productImages[`product${product.id}`]} alt={product.name} />

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

          {!screen.small && !screen.touch && productOpen === product.id &&
            <ProductOpen>
              <QuickShop
                width='100%'
                height='20px'
                position='absolute'
                top='150px'
                left='0'
                onClick={(e: Click): void => {
                  e.preventDefault();
                  setProductQuickView(product);
                  dispatch(quickViewChange(true));
                }}
              >
                QUICK SHOP
              </QuickShop>
              
              <Button
                type='button'
                width='100%'
                height='25px'
                margin='365px 0 0 0'
                icon={cartSymbol}
                onClick={(e: Click): void => {
                  e.preventDefault();
                  !cart.some(cartProduct => cartProduct.id === product.id) ?
                    dispatch(cartAdd(product)) : dispatch(cartRemove(product));
                }}
              >
                {!cart.some(cartProduct => cartProduct.id === product.id) ? 
                  'ADD TO CART' : 'PRODUCT IN CART'
                }
              </Button>

              <Button
                type='button'
                variant='link'
                margin='2px 0 0 0'
                icon={wishListSymbol}
                onClick={(e: Click): void => {
                  e.preventDefault();
                  !wishList.some(wishListProduct => wishListProduct.id === product.id) ?
                    dispatch(wishListAdd(product)) : dispatch(wishListRemove(product));
                }}
              >
                {!wishList.some(wishListProduct => wishListProduct.id === product.id) ?
                  'WISHLIST' : 'PRODUCT IN WISHLIST'
                }
              </Button>
            </ProductOpen>
          }
        </Product>
      )}

      <QuickView {...productQuickView} />
    </ProductsWrapper>
  );
}




export default Products;
