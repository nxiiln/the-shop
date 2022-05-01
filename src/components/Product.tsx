import React, {useState} from 'react';
import styled from 'styled-components/macro';
import BreadCrumbs from './BreadCrumbs';
import RelatedProducts from './RelatedProducts';
import ProductSlider from './ProductSlider';
import ProductDescription from './ProductDescription';
import ProductReviews from './ProductReviews';





const WrapperOuter = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 960px;
  > div {
    display: flex;
    justify-content: space-between;
  }
`;




const Product = (): JSX.Element => {
  return(
    <WrapperOuter>
      <WrapperInner>
        <BreadCrumbs
          link={
            <>
              <a href='#'>Home</a>
              <span>/</span>
              <a href='#'>Women</a>
              <span>/</span>
              <a href='#'>Tops</a>
              <span>/</span>
              <span>Detailed Swing Dress</span>
            </>
          }
          return='#'
          marginBottom='20px'
        />


        <div>
          <div>
            <ProductSlider />
            <RelatedProducts />
          </div>


          <div>
            <ProductDescription />
            <ProductReviews />
          </div>
        </div>
      </WrapperInner>
    </WrapperOuter>
  );
}




export default Product;
