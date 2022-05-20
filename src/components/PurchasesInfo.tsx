import React from 'react';
import styled from 'styled-components/macro';
import {smallScreen} from '../mediaQueries';


const WrapperOuter = styled.article`
  width: 100vw;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 1100px;
  height: 105px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Line = styled.div`
  width: 1100px;
  height: 1px;
  background: var(--color-border);
`;

const Item = styled.div`
  width: 220px;
  height: 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${smallScreen} {
    width: 170px;
    height: 65px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Number = styled.span`
  margin: 0 10px 13px 0;
  font-family: var(--font-main);
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);

  @media ${smallScreen} {margin: 0}
`;

const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MainText = styled.span`
  font-family: var(--font-main);
  font-size: 13px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-text-main);
  
  @media ${smallScreen} {margin-bottom: 5px}
`;

const Text = styled.span`
  font-family: var(--font-second);
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  color: var(--color-text-main);
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
