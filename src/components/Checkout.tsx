import React, {useState} from 'react';
import styled from 'styled-components';
import alsoLove1 from '../images/alsoLove1.png';
import alsoLove2 from '../images/alsoLove2.png';
import alsoLove3 from '../images/alsoLove3.png';
import cartProductA from '../images/cartProductA.png';
import cartProductB from '../images/cartProductB.png';


const WrapperOuter = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 960px;
  height: 1740px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: start;
  border: 1px solid orange;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 10px;
  background: #aaa;
`;

const BreadCrumbsWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
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
  width: 68px;
  height: 10px;
`;

const BreadCrumbsRight = styled(BreadCrumbs)`
  width: 130px;
  height: 10px;
`;


//Also Love--------------------------------------
const AlsoLove = styled.div`
  width: 960px;
  height: 296px;
  margin-bottom: 30px;
  position: relative;
  background-color: #f7f7f7;
  border: 1px solid #e4e2e1;
  > span:first-child {
    position: relative;
    top: 25px;
    left: 22px;
    font-family: 'Playfair Display SC';
    font-size: 21px;
    font-weight: 400;
    color: #000;
  }
`;

const AlsoLoveClose = styled.button`
  width: 29px;
  height: 29px;
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  border: 1px solid #e4e2e1;
  cursor: pointer;
  > span:first-child  {
    display: inline-block;
    position: absolute;
    top: -5px;
    left: 7px;
    font-family: Nunito;
    font-size: 25px;
    color: #000;
    transform: rotate(45deg);
  }
`;

const ProductAlsoWrapper = styled.div`
  width: 890px;
  height: 190px;
  position: absolute;
  top: 75px;
  left: 25px;
  display: flex;
  justify-content: space-between;
`;

const ProductAlso = styled.div`
  width: 260px;
  height: 190px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  > span:nth-child(2) {
    width: 115px;
    margin: 0 0 20px 10px;
    font-family: 'Playfair Display SC';
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    text-transform: uppercase;
    color: #000;
  }
  > span:nth-child(3) {
    margin: 0 0 25px 10px;
    font-family: Nunito;
    font-size: 12px;
    line-height: 1.2;
    font-weight: 300;
    color: #000;
  }
`;

const QuickView = styled.button`
  width: 107px;
  height: 30px;
  margin-left: 10px;
  font-family: Nunito;
  font-size: 10px;
  color: #000;
  background: #fff;
  border: 1px solid #e4e2e1;
  cursor: pointer;
`;
//-----------------------------------------------


//Step-------------------------------------------
const Step1 = styled.div`
  width: 675px;
  height: 345px;
  border: 1px solid #e4e2e1;
`;
//-----------------------------------------------


//Cart-------------------------------------------
const Cart = styled.div`
  width: 275px;
  height: 478px;
  border: 1px solid #e4e2e1;
  > span {
    width: 100%;
    height: 50px;
    padding: 7px 0 0 17px;
    display: inline-block;
    font-family: 'Playfair Display SC';
    font-size: 24px;
    font-weight: 400;
    color: #000;
  }
`;

const ProductWrapper = styled.div`
  width: 274px;
  height: 135px;
  margin-bottom: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
`;

const Product = styled.div`
  width: 240px;
  height: 110px;
  display: grid;
  grid-template-columns: 92px 99px 35px 1fr;
  grid-template-rows: repeat(12, 9.167px);
  span {
    font-family: Nunito;
    font-size: 10px;
    line-height: 12px;
    font-weight: 400;
    text-transform: uppercase;
    color: #000;
  }
  img:nth-child(1) {
    height: 100%;
    grid-area: 1 / 1 / 13 / 2;
  }
  span:nth-child(2) {grid-area: 1 / 2 / 3 / 3;}
  span:nth-child(3) {grid-area: 4 / 2 / 5 / 3;}
  span:nth-child(4) {grid-area: 6 / 2 / 7 / 3;}
  span:nth-child(5) {grid-area: 8 / 2 / 9 / 3;}
  button:nth-child(6) {grid-area: 11 / 2 / 12 / 3;}
  button:nth-child(7) {grid-area: 1 / 4 / 2 / 5;}
  span:nth-child(8) {
    grid-area: 11 / 3 / 12 / 4;
    font-size: 12px;
  }
`;

const ButtonUnderline = styled.button`
  width: 60px;
  height: 10px;
  margin: 0px 0 0 -10px;
  font-family: Arial;
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  text-decoration: underline;
  color: #000;
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
  span {
    font-family: Nunito;
    font-size: 12px;
    line-height: 1.2;
    font-weight: 300;
    text-transform: uppercase;
    color: #000;
  }
  span:nth-child(even) {justify-self: end;}
  span:nth-child(3) {grid-area: 3 / 1 / 4 / 2;}
  span:nth-child(4) {grid-area: 3 / 2 / 4 / 3;}
  span:nth-child(5) {grid-area: 5 / 1 / 6 / 2;}
  span:nth-child(6) {grid-area: 5 / 2 / 6 / 3;}
  span:nth-child(7) {
    grid-area: 9 / 1 / 11 / 2;
    align-self: end;
    font-size: 13px;
    font-weight: 700;
  }
  span:nth-child(8) {
    grid-area: 9 / 2 / 11 / 3;
    align-self: end;
    font-size: 13px;
    font-weight: 700;
  }
`;
//-----------------------------------------------


const Checkout = (): JSX.Element => {

  interface ProductAlso {
    id: number;
    image: string;
    name: string;
    price: number;
  }

  const productsAlso: ProductAlso[] = [
    {
      id: 1,
      image: alsoLove1,
      name: 'detailed swing dress',
      price: 1875
    },
    {
      id: 2,
      image: alsoLove2,
      name: 'detailed swing dress',
      price: 850
    },
    {
      id: 3,
      image: alsoLove3,
      name: 'detailed swing dress',
      price: 875
    }
  ];


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

  const productsList: Product[] = [
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


  const [alsoLove, setAlsoLove] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>(productsList);

  const subtotal: number = products
    .map((product: Product): number => +product.status && product.amount())
    .reduce((prev: number, curr: number): number => prev + curr);


  return(
    <WrapperOuter>
      <WrapperInner>
        <Line />
        <BreadCrumbsWrapper>
          <BreadCrumbsLeft type='button'>
            Home / Cart
          </BreadCrumbsLeft>
          <BreadCrumbsRight type='button'>
            {'<'} Return to Previous Page
          </BreadCrumbsRight>
        </BreadCrumbsWrapper>

        {alsoLove && 
          <AlsoLove>
            <span>YOU WILL ALSO LOVE</span>
            <AlsoLoveClose
              type='button'
              onClick={(): void => setAlsoLove(false)}
            >
              <span>+</span>
            </AlsoLoveClose>
            <ProductAlsoWrapper>
              {productsAlso.map((product: ProductAlso): JSX.Element => {
                return(
                  <ProductAlso key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <span>{product.name}</span>
                    <span>
                      ${product.price.toString().replace(/(.+)(...)$/, '$1,$2')}
                    </span>
                    <QuickView>QUICKVIEW</QuickView>
                  </ProductAlso>
                )
              })}
            </ProductAlsoWrapper>
          </AlsoLove>
        }

        <Step1>
        </Step1>

        <Cart>
          <span>CART</span>
          {products.map((product: Product): false | JSX.Element => {
            return(product.status &&
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
            )
          })}
          <TotalWrapper>
            <Total>
              <span>subtotal</span>
              <span>${subtotal}</span>
              <span>delivery costs</span>
              <span>${subtotal && 35}</span>
              <span>gift voucher</span>
              <span>${subtotal && 5}</span>
              <span>total inc tax</span>
              <span>${subtotal && subtotal + 35 + 5}</span>
            </Total>
          </TotalWrapper>
        </Cart>
      </WrapperInner>
    </WrapperOuter>
  )
}


export default Checkout;
