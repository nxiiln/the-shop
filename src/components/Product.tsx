import React, {useState} from 'react';
import styled from 'styled-components/macro';
import BreadCrumbs from './BreadCrumbs';
import RelatedProducts from './RelatedProducts';
import ProductSlider from './ProductSlider';
import ProductDescription from './ProductDescription';





const WrapperOuter = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 960px;
  height: 1100px;
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
          gridArea=''
        />


        <div>
          <div>
            <ProductSlider />
            <RelatedProducts />
          </div>


          <div>
            <ProductDescription />
          </div>
        </div>
      </WrapperInner>
    </WrapperOuter>
  );
}




export default Product;
