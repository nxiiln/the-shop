import styled from 'styled-components/macro';
import {smallScreen} from '../mediaQueries';


const WrapperOuter = styled.article`
  width: 100vw;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 1100px;
  height: 125px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top: 1px solid var(--color-border);

  > div:nth-child(2) {margin: 0 15px 0 15px}
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${smallScreen} {
    height: 90px;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
`;

const Number = styled.span`
  margin: 0 10px 20px 0;
  font-family: var(--font-main);
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);

  @media ${smallScreen} {margin: 0 0 5px 0}
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const MainText = styled.span`
  margin-bottom: 5px;
  font-family: var(--font-main);
  font-size: 13px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-text-main);
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
