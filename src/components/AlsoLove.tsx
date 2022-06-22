import {useState} from 'react';
import styled from 'styled-components/macro';
import QuickView from './QuickView';
import alsoLove1 from '../images/alsoLove1.png';
import alsoLove2 from '../images/alsoLove2.png';
import alsoLove3 from '../images/alsoLove3.png';




const AlsoLoveWrapper = styled.article<{status: boolean}>`
  ${props => !props.status && 'display: none;'}
  width: 100%;
  height: 296px;
  margin-bottom: 30px;
  position: relative;
  background: var(--color-background-highlight);
  border: 1px solid var(--color-border);

  > span:first-child {
    position: relative;
    top: 25px;
    left: 22px;
    font-family: var(--font-main);
    font-size: 21px;
    font-weight: 400;
    color: var(--color-text-main);
  }
`;

const AlsoLoveClose = styled.button`
  width: 29px;
  height: 29px;
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--color-background-main);
  border: 1px solid var(--color-border);
  cursor: pointer;

  > span:first-child  {
    display: inline-block;
    position: absolute;
    top: -5px;
    left: 7px;
    font-family: var(--font-second);
    font-size: 25px;
    color: var(--color-text-main);
    transform: rotate(45deg);
  }
`;

const ProductAlsoWrapper = styled.div`
  width: 95%;
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
    font-family: var(--font-main);
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--color-text-main);
  }

  > span:nth-child(3) {
    margin: 0 0 25px 10px;
    font-family: var(--font-second);
    font-size: 12px;
    line-height: 1.2;
    font-weight: 300;
    color: var(--color-text-main);
  }
`;

const ButtonQuickView = styled.button`
  width: 107px;
  height: 30px;
  margin-left: 10px;
  font-family: var(--font-second);
  font-size: 10px;
  color: var(--color-text-main);
  background: var(--color-background-main);
  border: 1px solid var(--color-border);
  cursor: pointer;
`;




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




const AlsoLove = (): JSX.Element => {
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
        {productsAlso.map((product: ProductAlso): JSX.Element =>
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
        )}
      </ProductAlsoWrapper>

      {quickView && <QuickView />}
    </AlsoLoveWrapper>
  )
}




export default AlsoLove;
