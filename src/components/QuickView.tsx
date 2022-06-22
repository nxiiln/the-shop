import {useState} from 'react';
import styled from 'styled-components/macro';
import quickViewImage from '../images/quickViewImage.png'
import wishList from '../images/wishList.png'
import compare from '../images/compare.png'




const WrapperOuter = styled.article<{status: boolean}>`
  ${props => !props.status && 'display: none;'}
  width: 700px;
  height: 430px;
  position: absolute;
  top: 0;
  left: 130px;
  background: var(--color-background-main);
  box-shadow: 0 0 5px 5px var(--color-border);
  z-index: 1;
`;

const WrapperInner = styled.div`
  width: 643px;
  height: 380px;
  margin: 20px 0 0 38px;
  display: flex;
  flex-wrap: wrap;
`;


//Title------------------------------------------
const TitleWrapper = styled.div`
  width: 643px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-family: var(--font-main);
  font-size: 24px;
  font-weight: 400;
  color: var(--color-text-main);
`;

const Line = styled.div`
  width: 442px;
  height: 1px;
  background: var(--color-border);
`;

const Close = styled.button`
  width: 29px;
  height: 29px;
  position: relative;
  align-self: start;
  background: var(--color-background-main);
  border: 1px solid var(--color-border);
  cursor: pointer;

  > span:first-child  {
    display: inline-block;
    position: absolute;
    top: -5px;
    left: 7px;
    font-family: var(--font-second);
    font-size: 25px;
    color: var(--color-text-main);
    transform: rotate(45deg);
  }
`;


//Description------------------------------------
const DescriptionWrapper = styled.div`
  width: 328px;
  height: 278px;
  margin-left: 48px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const Index = styled.span`
  font-family: var(--font-regular);
  font-size: 11px;
  font-weight: 400;
  color: var(--color-text-regular);
`;

const Name = styled.span`
  margin-bottom: 15px;
  font-family: var(--font-main);
  font-size: 24px;
  font-weight: 400;
  color: var(--color-text-main);
`;

const Details = styled.span`
  margin-bottom: 20px;
  font-family: var(--font-regular);
  font-size: 11px;
  font-weight: 400;
  color: var(--color-text-main);
`;

const Price = styled.span`
  margin-bottom: 15px;
  font-family: var(--font-second);
  font-size: 18px;
  font-weight: 300;
  color: var(--color-text-main);
`;

const Select = styled.select<{attr: string}>`
  width: ${props => props.attr === 'qty' ? '94px' : '325px'};
  height: 29px;
  margin-bottom: ${props => props.attr === 'qty' ? '20px' : '5px'};
  padding-left: 12px;
  font-family: var(--font-second);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  color: var(--color-text-main);
  background: #f7f7f7;
  border: 1px solid var(--color-border);
  border-radius: 15px;
`;

const ButtonsWrapper = styled.div`
  width: 328px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddToCart = styled.button`
  width: 103px;
  height: 30px;
  font-family: var(--font-second);
  font-size: 10px;
  font-weight: 300;
  color: var(--color-text-second);
  background: var(--color-background-second);
  border: none;
  cursor: pointer;
`;

const WishList = styled.button`
  width: 107px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-second);
  font-size: 10px;
  font-weight: 400;
  color: var(--color-text-main);
  background: var(--color-background-main);
  border: 1px solid var(--color-border);
  cursor: pointer;

  > img {margin-right: 5px}
`;

const Compare = styled.button`
  width: 107px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-second);
  font-size: 10px;
  font-weight: 400;
  color: var(--color-text-main);
  background: var(--color-background-highlight);
  border: 1px solid var(--color-border);
  cursor: pointer;
  
  > img {margin-right: 5px}
`;




const QuickView = (): JSX.Element => {
  const [display, setDisplay] = useState<boolean>(true);

  return(
    <WrapperOuter status={display}>
      <WrapperInner>
        <TitleWrapper>
          <Title>QUICK VIEW</Title>
          <Line />
          <Close
            type='button'
            onClick={(): void => setDisplay(false)}
          >
            <span>+</span>
          </Close>
        </TitleWrapper>

        <img src={quickViewImage} alt='woman in white dress' />

        <DescriptionWrapper>
          <Index>MU-4587-89</Index>
          <Name>DETAILED SWING DRESS</Name>
          <Details>Full Product Details</Details>
          <Price>$1,875.00</Price>

          <Select attr='size' defaultValue='default'>
            <option value='default' disabled>size</option>
            <option value='8'>8</option>
            <option value='12'>12</option>
            <option value='16'>16</option>
          </Select>

          <Select attr ='color' defaultValue='default'>
            <option value='default' disabled>color</option>
            <option value='white'>white</option>
            <option value='yellow'>yellow</option>
            <option value='blue'>blue</option>
          </Select>

          <Select attr='qty' defaultValue='default'>
            <option value='default' disabled>qty</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </Select>

          <ButtonsWrapper>
            <AddToCart type='button'>
              ADD TO CART
            </AddToCart>

            <WishList type='button'>
              <img src={wishList} alt='wish list' />
              WISHLIST
            </WishList>

            <Compare type='button'>
              <img src={compare} alt='compare' />
              COMPARE
            </Compare>
          </ButtonsWrapper>
        </DescriptionWrapper>
      </WrapperInner>
    </WrapperOuter>
  )
}




export default QuickView;
