import React, {useState} from 'react';
import styled from 'styled-components';
import QuickView from './QuickView';
import alsoLove1 from '../images/alsoLove1.png';
import alsoLove2 from '../images/alsoLove2.png';
import alsoLove3 from '../images/alsoLove3.png';




const AlsoLoveWrapper = styled.article<{status: boolean}>`
  ${props => !props.status && 'display: none;'}
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

const ButtonQuickView = styled.button`
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




const AlsoLove = (): JSX.Element => {
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


  const [display, setDisplay] = useState<boolean>(true);
  const [quickView, setQuickView] = useState<boolean>(false);


  return(
    <AlsoLoveWrapper status={display}>
      <span>YOU WILL ALSO LOVE</span>
      <AlsoLoveClose
        type='button'
        onClick={(): void => setDisplay(false)}
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
              <ButtonQuickView
                type='button'
                onClick={(): void => setQuickView(true)}
              >
                QUICKVIEW
              </ButtonQuickView>
            </ProductAlso>
          )
        })}
      </ProductAlsoWrapper>
      {quickView && <QuickView />}
    </AlsoLoveWrapper>
  )
}




export default AlsoLove;
