import styled from 'styled-components/macro';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';
import {HashLink} from 'react-router-hash-link';
import {useAppSelector, useAppDispatch} from '../redux-hooks';
import {cartRemove, quantityIncrement, quantityDecrement} from '../slices/cart';
import BreadCrumbs from './BreadCrumbs';
import {Input} from './Form';
import {IProduct} from '../types/IProduct';
import {productImages} from '../images/productImages';
import Button from './Button';




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
    align-items: center;
    
    > article {align-self: stretch}

    > h2 {
      margin: 0 0 20px;
      align-self: center;
      font-family: var(--font-main);
      font-size: 24px;
      line-height: 1.2;
      font-weight: 400;
      color: var(--color-text-main);
    }

    > a {align-self: center}`

    :
    
    'display: grid;'
  }

  grid-template-columns: minmax(328px, 1fr) 23px 208px minmax(295px, 1fr);
  grid-template-rows: 10px 30px 1fr 135px 106px 30px;

  @media ${mediumScreen} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 10px 30px 1fr 135px 70px 60px 55px;
  }

  @media ${smallScreen} {
    display: flex;
    flex-direction: column;
  }
`;


// Cart
const CartWrapper = styled.div`
  grid-area: 3 / 1 / 4 / 5;
  margin: 0 0 25px 0;
  border: 1px solid var(--color-border);
  
  > div:last-child {margin-bottom: 0}
`;

const HeaderWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  
  > h2 {
    font-family: var(--font-main);
    font-size: 24px;
    line-height: 1.2;
    font-weight: 400;
    color: var(--color-text-main);
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
  
  > span {
    font-family: var(--font-second);
    font-size: 12px;
    line-height: 1.2;
    font-weight: 300;
    color: var(--color-text-main);
  }
  
  > span:nth-child(2) {grid-column-start: 4}
  
  > span:nth-child(4) {
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
  background: var(--color-background-highlight);
`;

const Product = styled.div`
  width: 92%;
  height: 120px;
  display: grid;
  grid-template-areas:
    'img ... . ... qnt pls ... ...'
    'img nam x prc qnt ... ... amt'
    'img ... . ... qnt mns ... ...'
    'img clr . ... ... ... ... ...'
    'img ... . ... ... ... ... ...'
    'img siz . ... ... ... ... ...'
    'img ... . ... ... ... ... ...'
    'img ... . ... ... ... ... ...'
    'img ... . ... ... ... ... ...'
    'img ... . ... ... ... ... ...'
    'img ... . ... ... ... ... ...'
    'img ... . ... ... ... ... ...';

  grid-template-columns:
    minmax(90px, 12.5%) minmax(145px, 20%) minmax(15px, 13%) minmax(40px, 19%)
    minmax(50px, 7%) minmax(12px, 5%) minmax(40px, 19%) 55px;

  grid-template-rows: repeat(12, 10px);
  justify-items: start;
  align-items: center;
  background: transparent;

  > a {
    width: 85px;
    grid-area: img;
    > img {width: 100%}
  }
  
  > span {
    font-family: var(--font-second);
    font-size: 10px;
    line-height: 14px;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--color-text-main);
  }

  @media ${smallScreen} {
    width: auto;
    grid-template-areas:
      'img ... ... ... .'
      'img nam nam nam x'
      'img ... ... ... .'
      'img clr clr ... .'
      'img ... ... ... .'
      'img siz ... ... .'
      'img qnt pls ... .'
      'img qnt pls amt .'
      'img qnt mns amt .'
      'img qnt mns ... .'
      'img ... ... ... .'
      'img ... ... ... .';
    
    grid-template-columns: 90px 70px 50px 30px 15px;

    > img {
      margin-right: 8px;
      justify-self: end;
    }
  }
`;

const X = styled.button<{gridArea: string}>`
  width: 15px;
  height: 15px;
  grid-area: ${props => props.gridArea};
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
  grid-area: qnt;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: var(--font-second);
  font-size: 10px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);
  background: var(--color-background-main);
  border: 1px solid var(--color-border);
`;

const PlusMinus = styled.button<{gridArea: string}>`
  width: 12px;
  height: 12px;
  grid-area: ${props => props.gridArea};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-second);
  color: var(--color-text-regular);
  background: transparent;
  border: none;
  cursor: pointer;
  
  &:hover {color: var(--color-text-main);}
`;

const Text = styled.span<{gridArea: string}>`
  ${props => `
    grid-area: ${props.gridArea};
    ${props.gridArea === 'amt' && 'justify-self: end;'}
  `};

  @media ${smallScreen} {justify-self: start}
`;


// Estimate Delivery
const EstimateDeliveryWrapper = styled.div`
  width: 328px;
  height: 196px;
  grid-area: 4 / 1 / 5 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-border);

  @media ${smallScreen} {
    width: 100%;
    margin: 0 0 25px;
    align-self: center;
  }
`;

const EstimateDelivery = styled.div`
  width: 285px;
  height: 160px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;

  @media ${smallScreen} {
    height: 90%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  
  > span:nth-child(1) {
    font-family: var(--font-second);
    font-size: 12px;
    line-height: 1.2;
    font-weight: 300;
    text-transform: uppercase;
    color: var(--color-text-main);
  }
  
  > span:nth-child(2) {
    font-family: var(--font-regular);
    font-size: 11px;
    line-height: 1.2;
    font-weight: 400;
    color: var(--color-text-regular);
  }

  > div {
    width: 280px;
    display: flex;
    justify-content: space-between;
  }
`;

// Voucher & Total
const Voucher = styled.div`
  width: 231px;
  height: 113px;
  padding: 0 10% 0;
  grid-area: 4 / 2 / 5 / 3;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-evenly;
  font-family: var(--font-second);
  font-size: 12px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-text-main);
  border: 1px solid var(--color-border);
  
  @media ${mediumScreen} {
    width: 328px;
    grid-area: 6 / 1 / 8 / 2;
    justify-content: center;
  }

  @media ${smallScreen} {
    width: 100%;
    margin: 0 0 25px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const NeedHelp = styled.div`
  width: 185px;
  height: 50px;
  grid-area: 5 / 3 / 6 / 4;
  font-family: var(--font-regular);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-regular);
  
  > span {color: var(--color-text-highlight)}
  
  > p {
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

  @media ${smallScreen} {
    width: 100%;
    margin: 0 0 25px;
    align-self: center;
  }
  
  > span {
    font-family: var(--font-second);
    font-size: 12px;
    line-height: 1.2;
    font-weight: 300;
    text-transform: uppercase;
    color: var(--color-text-main);
  }
  
  > span:nth-child(even) {justify-self: end}
  
  > span:nth-child(n+8) {
    font-family: var(--font-second);
    font-size: 13px;
    font-weight: 700;
  }
  
  > span:nth-child(8) {
    grid-area: 5 / 1 / 6 / 2;
    justify-self: start;
  }
  
  > span:nth-child(9) {grid-area: 6 / 1 / 7 / 2}
  
  > span:nth-child(10) {
    grid-area: 5 / 2 / 7 / 3;
    align-self: center;
    font-size: 18px;
  }
`;

const LineTotal = styled.div`
  width: 100%;
  height: 1px;
  grid-area: 4 / 1 / 5 / 3;
  background: var(--color-border);
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;




const Cart = (): JSX.Element => {
  const cart = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();
  const screen = useMediaQuery();
  
  const amount = (product: IProduct): number => product.price * product.quantity;
  const subtotal: number = cart
    .map(amount)
    .reduce((prev: number, curr: number): number => prev + curr, 0);


  return(
    <WrapperOuter>
      <WrapperInner empty={cart.length === 0}>
        <BreadCrumbs
          link={
            <>
              <HashLink to='/'>Home</HashLink>
              <span>/</span>
              <span>Cart</span>
            </>
          }
          marginBottom='20px'
          gridArea='1 / 1 / 3 / 5'
        />
        
        {cart.length > 0 ?
          <>
            <CartWrapper>
              <HeaderWrapper>
                <h2>CART</h2>
              </HeaderWrapper>
              
              
              {!screen.small &&
                <TitleWrapper>
                  <span>PRODUCT</span>
                  <span>PRICE</span>
                  <span>QUANTITY</span>
                  <span>AMOUNT</span>
                </TitleWrapper>
              }


              {cart.map((product: IProduct): JSX.Element =>
                <ProductWrapper key={product.id}>
                  <Product>
                    <HashLink to={`/catalog/product${product.id}#top`}>
                      <img src={productImages[`product${product.id}`]} alt={product.name} />
                    </HashLink>

                    <Text gridArea='nam'>{product.name}</Text>
                    <Text gridArea='clr'>color: {product.color}</Text>
                    <Text gridArea='siz'>size: {product.size}</Text>

                    <X
                      type='button'
                      gridArea='x'
                      onClick={(): void => {dispatch(cartRemove(product))}}
                    >
                      +
                    </X>

                    {!screen.small && <Text gridArea='prc'>${product.price}</Text>}

                    <Quantity>
                      <span>{product.quantity}</span>
                    </Quantity>

                    <PlusMinus
                      type='button'
                      gridArea='pls'
                      onClick={(): void => {dispatch(quantityIncrement(product))}}
                    >
                      +
                    </PlusMinus>

                    <PlusMinus
                      type='button'
                      gridArea='mns'
                      onClick={(): void => {dispatch(quantityDecrement(product))}}
                    >
                      -
                    </PlusMinus>

                    <Text gridArea='amt'>${amount(product)}</Text>
                  </Product>
                </ProductWrapper>
              )}
            </CartWrapper>


            <EstimateDeliveryWrapper>
              <EstimateDelivery>
                <span>ESTIMATE DELIVERY</span>
                <span>Enter your destination to get a delivery estimate</span>
                <Input type='text' width='280px' placeholder='Enter your country' />
                <Input type='text' width='280px' placeholder='Enter your region' />
                <div>
                  <Input type='text' width='140px' placeholder='Postcode/Zip' />
                  <Button type='button' width='120px'>GET A QUOTE</Button>
                </div>
              </EstimateDelivery>
            </EstimateDeliveryWrapper>


            <Voucher>
              <span>REDEEM DISCOUNT VOUCHER</span>
              <Input type='text' width='180px' />
            </Voucher>


            {screen.big &&
              <NeedHelp>
                <span>Need Help?</span>
                <p>
                  Call our customer care team on<br />
                  (08) 082340481 / Customer Service
                </p>
              </NeedHelp>
            }


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


            {!screen.small &&
              <>
                <Button
                  as={HashLink}
                  to='/catalog#top'
                  variant='outline'
                  width='290px'
                  gridArea='6 / 1 / 7 / 2'
                  mediumGridArea='7 / 4 / 8 / 5'
                  mediumJustifySelf='end'
                  mediumAlignSelf='end'
                >
                  CONTINUE SHOPPING
                </Button>

                <Button
                  as={HashLink}
                  to='/checkout#top'
                  width='290px'
                  gridArea='6 / 4 / 7 / 5'
                  justifySelf='end'
                  mediumAlignSelf='end'
                >
                  CHECKOUT
                </Button>
              </>
            }

            {screen.small &&
              <ButtonWrapper>
                <Button
                  as={HashLink}
                  to='/catalog#top'
                  variant='outline'
                  smallWidth='45%'
                  maxWidth='290px'
                >
                  CONTINUE SHOPPING
                </Button>

                <Button
                  as={HashLink}
                  to='/checkout#top'
                  smallWidth='45%'
                  maxWidth='290px'
                >
                  CHECKOUT
                </Button>
              </ButtonWrapper>
            }
          </>

          :

          <>
            <h2>CART IS EMPTY</h2>
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




export default Cart;
