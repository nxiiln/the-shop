import React, {useState} from 'react';
import styled from 'styled-components/macro';
import cartProductA from '../images/cartProductA.png';
import cartProductB from '../images/cartProductB.png';




const WrapperOuter = styled.section`
  width: 100vw;
  margin: 0 0 75px 0;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 67%;
  display: grid;
  grid-template-columns: minmax(328px, 1fr) 23px 208px minmax(295px, 1fr);
  grid-template-rows: 10px 30px 1fr 135px 106px 30px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  grid-area: 1 / 1 / 2 / 5;
  background: #aaa;
`;


//Bread Crumbs-----------------------------------
const BreadCrumbsWrapper = styled.div`
  width: 100%;
  grid-area: 2 / 1 / 3 / 5;
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
//-----------------------------------------------


//Cart-------------------------------------------
const CartWrapper = styled.div`
  grid-area: 3 / 1 / 4 / 5;
  margin: 0 0 25px 0;
  border: 1px solid #e4e2e1;
  div:last-child {
    margin-bottom: 0;
  }
`;

const HeaderWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e4e2e1;
  h2 {
    font-family: 'Playfair Display SC';
    font-size: 24px;
    line-height: 1.2;
    font-weight: 400;
    color: #000;
  }
`;

const TitleWrapper = styled.div`
  width: 92%;
  height: 50px;
  margin-left: 4%;
  display: grid;
  grid-template-columns:
    minmax(82px, 12.5%) minmax(145px, 20%) minmax(15px, 13%) minmax(40px, 19%)
    minmax(50px, 7%) minmax(12px, 5%) minmax(40px, 19%) 55px;
  justify-items: start;
  align-items: center;
  span {
    font-family: Nunito;
    font-size: 12px;
    line-height: 1.2;
    font-weight: 300;
    color: #000;
  }
  span:nth-child(2) {
    grid-column-start: 4;
  }
  span:nth-child(4) {
    grid-column-start: 8;
    justify-self: end;
  }
`;

const ProductWrapper = styled.div`
  width: 100%;
  margin: 0 0 15px 0;
  height: 134px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7f7f7;
`;

const Product = styled.div`
  width: 92%;
  height: 120px;
  display: grid;
  grid-template-areas:
    'img ... . ... ... pls ... ...'
    'img nam x prc qnt ... upd amt'
    'img ... . ... ... mns ... ...'
    'img clr . ... ... ... ... ...'
    'img ... . ... ... ... ... ...'
    'img siz . ... ... ... ... ...'
    'img ... . ... ... ... ... ...'
    'img ... . ... ... ... ... ...'
    'img ... . ... ... ... ... ...'
    'img ... . ... ... ... ... ...'
    'img edi . ... ... ... ... ...'
    'img ... . ... ... ... ... ...';

  img {grid-area: img;}
  span:nth-child(2) {grid-area: nam;}
  span:nth-child(3) {grid-area: clr;}
  span:nth-child(4) {grid-area: siz;}
  button:nth-child(5) {grid-area: edi;}
  button:nth-child(6) {grid-area: x;}
  span:nth-child(7) {grid-area: prc;}
  div {grid-area: qnt;}
  button:nth-child(9) {grid-area: pls;}
  button:nth-child(10) {grid-area: mns;}
  button:nth-child(11) {grid-area: upd;}
  span:nth-child(12) {
    grid-area: amt;
    justify-self: end;
  }

  grid-template-columns:
    minmax(82px, 12.5%) minmax(145px, 20%) minmax(15px, 13%) minmax(40px, 19%)
    minmax(50px, 7%) minmax(12px, 5%) minmax(40px, 19%) 55px;

  grid-template-rows: repeat(12, 10px);
  justify-items: start;
  align-items: center;
  background: transparent;
  span {
    font-family: Nunito;
    font-size: 10px;
    line-height: 14px;
    font-weight: 400;
    text-transform: uppercase;
    color: #000;
  }
`;

const ButtonUnderline = styled.button`
  margin-left: -5px;
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

const Quantity = styled.div`
  width: 50px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Nunito;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 400;
  color: #000;
  background: #fff;
  border: 1px solid #e4e2e1;
}
`;

const PlusMinus = styled.button`
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Nunito;
  color: #aaa;
  background: transparent;
  border: none;
  cursor: pointer;
  :hover {
    color: #000;
  }
`;
//-----------------------------------------------


//Estimate Delivery------------------------------
const EstimateDeliveryWrapper = styled.div`
  width: 328px;
  height: 196px;
  grid-area: 4 / 1 / 5 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e4e2e1;
`;

const EstimateDelivery = styled.div`
  width: 285px;
  height: 160px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  span:nth-child(1) {
    font-family: Nunito;
    font-size: 12px;
    line-height: 1.2;
    font-weight: 300;
    text-transform: uppercase;
    color: #000;
  }
  span:nth-child(2) {
    font-family: Arial;
    font-size: 11px;
    line-height: 1.2;
    font-weight: 400;
    color: #aaa;
  }
`;

const Select = styled.select`
  width: 285px;
  height: 29px;
  padding-left: 12px;
  font-family: Nunito;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  color: #000;
  background: #f7f7f7;
  border: 1px solid #e4e2e1;
  border-radius: 15px;
`;

const Postcode = styled.input`
  width: 142px;
  height: 30px;
  font-family: Nunito;
  font-size: 12px;
  line-height: 1.2;
  font-weight: 300;
  color: #000;
  border: 1px solid #e4e2e1;
  outline: none;
  ::placeholder {
    padding-left: 12px;
    font-family: Arial;
    font-size: 11px;
    line-height: 1.2;
    font-weight: 400;
    color: #aaa;
  }
`;

const GetAQuote = styled.button`
  width: 119px;
  height: 30px;
  font-family: Nunito;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  color: #fff;
  background: #000;
  border: none;
  cursor: pointer;
`;
//-----------------------------------------------


const Voucher = styled.div`
  width: 231px;
  height: 113px;
  grid-area: 4 / 2 / 5 / 3;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-evenly;
  font-family: Nunito;
  font-size: 12px;
  line-height: 1.2;
  font-weight: 300;
  color: #000;
  border: 1px solid #e4e2e1;
  input {
    width: 182px;
    height: 30px;
    border: 1px solid #e4e2e1;
    outline: none;
  }
`;

const NeedHelp = styled.div`
  width: 185px;
  height: 50px;
  grid-area: 5 / 3 / 6 / 4;
  font-family: Arial;
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  color: #aaa;
  span {
    color: #aea012;
  }
  p {
    margin: 0;
    line-height: 1.8;
  }
`;

const Total = styled.div`
  width: 295px;
  height: 180px;
  grid-area: 4 / 4 / 6 / 5;
  justify-self: end;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 42px) 27px 13px 13px;
  span {
    font-family: Nunito;
    font-size: 12px;
    line-height: 1.2;
    font-weight: 300;
    text-transform: uppercase;
    color: #000;
  }
  span:nth-child(even) {
    justify-self: end;
  }
  span:nth-child(n+8) {
    font-family: Nunito;
    font-size: 13px;
    font-weight: 700;
  }
  span:nth-child(8) {
    grid-area: 5 / 1 / 6 / 2;
    justify-self: start;
  }
  span:nth-child(9) {
    grid-area: 6 / 1 / 7 / 2;
  }
  span:nth-child(10) {
    grid-area: 5 / 2 / 7 / 3;
    align-self: center;
    font-size: 18px;
  }
`;

const LineTotal = styled.div`
  width: 100%;
  height: 1px;
  grid-area: 4 / 1 / 5 / 3;
  background: #aaa;
`;

const Button = styled.button`
  width: 291px;
  height: 30px;
  font-family: Nunito;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 400;
  cursor: pointer;
`;

const ContinueShopping = styled(Button)`
  grid-area: 6 / 1 / 7 / 2;
  color: #000;
  background: #fff;
  border: 1px solid #e4e2e1;
`;

const Checkout = styled(Button)`
  grid-area: 6 / 4 / 7 / 5;
  justify-self: end;
  color: #fff;
  background: #000;
  border: none;
`;




const Cart = (): JSX.Element => {
  interface Product {
    id: number;
    status: boolean;
    image: string;
    name: string;
    color: string;
    size: number;
    price: number;
    quantity: number;
    amount(): number;
  }

  const productList: Product[] = [
    {
      id: 1,
      status: true,
      image: cartProductA,
      name: 'detailed swing dress',
      color: 'yellow',
      size: 12,
      price: 275,
      quantity: 1,
      amount() {return this.price * this.quantity}
    },
    {
      id: 2,
      status: true,
      image: cartProductB,
      name: 'maxararzy frilled dress',
      color: 'blue',
      size: 14,
      price: 325,
      quantity: 2,
      amount() {return this.price * this.quantity}
    }
  ];


  interface Region {
    country: string;
    cities: string[];
  }

  const regions: Region[] = [
    {
      country: 'Russia',
      cities: ['Moscow', 'Saint Petersburg', 'Voronezh']
    },
    {
      country: 'UK',
      cities: ['Birmingham', 'London', 'Manchester']
    },
    {
      country: 'United States',
      cities: ['Los Angeles', 'New York', 'San Fransisco']
    }
  ];


  const [products, setProducts] = useState<Product[]>(productList);
  const [country, setCountry] = useState<string>('default');

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


        <CartWrapper>
          <HeaderWrapper>
            <h2>CART</h2>
          </HeaderWrapper>
          <TitleWrapper>
            <span>PRODUCT</span>
            <span>PRICE</span>
            <span>QUANTITY</span>
            <span>AMOUNT</span>
          </TitleWrapper>

          {products.map((product: Product): false | JSX.Element => {
            return(product.status &&
              <ProductWrapper key={product.id}>
                <Product>
                  <img src={product.image} alt={product.name} />
                  <span>{product.name}</span>
                  <span>color: {product.color}</span>
                  <span>size: {product.size}</span>
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
                  <Quantity>
                    <span>{product.quantity}</span>
                  </Quantity>
                  <PlusMinus
                    type='button'
                    onClick={(): void => {
                      const newProducts: Product[] = [...products];
                      const currIndex: number = products.indexOf(product);
                      newProducts[currIndex].quantity += 1;
                      setProducts(newProducts);
                    }}
                  >
                    +
                  </PlusMinus>
                  <PlusMinus
                    type='button'
                    onClick={(): void => {
                      const newProducts: Product[] = [...products];
                      const currIndex: number = products.indexOf(product);
                      if (newProducts[currIndex].quantity > 1) {
                        newProducts[currIndex].quantity -= 1;
                      } 
                      setProducts(newProducts);
                    }}
                  >
                    -
                  </PlusMinus>
                  <ButtonUnderline type='button'>Update</ButtonUnderline>
                  <span>${product.amount()}</span>
                </Product>
              </ProductWrapper>
            );
          })}
        </CartWrapper>


        <EstimateDeliveryWrapper>
          <EstimateDelivery>
            <span>
              ESTIMATE DELIVERY
            </span>
            <span>Enter your destination to get a delivery estimate</span>
            <Select
              defaultValue='default'
              onChange={(e): void => setCountry(e.target.value)}
            >
              <option value='default' disabled>select country</option>
              {regions.map((region: Region): JSX.Element => {
                return(
                 <option key={region.country} value={region.country}>
                   {region.country}
                 </option>
                )
              })}
            </Select>
            <Select defaultValue='default'>
              <option value='default' disabled>select region, state or province</option>
              {country !== 'default' &&
                regions
                  .filter((region: Region): boolean => region.country === country)[0].cities
                  .map((city: string): JSX.Element => {
                    return <option key={city} value={city}>{city}</option>
                  })
              }
            </Select>
            <Postcode type='text' placeholder='Postcode/Zip'/>
            <GetAQuote type='button'>GET A QUOTE</GetAQuote>
          </EstimateDelivery>
        </EstimateDeliveryWrapper>


        <Voucher>
          <span>REDEEM DISCOUNT VOUCHER</span>
          <input type='text' />
        </Voucher>


        <NeedHelp>
          <span>Need Help?</span>
          <p>
            Call our customer care team on<br />
            (08) 082340481 / Customer Service
          </p>
        </NeedHelp>


        <Total>
          <span>subtotal</span>
          <span>${subtotal}</span>

          <span>delivery costs</span>
          <span>${subtotal && 35}</span>

          <span>gift voucher</span>
          <span>$5</span>

          <LineTotal />

          <span>total</span>
          <span>including tax</span>
          <span>${subtotal > 0 ? subtotal + 35 - 5 : 0}</span>
        </Total>


        <ContinueShopping type='button'>CONTINUE SHOPPING</ContinueShopping>
        <Checkout type='button'>CHECKOUT</Checkout>
      </WrapperInner>
    </WrapperOuter>
  );
}




export default Cart;
