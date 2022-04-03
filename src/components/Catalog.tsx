import React, {useState} from 'react';
import styled from 'styled-components/macro';




const WrapperOuter = styled.article`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 960px;
  height: 1860px;
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
  margin-bottom: 35px;
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
  width: 82px;
  height: 10px;
`;

const BreadCrumbsRight = styled(BreadCrumbs)`
  width: 130px;
  height: 10px;
`;




const Catalog = (): JSX.Element => {
  return(
    <WrapperOuter>
      <WrapperInner>
        <Line />
        <BreadCrumbsWrapper>
          <BreadCrumbsLeft type='button'>
            Home / Women  
          </BreadCrumbsLeft>
          <BreadCrumbsRight type='button'>
            {'<'} Return to Previous Page
          </BreadCrumbsRight>
        </BreadCrumbsWrapper>
      </WrapperInner>
    </WrapperOuter>
  );
}





export default Catalog;
