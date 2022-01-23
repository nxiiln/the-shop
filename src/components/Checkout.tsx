import React, {useState} from 'react';
import styled from 'styled-components';


const WrapperOuter = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  max-width: 960px;
  height: 1740px;
  display: grid;
  grid-template-columns: 685px 1fr;
  grid-template-rows: 10px 27px 325px 1fr;
  border: 1px solid orange;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  grid-area: 1 / 1 / 2 / 3;
  background: #aaa;
`;

const BreadCrumbsWrapper = styled.div`
  width: 100%;
  grid-area: 2 / 1 / 3 / 3;
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
  width: 68px;
  height: 10px;
`;

const BreadCrumbsRight = styled(BreadCrumbs)`
  width: 130px;
  height: 10px;
`;

const AlsoLove = styled.div`
  width: 961px;
  height: 296px;
  grid-area: 3 / 1 / 4 / 3;
  background-color: #f7f7f7;
  border: 1px solid #e4e2e1;
`;

const Step1 = styled.div`
  width: 675px;
  height: 345px;
  grid-area: 4 / 1 / 5 / 2;
  border: 1px solid #e4e2e1;
`;

const Cart = styled.div`
  width: 276px;
  height: 478px;
  grid-area: 4 / 2 / 5 / 3;
  border: 1px solid #e4e2e1;
`;


const Checkout = (): JSX.Element => {
  return(
    <WrapperOuter>
      <WrapperInner>
        <Line />
        <BreadCrumbsWrapper>
          <BreadCrumbsLeft type='button'>
            Home / Cart
          </BreadCrumbsLeft>
          <BreadCrumbsRight type='button'>
            {'<'} Return to Previous Page
          </BreadCrumbsRight>
        </BreadCrumbsWrapper>

        <AlsoLove>
        </AlsoLove>

        <Step1>
        </Step1>

        <Cart>
        </Cart>
      </WrapperInner>
    </WrapperOuter>
  );
}


export default Checkout;
