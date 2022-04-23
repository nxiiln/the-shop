import React, {useState} from 'react';
import styled from 'styled-components/macro';
import BreadCrumbs from './BreadCrumbs';
import ProductSlider from './ProductSlider';
import twitterBlack from '../images/twitterBlack.png';
import pinterestBlack from '../images/pinterestBlack.png';
import googleBlack from '../images/googleBlack.png';
import productRelated1 from '../images/productRelated1.png';
import productRelated2 from '../images/productRelated2.png';
import productRelated3 from '../images/productRelated3.png';
import productRelated4 from '../images/productRelated4.png';




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
          </div>


          <div>
          </div>
        </div>
      </WrapperInner>
    </WrapperOuter>
  );
}




export default Product;
