import React from 'react';
import styled from 'styled-components/macro';
import storeLocation from '../images/storeLocation.png';
import twitter from '../images/twitter.png';
import pinterest from '../images/pinterest.png';
import youtube from '../images/youtube.png';
import google from '../images/google.png';
import paymentSystems from '../images/paymentSystems.png';




const WrapperOuter = styled.footer`
  width: 100vw;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const WrapperInner = styled.div`
  width: 1100px;
  min-width: 960px;
  height: 300px;
  margin: 0 10px 0 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
`;


//Top Block -------------------------------------
const TopBlock = styled.div`
  width: 1100px;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
`;

const ShoppingGuide = styled.div`
  width: 150px;
  height: 130px;
`;

const HelpInfo = styled.div`
  width: 115px;
  height: 110px;
`;

const AboutUs = styled.div`
  width: 305px;
  height: 80px;
`;

const StoreLocation = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

const Description = styled.div`
  width: 140px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    margin: 0 0 4px 0;
  }

`;
//-----------------------------------------------


//Middle Block ----------------------------------
const MiddleBlock = styled.div`
  width: 1100px;
  height: 70px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
`;

const Newsletter = styled.div`
  width: 380px;
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div:first-child {
    margin: 0;
  }
`;

const Input = styled.input`
  width: 280px;
  height: 35px;
  &:focus {
    outline: none;
  }
`;

const ConnectUs = styled.div`
  width: 290px;
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    margin: 0;
  }
  > img {
    cursor: pointer;
  }
`;
//-----------------------------------------------


//Bottom Block ----------------------------------
const BottomBlock = styled.div`
  width: 1100px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
//-----------------------------------------------


const MainText = styled.div`
  margin: 0 0 10px 0;
  font-family: var(--font-main);
  font-size: 14px;
  line-height: 1.2;
  font-weight: 400;
  color: #ffffff;
`;

const Button = styled.button`
  padding: 0;
  font-family: var(--font-second);
  font-size: 10px;
  line-height: 18px;
  font-weight: 300;
  color: #aaa;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

const Text = styled.p`
  font-family: var(--font-second);
  font-size: 10px;
  line-height: 18px;
  font-weight: 300;
  text-transform: uppercase;
  color: #aaa;
  > span {
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
  }
`;




const Footer = (): JSX.Element => {
  return(
    <WrapperOuter id='footer'>
      <WrapperInner>
        <TopBlock>
          <ShoppingGuide>
            <MainText>SHOPPING GUIDE</MainText>
            <Button>ABOUT G-STAR ROW</Button>
            <Button>CORPORATE RESPONSIBILITY</Button>
            <Button>PRESS ROOM</Button><br />
            <Button>CAREERS</Button><br />
            <Button>G-START RETAILERS</Button>
            <Button>OPEN A G-STAR STORE</Button>
          </ShoppingGuide>

          <HelpInfo>
            <MainText>HELP & INFO</MainText>
            <Button>FAQ</Button><br />
            <Button>CONTACT</Button>
            <Button>PRIVACY POLICY</Button>
            <Button>TERMS & CONDITIONS</Button>
            <Button>DISCLAIMER</Button>
          </HelpInfo>

          <StoreLocation id='store-location'>
            <img src={storeLocation} alt='store location' />
            <Description>
              <MainText>STORE LOCATION</MainText>
              <Text>
                Company ltd.co<br />
                234 Fake address name,
                Fake City Name, Country
                01234 (000) 123 456 xxx
              </Text>
            </Description>
          </StoreLocation>

          <AboutUs id='about-us'>
            <MainText>ABOUT US</MainText>
            <Text>
              Sed et aliquet nisl, sed scelerisque risus.
              Phasellus vel ultricies augue.
              Duis sem dui, pretium in convallis ut, sagittis eget nisi.
              Uses <span>read more</span>
            </Text>
          </AboutUs>
        </TopBlock>


        <MiddleBlock>
          <Newsletter>
            <MainText>NEWSLETTER</MainText>
            <Input type='email'/>
          </Newsletter>

          <ConnectUs>
            <MainText>CONNECT US</MainText>
            <img src={twitter} alt='twitter' />
            <img src={pinterest} alt='pinterest' />
            <img src={youtube} alt='youtube' />
            <img src={google} alt='google' />
          </ConnectUs>
        </MiddleBlock>


        <BottomBlock>
          <Text>© 2022 the shop. All Rights Reserved.</Text>
          <img src={paymentSystems} alt='payment systems' />
        </BottomBlock>
      </WrapperInner>
    </WrapperOuter>
  );
}




export default Footer;
