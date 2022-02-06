import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import quickViewImage from '../images/quickViewImage.png'




const WrapperOuter = styled.article<{display: boolean}>`
  ${props => !props.display && 'display: none;'}
  width: 700px;
  height: 430px;
  position: absolute;
  top: 0;
  left: 130px;
  background: #fff;
  box-shadow: 0 0 5px 5px #e4e2e1;
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
  font-family: 'Playfair Display SC';
  font-size: 24px;
  font-weight: 400;
  color: #000;
`;

const Line = styled.div`
  width: 442px;
  height: 1px;
  background: #e4e2e1;
`;

const Close = styled.button`
  width: 29px;
  height: 29px;
  position: relative;
  align-self: start;
  background: #fff;
  border: 1px solid #e4e2e1;
  cursor: pointer;
  > span:first-child  {
    display: inline-block;
    position: absolute;
    top: -5px;
    left: 7px;
    font-family: Nunito;
    font-size: 25px;
    color: #000;
    transform: rotate(45deg);
  }
`;
//-----------------------------------------------


//Description------------------------------------
const DescriptionWrapper = styled.div`
  width: 328px;
  height: 278px;
  margin-left: 48px;
  border: 1px solid hotpink;
`;


//-----------------------------------------------




const QuickView = (): JSX.Element => {
  const [display, setDisplay] = useState<boolean>(true);

  return(
    <WrapperOuter display={display}>
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
        </DescriptionWrapper>
      </WrapperInner>
    </WrapperOuter>
  )
}




export default QuickView;
