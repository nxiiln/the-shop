import React from 'react';
import styled from 'styled-components';
import imgA from '../images/whatsNewA.png';
import imgB from '../images/whatsNewB.png';
import imgC from '../images/whatsNewC.png';


const Wrapper = styled.section`
  position: relative;
  top: 290px;
  left: 0;
  display: flex;
  justify-content: center;
  align-content: space-between;
`;

const WrapperInner = styled.div`
  width: 960px;
  height: 396px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Line = styled.div`
  width: 357px;
  height: 1px;
  margin-top: 15px;
  background-color: #aaa;
`;

const MainText = styled.div`
  height: 25px;
  font-family: 'Playfair Display SC';
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: #000;
`;

const Img = styled.img`
  width: 312px;
  height: 307px;
`;

const WrapperDescription = styled.div`
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SpringCollection = styled.span`
  font-family: Nunito;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  color: #000
`;

const WrapperText = styled.div`
  width: 80%;
  height: 30px;
  margin-left: 10%;
  display: flex;
  justify-content: space-between;
`;


const WhatsNew = (): JSX.Element => {
  return(
    <Wrapper>
      <WrapperInner>
        <Line />
        <MainText>WHATS NEW</MainText>
        <Line />

        <Img src={imgA} alt='woman in dress'/>
        <Img src={imgB} alt='handbags'/>
        <Img src={imgC} alt='man in a jacket'/>

        <WrapperText>
          <WrapperDescription>
            <span>
              BLACK & WHITE
            </span>
            <SpringCollection>
              spring collection 2022
            </SpringCollection>
          </WrapperDescription>

          <WrapperDescription>
            <span>
              COLOR SUMMER
            </span>
            <SpringCollection>
              spring collection 2022
            </SpringCollection>
          </WrapperDescription>

          <WrapperDescription>
            <span>
              VINTAGE FOR HIM
            </span>
            <SpringCollection>
              spring collection 2022
            </SpringCollection>
          </WrapperDescription>
        </WrapperText>
      </WrapperInner>
    </Wrapper>
  );
}


export default WhatsNew;
