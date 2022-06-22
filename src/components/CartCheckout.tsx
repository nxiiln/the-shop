import {useState} from 'react';
import styled from 'styled-components/macro';
import cartProductA from '../images/cartProductA.png';
import cartProductB from '../images/cartProductB.png';
import {mediumScreen, smallScreen} from '../mediaQueries';




const Cart = styled.article`
  width: 275px;
  height: min-content;
  border: 1px solid var(--color-border);

  > span {
    width: 100%;
    height: 50px;
    padding: 7px 0 0 17px;
    display: inline-block;
    font-family: var(--font-main);
    font-size: 24px;
    font-weight: 400;
    color: var(--color-text-main);
  }

  @media ${mediumScreen}, ${smallScreen} {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const ProductWrapper = styled.div`
  width: 100%;
  height: 135px;
  margin-bottom: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-background-highlight);

  @media ${mediumScreen}, ${smallScreen} {padding: 0 2% 0}
`;

const Product = styled.div`
  width: 240px;
  height: 110px;
  display: grid;
  grid-template-columns: 92px 99px 35px 1fr;
  grid-template-rows: repeat(12, 9px);
  
  > span {
    font-family: var(--font-second);
    font-size: 10px;
    line-height: 12px;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--color-text-main);
  }

  > img:nth-child(1) {
    height: 100%;
    grid-area: 1 / 1 / 13 / 2;
  }

  > span:nth-child(2) {grid-area: 1 / 2 / 3 / 3}
  > span:nth-child(3) {grid-area: 4 / 2 / 5 / 3}
  > span:nth-child(4) {grid-area: 6 / 2 / 7 / 3}
  > span:nth-child(5) {grid-area: 8 / 2 / 9 / 3}
  > button:nth-child(6) {grid-area: 11 / 2 / 12 / 3}
  > button:nth-child(7) {grid-area: 1 / 4 / 2 / 5}

  > span:nth-child(8) {
    grid-area: 11 / 3 / 12 / 4;
    font-size: 12px;
  }

  @media ${mediumScreen}, ${smallScreen} {
    width: 100%;
    grid-template-columns: 92px max-content 1fr;
    
    > button:nth-child(7) {
      grid-area: 1 / 3 / 2 / 4;
      justify-self: end;
    }

    > span:nth-child(8) {justify-self: end}
  }
`;

const ButtonUnderline = styled.button`
  width: 60px;
  height: 10px;
  margin: 0px 0 0 -10px;
  font-family: var(--font-regular);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  text-decoration: underline;
  color: var(--color-text-main);
  background: transparent;
  border: none;
  cursor: pointer;
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

const TotalWrapper = styled.div`
  width: 100%;
  height: 135px;
  margin-top: -6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Total = styled.div`
  width: 245px;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(10, 10px);

  > span {
    font-family: var(--font-second);
    font-size: 12px;
    line-height: 1.2;
    font-weight: 300;
    text-transform: uppercase;
    color: var(--color-text-main);
  }

  > span:nth-child(even) {justify-self: end;}
  > span:nth-child(3) {grid-area: 3 / 1 / 4 / 2}
  > span:nth-child(4) {grid-area: 3 / 2 / 4 / 3}
  > span:nth-child(5) {grid-area: 5 / 1 / 6 / 2}
  > span:nth-child(6) {grid-area: 5 / 2 / 6 / 3}

  > span:nth-child(7) {
    grid-area: 9 / 1 / 11 / 2;
    align-self: end;
    font-size: 13px;
    font-weight: 700;
  }

  > span:nth-child(8) {
    grid-area: 9 / 2 / 11 / 3;
    align-self: end;
    font-size: 13px;
    font-weight: 700;
  }

  @media ${mediumScreen}, ${smallScreen} {
    width: 100%;
    padding: 0 2% 0;
  }
`;




interface Product {
  id: number;
  status: boolean;
  image: string;
  name: string;
  color: string;
  size: number;
  qty: number;
  price: number;
  amount(): number;
}

const initialProducts: Product[] = [
  {
    id: 1,
    status: true,
    image: cartProductA,
    name: 'detailed swing dress',
    color: 'yellow',
    size: 12,
    qty: 1,
    price: 275,
    amount() {return this.price * this.qty}
  },
  {
    id: 2,
    status: true,
    image: cartProductB,
    name: 'detailed swing dress',
    color: 'blue',
    size: 14,
    qty: 1,
    price: 325,
    amount() {return this.price * this.qty}
  }
]




const CartCheckout = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  
  const subtotal: number = products
    .map((product: Product): number => +product.status && product.amount())
    .reduce((prev: number, curr: number): number => prev + curr);


  return(
    <Cart>
      <span>CART</span>
      {products.map((product: Product): false | JSX.Element =>
        product.status &&
          <ProductWrapper key={product.id}>
            <Product>
              <img src={product.image} alt={product.name} />
              <span>{product.name}</span>
              <span>color: {product.color}</span>
              <span>size: {product.size}</span>
              <span>qty: {product.qty}</span>
              <ButtonUnderline type='button'>Edit Item</ButtonUnderline>
              <X
                type='button'
                onClick={(): void => {
                  const newProducts: Product[] = [...products];
                  const currIndex: number = products.indexOf(product);
                  newProducts[currIndex].status = false;
                  setProducts(newProducts);
                }}
              >
                +
              </X>
              <span>${product.price}</span>
            </Product>
          </ProductWrapper>
      )}

      <TotalWrapper>
        <Total>
          <span>subtotal</span>
          <span>${subtotal}</span>
          <span>delivery costs</span>
          <span>${subtotal && 35}</span>
          <span>gift voucher</span>
          <span>${subtotal && 5}</span>
          <span>total inc tax</span>
          <span>${subtotal && subtotal + 35 - 5}</span>
        </Total>
      </TotalWrapper>
    </Cart>
  )
}




export default CartCheckout;
