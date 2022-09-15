import styled from 'styled-components/macro';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';
import {HashLink} from 'react-router-hash-link';
import {useAppSelector, useAppDispatch} from '../redux-hooks';
import {wishListRemove} from '../slices/wishList';
import {cartAdd, cartRemove} from '../slices/cart';
import {IProduct} from '../types/IProduct';
import {productImages} from '../images/productImages';
import BreadCrumbs from './BreadCrumbs';
import Button from './Button';
import cartSymbol from '../images/cartSymbol.png';




const WrapperOuter = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div<{empty: boolean}>`
  width: 1100px;
  padding: 0 1% 50px;
  
  ${props => props.empty ?
   `display: flex;
    flex-direction: column;

    > h2 {
      margin: 0 0 20px;
      align-self: center;
      font-family: var(--font-main);
      font-size: 24px;
      line-height: 1.2;
      font-weight: 400;
      color: var(--color-text-main);
    }

    > a {
      align-self: center;
      @media ${mediumScreen} {align-self: center}
    }`

   :

   `display: grid;
    border-bottom: 1px solid var(--color-border);
    grid-template-columns: 1fr;
    grid-template-rows: 10px 30px 1fr;`
  }
`;

const CartWrapper = styled.div`
  grid-area: 3 / 1 / 4 / 1;
  border: 1px solid var(--color-border);

  > div:last-child {margin-bottom: 0}
`;

const HeaderWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  > h2 {
    font-family: var(--font-main);
    font-size: 24px;
    line-height: 1.2;
    font-weight: 400;
    color: var(--color-text-main);
  }
`;

const TitleWrapper = styled.div`
  width: 97%;
  height: 50px;
  margin-left: 1.5%;
  display: grid;
  grid-template-columns:
    minmax(25px, 4.8%) minmax(83px, 12%) minmax(150px, 23%)
    minmax(40px, 10.2%) minmax(30px, 31.6%) minmax(119px, 1fr);
  justify-items: start;
  align-items: center;

  > span {
    font-family: var(--font-second);
    font-size: 12px;
    line-height: 1.2;
    font-weight: 300;
    color: var(--color-text-main);
  }

  > span:nth-child(1) {grid-area: 1 / 2 / 1 / 3}
  > span:nth-child(2) {grid-area: 1 / 4 / 1 / 5}
  > span:nth-child(3) {grid-area: 1 / 5 / 1 / 6}
`;

const ProductWrapper = styled.div`
  width: 100%;
  margin: 0 0 15px 0;
  height: 134px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-background-highlight);

  @media ${smallScreen} {height: 245px}
`;

const Product = styled.div`
  width: 97%;
  height: 120px;
  display: grid;

  > button:nth-child(1) {grid-area: 2 / 1 / 3 / 2}

  > a:nth-child(2) {
    width: 85px;
    grid-area: 1 / 2 / 13 / 3;

    > img {width: 100%}
  }

  > span:nth-child(3) {grid-area: 2 / 3 / 3 / 4}
  > span:nth-child(4) {grid-area: 4 / 3 / 5 / 4}
  > span:nth-child(5) {grid-area: 6 / 3 / 7 / 4}
  > span:nth-child(6) {grid-area: 2 / 4 / 3 / 5}
  > button:nth-child(7) {grid-area: 2 / 6 / 5 / 7}

  grid-template-columns:
    minmax(25px, 4.8%) minmax(90px, 12%) minmax(150px, 23%)
    minmax(40px, 10.2%) minmax(30px, 31.6%) minmax(119px, 1fr);

  grid-template-rows: repeat(12, 8.3%);
  justify-items: start;
  align-items: center;
  background: transparent;
  
  > span {
    font-family: var(--font-second);
    font-size: 10px;
    line-height: 14px;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--color-text-main);
  }

  @media ${smallScreen} {
    width: 300px;
    height: 210px;
    grid-template-columns: 10% 40% 50%;

    > button:nth-child(1) {
      grid-area: 2 / 1 / 3 / 2;
      justify-self: center;
    }

    > img:nth-child(2) {
      grid-area: 2 / 2 / 9 / 3;
      justify-self: center;
    }

    > span:nth-child(3) {grid-area: 2 / 3 / 3 / 4}
    > span:nth-child(4) {grid-area: 3 / 3 / 4 / 4}
    > span:nth-child(5) {grid-area: 4 / 3 / 5 / 4}
    > span:nth-child(6) {grid-area: 5 / 3 / 7 / 4}

    > button:nth-child(7) {
      grid-area: 11 / 2 / 13 / 4;
      justify-self: center;
    }
  }
`;

const X = styled.button`
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  background: transparent;
  border: none;
  transform: rotate(45deg);
  cursor: pointer;
`;




const WishList = (): JSX.Element => {
  const screen = useMediaQuery();
  const wishList = useAppSelector(state => state.wishList);
  const cart = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();


  return(
    <WrapperOuter>
      <WrapperInner empty={wishList.length === 0}>
        <BreadCrumbs
          link={
            <>
              <HashLink to='/#top'>Home</HashLink>
              <span>/</span>
              <span>Wish List</span>
            </>
          }
          marginBottom='20px'
        />

        {wishList.length > 0 ?
          <>
            <CartWrapper>
              <HeaderWrapper>
                <h2>WISH LIST</h2>
              </HeaderWrapper>

              {!screen.small &&
                <TitleWrapper>
                  <span>PRODUCT</span>
                  <span>PRICE</span>
                </TitleWrapper>
              }

              {wishList.map((product: IProduct): JSX.Element =>
                <ProductWrapper key={product.id}>
                  <Product>
                    <X
                      type='button'
                      onClick={(): void => {dispatch(wishListRemove(product))}}
                    >
                      +
                    </X>

                    <HashLink to={`/catalog/product${product.id}`}>
                      <img src={productImages[`product${product.id}`]} alt={product.name} />
                    </HashLink>

                    <span>{product.name}</span>
                    <span>color: {product.color}</span>
                    <span>size: {product.size}</span>
                    <span>${product.price}</span>
                    
                    <Button
                      type='button'
                      width='140px'
                      icon={cartSymbol}
                      onClick={(): void => {
                        !cart.some(cartProduct => cartProduct.id === product.id) ?
                          dispatch(cartAdd(product)) : dispatch(cartRemove(product));
                      }}
                    >
                      {!cart.some(cartProduct => cartProduct.id === product.id) ? 
                        'ADD TO CART' : 'PRODUCT IN CART'
                      }
                    </Button>
                  </Product>
                </ProductWrapper>
              )}
            </CartWrapper>
          </>
        :
          <>
            <h2>WISH LIST IS EMPTY</h2>
            <Button
              as={HashLink}
              to='/catalog#top'
              variant='outline'
              width='290px'
              smallWidth='45%'
              maxWidth='290px'
            >
              CONTINUE SHOPPING
            </Button>
          </>
        }
      </WrapperInner>
    </WrapperOuter>
  );
}




export default WishList;
