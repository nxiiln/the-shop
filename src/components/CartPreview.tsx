import {useState} from 'react';
import styled from 'styled-components/macro';
import {smallScreen} from '../mediaQueries';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import {useAppSelector, useAppDispatch} from '../redux-hooks';
import {cartRemove} from '../slices/cart'
import {IProduct} from '../types/IProduct';
import cartSymbol from '../images/cartSymbol.png';




const CartPreviewWrapper = styled.div`
  box-sizing: content-box;
  width: 80px;
  margin-right: 25px;
  padding: 15px 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const CartPreviewSymbolWrapper = styled.div<{open: boolean}>`
  width: 25px;
  height: 25px;
  background: var(--color-background-second);
  border-radius: ${props => props.open ? '0%': '50%'};

  @media ${smallScreen} {background: #404040;}
`;

const CartPreviewSymbol = styled.img`
  margin: 6px 0 0 8px;
`;

const Text = styled.div`
  width: 50px;
  height: 12px;
  font-family: var(--font-second);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  color: var(--color-text-main);
  user-select: none;

  @media ${smallScreen} {color: var(--color-text-second)}
`;

const Dropdown = styled.div`
  width: 172px;
  position: absolute;
  top: 55px;
  left: -73px;
  box-sizing: content-box;
  border: 1px solid var(--color-border);
  z-index: 2;
`;

const TriangleOuter = styled.div`
  width: 0px;
  height: 0px;
  position: absolute;
  top: -21px;
  left: 75px;
  background-color: transparent;
  border-top: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid var(--color-border);
  border-left: 10px solid transparent;
`;

const TriangleInner = styled.div`
  width: 0px;
  height: 0px;
  position: absolute;
  top: -7px;
  left: -9px;
  background-color: transparent;
  border-top: 9px solid transparent;
  border-right: 9px solid transparent;
  border-bottom: 9px solid #fff;
  border-left: 9px solid transparent;
`;

const Product = styled(HashLink)`
  width: 172px;
  height: 94px;
  display: block;
  text-decoration: none;
  background: var(--color-background-main);
  border-bottom: 1px solid var(--color-border);
`;

const ProductImage = styled.img`
  width: 58px;
  margin: 6px 0 0 6px;
`;

const Description = styled.div`
  width: 90px;
  height: 26px;
  position: relative;
  top: -72px;
  left: 77px;
  font-family: var(--font-main);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-text-main);
`;

const Price = styled.div`
  width: 44px;
  height: 12px;
  position: relative;
  top: -58px;
  left: 78px;
  font-family: var(--font-second);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-text-main);
`;

const Remove = styled.button`
  width: 9px;
  height: 9px;
  position: relative;
  top: -122px;
  left: 158px;
  padding: 0;
  color: #e4e2e1;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {color: var(--color-text-main)}
`;

const X = styled.div`
  width: 7px;
  height: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  transform: rotate(45deg);
`;

const Result = styled.div`
  width: 172px;
  height: 91px;
  background: var(--color-background-highlight);
  cursor: default;
`;

const Total = styled.div`
  width: 48px;
  height: 15px;
  position: relative;
  top: 18px;
  left: 17px;
  font-family: var(--font-main);
  font-size: 14px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);
`;

const TotalPrice = styled.div`
  width: 60px;
  position: relative;
  top: 5.5px;
  left: 80px;
  font-family: var(--font-second);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 700;
  color: var(--color-text-main);
`;

const LinkBox = styled(Link)`
  width: 74px;
  height: 30px;
  position: relative;
  top: 18px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-second);
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
`;

const ViewCart = styled(LinkBox)`
  left: 10px;
  color: var(--color-text-main);
  background: var(--color-background-main);
  border: 1px solid var(--color-border);

  &:hover {background: var(--color-button-outline-hover)}
`;

const Checkout = styled(LinkBox)`
  left: 16px;
  color: var(--color-text-second);
  background-color: var(--color-background-second);
  border: none;

  &:hover {background: var(--color-button-solid-hover)}
`;




const CartPreview = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const cart = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const totalPrice: number = cart
    .map((product: IProduct): number => product.price * product.quantity)
    .reduce((prev: number, curr: number): number => prev + curr, 0);


  return(
    <CartPreviewWrapper
      onMouseEnter={(): void => setOpen(true)}
      onMouseLeave={(): void => setOpen(false)}
    >
      <CartPreviewSymbolWrapper open={open}>
        <CartPreviewSymbol src={cartSymbol} alt='cart'/>
      </CartPreviewSymbolWrapper>

      <Text>cart ({cart.length})</Text>

      {open &&
        <Dropdown>
          <TriangleOuter><TriangleInner /></TriangleOuter>

          {cart.map((product: IProduct): JSX.Element =>
            <Product key={product.id} to={`/catalog/product${product.id}#top`}>
              <ProductImage src={product.image} alt='product preview' />
              <Description>{product.name}</Description>
              <Price>${product.price * product.quantity}</Price>
              <Remove
                type='button'
                onClick={(e): void => {
                  e.preventDefault();
                  dispatch(cartRemove(product));
                }}
              >
                <X>+</X>
              </Remove>
            </Product>
          )}

          <Result>
            <Total>TOTAL:</Total>
            <TotalPrice>${totalPrice}</TotalPrice>
            <ViewCart to='cart'>view cart</ViewCart>
            <Checkout to='checkout'>checkout</Checkout>
          </Result>
        </Dropdown>
      }
    </CartPreviewWrapper>
  );
}




export default CartPreview;
