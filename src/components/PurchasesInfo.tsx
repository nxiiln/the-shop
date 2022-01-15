import React from 'react';
import styled from 'styled-components';


const WrapperOuter = styled.section`
  width: 100vw;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 745px;
  height: 105px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Line = styled.div`
  width: 965px;
  height: 1px;
  background: #aaa;
`;

const Item = styled.div`
  width: 220px;
  height: 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Number = styled.span`
  margin: 0 0 13px 0;
  font-family: 'Playfair Display SC';
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: #000;
`;

const TextWrapper = styled.div`
  width: 180px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MainText = styled.span`
  font-family: 'Playfair Display SC';
  font-size: 13px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  color: #000;
`;

const Text = styled.span`
  font-family: Nunito;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  color: #000;
`;


const PurchasesInfo = (): JSX.Element => {
  return(
    <WrapperOuter>
      <Line />
      <WrapperInner>
        <Item>
          <Number>01.</Number>
          <TextWrapper>
            <MainText>Free Shipping</MainText>
            <Text>On all orders over $50</Text>
          </TextWrapper>
        </Item>

        <Item>
          <Number>02.</Number>
          <TextWrapper>
            <MainText>Money back guarantee</MainText>
            <Text>On all orders</Text>
          </TextWrapper>
        </Item>
        
        <Item>
          <Number>03.</Number>
          <TextWrapper>
            <MainText>Worldwide Delivery</MainText>
            <Text>To over 80 countries</Text>
          </TextWrapper>
        </Item>
      </WrapperInner>
    </WrapperOuter>
  );
}


export default PurchasesInfo;
