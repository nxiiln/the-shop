import {useState} from 'react';
import styled from 'styled-components/macro';
import {HashLink} from 'react-router-hash-link';
import QuickView from './QuickView';
import {useAppDispatch} from '../redux-hooks';
import {quickViewChange} from '../slices/quickView';
import data from '../data.json';
import {IProduct} from '../types/IProduct';
import {productImages} from '../images/productImages';
import Button from './Button';




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

  &:hover {background: var(--color-button-outline-hover)}

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

const ImageLink = styled(HashLink)`
  > img {
    width: 140px;
    height: 188px;
  }
`;




const AlsoLove = (): JSX.Element => {
  const [display, setDisplay] = useState<boolean>(true);
  const [productQuickView, setProductQuickView] = useState<IProduct>(data.products[0]);
  const dispatch = useAppDispatch();


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
        {data.products
          .filter((product: IProduct): boolean =>
            product.id === 3 || product.id === 4 || product.id === 8
          )
          .map((product: IProduct): JSX.Element =>
            <ProductAlso key={product.id}>
              <ImageLink to={`/catalog/product${product.id}#top`}>
                <img
                  src={productImages[`product${product.id}`]}
                  alt='woman in white dress'
                />
              </ImageLink>

              <span>{product.name}</span>
              <span>
                ${product.price.toString().replace(/(.+)(...)$/, '$1,$2')}
              </span>
              
              <Button
                type='button'
                variant='outline'
                width='110px'
                margin='0 0 0 10px'
                onClick={(): void => {
                  setProductQuickView(product);
                  dispatch(quickViewChange(true));
                }}
              >
                QUICKVIEW
              </Button>
            </ProductAlso>
        )}
      </ProductAlsoWrapper>

      <QuickView {...productQuickView} />
    </AlsoLoveWrapper>
  )
}




export default AlsoLove;
