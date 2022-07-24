import {useState} from 'react';
import styled from 'styled-components/macro';
import {HashLink} from 'react-router-hash-link';
import {useAppSelector, useAppDispatch} from '../redux-hooks';
import {cartAdd, cartRemove} from '../slices/cart';
import {wishListAdd, wishListRemove} from '../slices/wishList';
import {IProduct} from '../types/IProduct';
import cartSymbol from '../images/cartSymbol.png';
import wishListSymbol from '../images/wishList.png';
import { useMediaQuery } from '../mediaQueries';




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

const QuickShop = styled.button`
  width: 100%;
  height: 19px;
  margin: 0;
  position: absolute;
  top: 150px;
  left: 0px;
  font-family: var(--font-second);
  font-size: 10px;
  font-weight: 300;
  color: var(--color-text-main);
  background: var(--color-background-main);
  opacity: 0.8;
  border: none;
  cursor: pointer;

  &:hover {opacity: 1}
`;

const AddToCart = styled.button`
  width: 100%;
  height: 25px;
  margin-top: 365px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-second);
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-text-second);
  background: var(--color-background-second);
  border: none;
  cursor: pointer;

  &:hover {background: var(--color-button-solid-hover)}

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-second);
    font-size: 10px;
    line-height: 1.2;
    font-weight: 300;
    color: var(--color-text-second);

    > img {margin-right: 5px}
  }
`;

const WishList = styled.button`
  height: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: end;
  font-family: var(--font-second);
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-text-main);
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {text-decoration: underline}

  > img {margin-right: 5px}
`;



interface IProps {
  products: IProduct[];
  maxWidth?: string;
  margin?: string;
}


const Products = (props: IProps): JSX.Element => {
  const screen = useMediaQuery();
  const [productOpen, setProductOpen] = useState<number>(0);
  const cart = useAppSelector(state => state.cart);
  const wishList = useAppSelector(state => state.wishList);
  const dispatch = useAppDispatch();

  type Click = React.MouseEvent<HTMLButtonElement, MouseEvent>;
  const preventDefault = (e: Click): void => e.preventDefault();
  

  return(
    <ProductsWrapper maxWidth={props.maxWidth} margin={props.margin}>
      {props.products.map((product: IProduct): JSX.Element =>
        <Product
          key={product.id}
          to={`/catalog/product${product.id}#top`}
          onMouseEnter={(): void => setProductOpen(product.id)}
          onMouseLeave={(): void => setProductOpen(0)}
        >
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

          {screen.touch && productOpen === product.id &&
            <ProductOpen>
              <QuickShop onClick={preventDefault}>QUICK SHOP</QuickShop>

              <AddToCart
                type='button'
                onClick={(e: Click): void => {
                  e.preventDefault();
                  !cart.some(cartProduct => cartProduct.id === product.id) ?
                    dispatch(cartAdd(product)) : dispatch(cartRemove(product));
                }}
              >
                <div>
                  <img src={cartSymbol} alt='cart symbol' />
                  {!cart.some(cartProduct => cartProduct.id === product.id) ? 
                    'ADD TO CART' : 'PRODUCT IN CART'
                  }
                </div>
              </AddToCart>

              <WishList
                type='button'
                onClick={(e: Click): void => {
                  e.preventDefault();
                  !wishList.some(wishListProduct => wishListProduct.id === product.id) ?
                    dispatch(wishListAdd(product)) : dispatch(wishListRemove(product));
                }}
              >
                <img src={wishListSymbol} alt='wishlist' />
                {!wishList.some(wishListProduct => wishListProduct.id === product.id) ?
                  'WISHLIST' : 'PRODUCT IN WISHLIST'
                }
              </WishList>
            </ProductOpen>
          }
        </Product>
      )}
    </ProductsWrapper>
  );
}




export default Products;
