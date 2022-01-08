import React, {useState} from 'react';
import styled from 'styled-components';
import cartSymbol from '../../images/cartSymbol.png';
import imageProductA from '../../images/imageProductA.png';
import imageProductB from '../../images/imageProductB.png';
import imageProductC from '../../images/imageProductC.png';




type Open = {open: boolean};

const CartWrapper = styled.div<Open>`
  width: 90px;
  position: absolute;
  top: 70px;
  left: 82.5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  ${props => props.open && `
    padding: 0 18px 13px 0;
  `}
`;

const Line = styled.div`
  width: 1px;
  height: 27px;
  background-color: #4f4f4f;
`;

const CartSymbolWrapper = styled.div<Open>`
  width: 25px;
  height: 25px;
  background-color: #000;
  border-radius: ${props => props.open ? '0%': '50%'}
`;

const CartSymbol = styled.img`
  margin: 5.5px 0 0 7.5px;
`;

const Text = styled.div`
  width: 50px;
  height: 12px;
  font-family: Nunito;
  font-size: 11px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  color: #282828;
`;

const Dropdown = styled.div`
  width: 172px;
  position: absolute;
  top: 40px;
  left: -65px;
  border: 1px solid #e4e2e1;
  z-index: 2;
`;

const TriangleOuter = styled.div`
  width: 0px;
  height: 0px;
  position: absolute;
  top: -20px;
  left: 75px;
  background-color: transparent;
  border-top: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #e4e2e1;
  border-left: 10px solid transparent;
`;

const TriangleInner = styled.div`
  width: 0px;
  height: 0px;
  position: absolute;
  top: -6.5px;
  left: -8px;
  background-color: transparent;
  border-top: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #fff;
  border-left: 8px solid transparent;
`;

const Product = styled.div`
  width: 172px;
  height: 94px;
  background-color: #fff;
  border-bottom: 1px solid #e4e2e1;
`;

const ProductImage = styled.img`
  margin: 6px 0 0 6px;
`;

const Description = styled.div`
  width: 90px;
  height: 26px;
  position: relative;
  top: -72px;
  left: 77px;
  font-family: Playfair Display SC;
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  color: #000;
`;

const Price = styled.div`
  width: 44px;
  height: 12px;
  position: relative;
  top: -58px;
  left: 78px;
  font-family: Nunito;
  font-size: 11px;
  line-height: 1.2;
  font-weight: 300;
  color: #000;
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
  &:hover {
    color: #000;
  }
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
  background-color: #f7f7f7;
  cursor: default;
`;

const Total = styled.div`
  width: 48px;
  height: 15px;
  position: relative;
  top: 18px;
  left: 17px;
  font-family: Playfair Display SC;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 400;
  color: #000;
`;

const TotalPrice = styled.div`
  width: 60px;
  position: relative;
  top: 5.5px;
  left: 80px;
  font-family: Nunito;
  font-size: 11px;
  line-height: 1.2;
  font-weight: 700;
  color: #000;
`;

const ViewCart = styled.button`
  width: 74px;
  height: 30px;
  position: relative;
  top: 18px;
  left: 10px;
  font-family: Nunito;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  background-color: white;
  border: 1px solid #e4e2e1;
  cursor: pointer;
`;

const Checkout = styled.button`
  width: 74px;
  height: 30px;
  position: relative;
  top: 18px;
  left: 16px;
  font-family: Nunito;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  color: white;
  background-color: black;
  border: none;
  cursor: pointer;
`;




const Cart = (): JSX.Element => {
  interface Product {
    id: string;
    image: string;
    description: string;
    price: number;
    status: boolean;
  };

  const productList: Product[] = [
    {
      id: 'productA',
      image: imageProductA,
      description: 'detailed swing dress',
      price: 275,
      status: true
    },
    {
      id: 'productB',
      image: imageProductB,
      description: 'maxararzy frilled dress',
      price: 1875,
      status: true
    },
    {
      id: 'productC',
      image: imageProductC,
      description: 'detailed swing dress',
      price: 159,
      status: true
    }
  ];

  const [open, setOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>(productList);

  const productsNumber: number = products
    .filter((product: Product): boolean => product.status).length;
  
  const totalPrice: number = products
    .map((product: Product): number => +product.status && product.price)
    .reduce((prev: number, curr: number): number => prev + curr);


  return(
    <CartWrapper
      open={open}
      onMouseEnter={(): void => setOpen(true)}
      onMouseLeave={(): void => setOpen(false)}
    >
      <Line />
      <CartSymbolWrapper open={open}>
        <CartSymbol
          src={cartSymbol}
          alt='cart'
        />
      </CartSymbolWrapper>
      <Text>cart ({productsNumber})</Text>

      {open &&
        <Dropdown>
          <TriangleOuter><TriangleInner /></TriangleOuter>

        {products.map((product: Product): false | JSX.Element => {
          return(product.status &&
            <Product key={product.id}>
              <ProductImage
                src={product.image}
                alt='productPreview'
              />
              <Description>{product.description}</Description>
              <Price>${product.price}</Price>
              <Remove
                type='button'
                onClick={(): void =>
                  //Error: duplicates the product, but must remove
                  setProducts([...products, {
                    id: product.id,
                    image: product.image,
                    description: product.description,
                    price: product.price,
                    status: false
                  }])
                }
              >
                <X>+</X>
              </Remove>
            </Product>
          );
        })}

          <Result>
            <Total>TOTAL:</Total>
            <TotalPrice>${totalPrice}</TotalPrice>
            <ViewCart type='button'>view cart</ViewCart>
            <Checkout type='button'>checkout</Checkout>
          </Result>
        </Dropdown>
      }
    </CartWrapper>
  );
}


export default Cart;
