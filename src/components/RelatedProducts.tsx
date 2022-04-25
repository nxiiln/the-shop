import React, {useState} from 'react';
import styled from 'styled-components/macro';
import productRelated1 from '../images/productRelated1.png';
import productRelated2 from '../images/productRelated2.png';
import productRelated3 from '../images/productRelated3.png';
import productRelated4 from '../images/productRelated4.png';




const RelatedProductsWrapper = styled.article`
  width: 610px;
  height: 310px;
  margin-top: 35px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
`;

const Header = styled.h2`
  margin: 0;
  font-family: var(--font-main);
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);
`;

const Line = styled.div`
  width: 360px;
  height: 1px;
  background: var(--color-border);
`;

const ImageWrapper = styled.div`
  width: 145px;
  height: 245px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Description = styled.span`
  font-family: var(--font-main);
  font-size: 12px;
  font-weight: 400;
  color: var(--color-text-main);
  text-align: center;
`;

const Price = styled.span`
  font-family: var(--font-second);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-text-main);
`;

const ProductTriangle = styled.div<{attr: string}>`
  width: 0;
  height: 0;
  position: absolute;
  top: -5px;
  left: -19px;
  border-right: 35px solid transparent;
  border-bottom: ${props => props.attr === 'new' ?
    '35px solid var(--color-triangle-new)' :
    '35px solid var(--color-triangle-sale)'
  };
  border-left: 35px solid transparent;
  transform: rotate(-45deg);
`;

const ProductTriangleDescription = styled.span`
  position: absolute;
  top: 4.5px;
  left: 6.5px;
  font-family: var(--font-main);
  font-size: 11px;
  font-weight: 700;
  color: var(--color-text-second);
`;




const RelatedProducts = (): JSX.Element => {
  return(
    <RelatedProductsWrapper>
      <Header>RELATED PRODUCTS</Header>
      <Line />
      <ImageWrapper>
        <img src={productRelated1} alt='productRelated1' />
        <Description>DETAILED SWING DRESS</Description>
        <Price>$1875</Price>
        <ProductTriangle attr='new' />
        <ProductTriangleDescription>NEW</ProductTriangleDescription>
      </ImageWrapper>

      <ImageWrapper>
        <img src={productRelated2} alt='productRelated2' />
        <Description>MAXARARZY FRILLED DRESS</Description>
        <Price>$1875</Price>
        <ProductTriangle attr='sale' />
        <ProductTriangleDescription>SALE</ProductTriangleDescription>
      </ImageWrapper>

      <ImageWrapper>
        <img src={productRelated3} alt='productRelated3' />
        <Description>DETAILED SWING DRESS</Description>
        <Price>$1875</Price>
      </ImageWrapper>

      <ImageWrapper>
        <img src={productRelated4} alt='productRelated4' />
        <Description>MAXARARZY FRILLED DRESS</Description>
        <Price>$1875</Price>
      </ImageWrapper>
    </RelatedProductsWrapper>
  );
}




export default RelatedProducts;
