import {useState} from 'react';
import styled from 'styled-components/macro';
import {HashLink} from 'react-router-hash-link';
import {useAppSelector, useAppDispatch} from '../redux-hooks';
import {add} from '../slices/cart';
import product1 from '../images/product1.png';
import product2 from '../images/product2.png';
import product3 from '../images/product3.png';
import product4 from '../images/product4.png';
import product5 from '../images/product5.png';
import product6 from '../images/product6.png';
import product7 from '../images/product7.png';
import product8 from '../images/product8.png';
import product9 from '../images/product9.png';
import product10 from '../images/mostPopularA.png';
import cartSymbol from '../images/cartSymbol.png';
import wishList from '../images/wishList.png';
import compare from '../images/compare.png';




const Products = styled.div`
  width: 100%;
  max-width: 725px;
  margin: 22px 0 80px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Product = styled.div`
  width: 230px;
  height: 360px;
  margin-bottom: 75px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-main);
  text-transform: uppercase;

  &:hover {cursor: pointer}
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

const ProductOpen = styled(HashLink)`
  width: 230px;
  height: 425px;
  padding-bottom: 10px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-decoration: none;
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

  &:hover {opacity: 0.8}

  > div {
    width: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-second);
    font-size: 10px;
    line-height: 1.2;
    font-weight: 300;
    color: var(--color-text-second);
  }
`;

const WishList = styled.button`
  width: 75px;
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
`;

const Compare = styled.button`
  width: 80px;
  height: 15px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: end;
  font-family: var(--font-second);
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-text-main);
  background: none;
  border: none;
  cursor: pointer;

  &:hover {text-decoration: underline}
`;




interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  triangle?: string;
}

const products: Product[] = [
  {
    id: 1,
    image: product1,
    name: 'product 1',
    price: 1875,
    // triangle: 'new',
  },
  {
    id: 2,
    image: product2,
    name: 'product 2',
    price: 1875,
    // triangle: 'sale',
  },
  {
    id: 3,
    image: product3,
    name: 'product 3',
    price: 1875,
  },
  {
    id: 4,
    image: product4,
    name: 'product 4',
    price: 1875,
  },
  {
    id: 5,
    image: product5,
    name: 'product 5',
    price: 1875,
  },
  {
    id: 6,
    image: product6,
    name: 'product 6',
    price: 1875,
    // triangle: 'sale',
  },
  {
    id: 7,
    image: product7,
    name: 'product 7',
    price: 1875,
  },
  {
    id: 8,
    image: product8,
    name: 'product 8',
    price: 1875,
  },
  {
    id: 9,
    image: product9,
    name: 'product 9',
    price: 1875,
  },
  {
    id: 10,
    image: product10,
    name: 'product 10',
    price: 1875,
  },
];




const CatalogProducts = (): JSX.Element => {
  const [productOpen, setProductOpen] = useState<number>(0);
  const cart = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  type Click = React.MouseEvent<HTMLButtonElement, MouseEvent>;
  const preventDefault = (e: Click): void => e.preventDefault();
  

  return(
    <Products>
      {products.map((product: Product): JSX.Element =>
        <Product
          key={product.id}
          onClick={(): void => setProductOpen(product.id)}
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

          {productOpen === product.id &&
            <ProductOpen to={`product${product.id}#top`}>
              <QuickShop onClick={preventDefault}>QUICK SHOP</QuickShop>

              <AddToCart
                type='button'
                onClick={(e: Click): void => {
                  e.preventDefault();
                  const id = product.id;
                  const find = (product: Product): boolean => product.id === id;
                  if (cart.findIndex(find) === -1) dispatch(add(products[product.id - 1]));
                }}
              >
                <div>
                  <img src={cartSymbol} alt='cart symbol' />
                  ADD TO CART
                </div>
              </AddToCart>

              <WishList type='button' onClick={preventDefault}>
                <img src={wishList} alt='wishlist' />
                WISHLIST
              </WishList>

              <Compare type='button' onClick={preventDefault}>
                <img src={compare} alt='compare' />
                COMPARE
              </Compare>
            </ProductOpen>
          }
        </Product>
      )}
    </Products>
  );
}




export default CatalogProducts;