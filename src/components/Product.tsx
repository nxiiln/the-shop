import React, {useState} from 'react';
import styled from 'styled-components/macro';
import productMain from '../images/productMain.png';
import productSecond1 from '../images/productSecond1.png';
import productSecond2 from '../images/productSecond2.png';
import productSecond3 from '../images/productSecond3.png';
import productSecond4 from '../images/productSecond4.png';
import twitterBlack from '../images/twitterBlack.png';
import pinterestBlack from '../images/pinterestBlack.png';
import googleBlack from '../images/googleBlack.png';
import productRelated1 from '../images/productRelated1.png';
import productRelated2 from '../images/productRelated2.png';
import productRelated3 from '../images/productRelated3.png';
import productRelated4 from '../images/productRelated4.png';




const WrapperOuter = styled.article`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 960px;
  height: 1100px;
  border: 1px solid aqua;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 10px;
  background: #aaa;
`;

const BreadCrumbsWrapper = styled.article`
  width: 100%;
  margin-bottom: 22px;
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
  width: 215px;
  height: 10px;
`;

const BreadCrumbsRight = styled(BreadCrumbs)`
  width: 130px;
  height: 10px;
`;




const Product = (): JSX.Element => {
  return(
    <WrapperOuter>
      <WrapperInner>
        <Line />
        <BreadCrumbsWrapper>
          <BreadCrumbsLeft type='button'>
            Home / Women / Tops / Detailed Swing Dress
          </BreadCrumbsLeft>
          <BreadCrumbsRight type='button'>
            {'<'} Return to Previous Page
          </BreadCrumbsRight>
        </BreadCrumbsWrapper>
      </WrapperInner>
    </WrapperOuter>
  );
}




export default Product;
