import React, {useState} from 'react';
import styled from 'styled-components';
import cartProductA from '../images/cartProductA.png';
import cartProductB from '../images/cartProductB.png';




const WrapperOuter = styled.section`
  width: 100vw;
  margin: 0 0 370px 0;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 67%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10px 30px 1fr;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  grid-area: 1 / 1 / 2 / 1;
  background: #aaa;
`;

const BreadCrumbsWrapper = styled.div`
  width: 100%;
  grid-area: 2 / 1 / 3 / 1;
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
  width: 90px;
  height: 10px;
`;

const BreadCrumbsRight = styled(BreadCrumbs)`
  width: 130px;
  height: 10px;
`;

const CartWrapper = styled.div`
  grid-area: 3 / 1 / 4 / 1;
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
  width: 97%;
  height: 50px;
  margin-left: 1.5%;
  display: grid;
  grid-template-columns:
    minmax(25px, 4.8%) minmax(83px, 12%) minmax(150px, 23%)
    minmax(40px, 10.2%) minmax(30px, 31.6%) minmax(119px, 1fr);
  justify-items: start;
  align-items: center;
  span {
    font-family: Nunito;
    font-size: 12px;
    line-height: 1.2;
    font-weight: 300;
    color: #000;
  }
  span:nth-child(1) {grid-area: 1 / 2 / 1 / 3;}
  span:nth-child(2) {grid-area: 1 / 4 / 1 / 5;}
  span:nth-child(3) {grid-area: 1 / 5 / 1 / 6;}
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
  width: 97%;
  height: 120px;
  display: grid;

  button:nth-child(1) {grid-area: 2 / 1 / 3 / 2;}
  img:nth-child(2) {grid-area: 1 / 2 / 13 / 3;}
  span:nth-child(3) {grid-area: 2 / 3 / 3 / 4;}
  span:nth-child(4) {grid-area: 4 / 3 / 5 / 4;}
  span:nth-child(5) {grid-area: 6 / 3 / 7 / 4;}
  button:nth-child(6) {grid-area: 11 / 3 / 12 / 4;}
  span:nth-child(7) {grid-area: 2 / 4 / 3 / 5;}
  span:nth-child(8) {grid-area: 2 / 5 / 3 / 6;}
  button:nth-child(9) {grid-area: 2 / 6 / 5 / 7;}

  grid-template-columns:
    minmax(25px, 4.8%) minmax(83px, 12%) minmax(150px, 23%)
    minmax(40px, 10.2%) minmax(30px, 31.6%) minmax(119px, 1fr);

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

const Quantity = styled.span`
  font-family: Nunito;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 400;
  color: #000;
  background: #fff;
  border: 1px solid #e4e2e1;
}
`;

const AddToBag = styled.button`
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




const WishList = (): JSX.Element => {
  interface Product {
    id: number;
    status: boolean;
    image: string;
    name: string;
    color: string;
    size: number;
    price: number;
    quantity: number;
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
      quantity: 1
    },
    {
      id: 2,
      status: true,
      image: cartProductB,
      name: 'maxararzy frilled dress',
      color: 'blue',
      size: 14,
      price: 325,
      quantity: 2
    }
  ];

  const [products, setProducts] = useState<Product[]>(productList);


  return(
    <WrapperOuter>
      <WrapperInner>
        <Line />
        <BreadCrumbsWrapper>
          <BreadCrumbsLeft type='button'>
            Home / Wish List
          </BreadCrumbsLeft>
          <BreadCrumbsRight type='button'>
            {'<'} Return to Previous Page
          </BreadCrumbsRight>
        </BreadCrumbsWrapper>

        <CartWrapper>
          <HeaderWrapper>
            <h2>WISH LIST</h2>
          </HeaderWrapper>
          <TitleWrapper>
            <span>PRODUCT</span>
            <span>PRICE</span>
            <span>Q-TY</span>
          </TitleWrapper>

          {products.map((product: Product): false | JSX.Element => {
            return(product.status &&
              <ProductWrapper key={product.id}>
                <Product>
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
                  <img src={product.image} alt={product.name} />
                  <span>{product.name}</span>
                  <span>color: {product.color}</span>
                  <span>size: {product.size}</span>
                  <ButtonUnderline type='button'>Edit Item</ButtonUnderline>
                  <span>${product.price}</span>
                  <span>{product.quantity}</span>
                  <AddToBag type='button'>ADD TO BAG</AddToBag>
                </Product>
              </ProductWrapper>
            );
          })}
        </CartWrapper>
      </WrapperInner>
    </WrapperOuter>
  );
}




export default WishList;
