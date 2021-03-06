import styled from 'styled-components/macro';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';
import storeLocation from '../images/storeLocation.png';
import twitter from '../images/twitter.png';
import pinterest from '../images/pinterest.png';
import youtube from '../images/youtube.png';
import google from '../images/google.png';
import paymentSystems from '../images/paymentSystems.png';




const WrapperOuter = styled.footer`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background-second);
`;

const WrapperInner = styled.div`
  width: 1100px;
  margin: 0 10px 0 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
`;

const MainText = styled.div`
  margin: 0 0 10px 0;
  font-family: var(--font-main);
  font-size: 14px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-second);
`;

const Button = styled.button`
  padding: 0;
  font-family: var(--font-second);
  font-size: 10px;
  line-height: 18px;
  font-weight: 300;
  color: var(--color-text-regular);
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: var(--color-text-second);
  }
`;

const ButtonWithBorder = styled(Button)<{withoutBorder?: boolean, withoutPadding?: boolean}>`
  height: 10px;
  margin-top: 10px;
  padding: 0 10px 0 10px;
  display: flex;
  align-items: center;

  ${props => !props.withoutBorder &&
    'border-right: 1px solid var(--color-text-regular);'
  }

  ${props => props.withoutPadding && 'padding-left: 0;'}
`;

const Text = styled.p`
  font-family: var(--font-second);
  font-size: 10px;
  line-height: 18px;
  font-weight: 300;
  text-transform: uppercase;
  color: var(--color-text-regular);

  > span {
    text-decoration: underline;
    cursor: pointer;
    
    &:hover {color: var(--color-text-second)}
  }
`;


// Top Block 
const TopBlock = styled.div`
  width: 100%;
  height: 150px;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;

  @media ${mediumScreen} {
    height: auto;
    justify-content: start;
  }

  @media ${smallScreen} {
    height: auto;
    justify-content: center;
  }
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
  width: 280px;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

const Description = styled.div`
  width: 120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > div {margin: 0 0 4px 0}

`;


// Middle Block 
const MiddleBlock = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;

  @media ${smallScreen} {
    height: 110px;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const Newsletter = styled.div`
  width: 380px;
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div:first-child {margin: 0}
  
  @media ${smallScreen} {
    width: 100%;
    justify-content: center;
  }
`;

const Input = styled.input`
  width: 280px;
  height: 35px;

  &:focus {outline: none}

  @media ${smallScreen} {
    width: 40%;
    margin-left: 5%;
  }
`;

const ConnectUs = styled.div`
  width: 290px;
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {margin: 0}
  > img {cursor: pointer}

  @media ${smallScreen} {
    width: 100%;
    justify-content: space-evenly;
  }
`;


// Bottom Block
const BottomBlock = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${smallScreen} {
    height: 75px;
    margin-top: 10px;
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }
`;




const Footer = (): JSX.Element => {
  const screen = useMediaQuery();

  return(
    <WrapperOuter id='footer'>
      <WrapperInner>
        <TopBlock>
          {screen.big ?
            <>
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
                    404 Address Name,<br />
                    Default City,<br />
                    Unknown Country<br />
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
            </>
            :
            <>
              <ButtonWithBorder type='button' withoutPadding>FAQ</ButtonWithBorder>
              <ButtonWithBorder type='button'>CONTACT</ButtonWithBorder>
              <ButtonWithBorder type='button'>PRIVACY POLICY</ButtonWithBorder>
              <ButtonWithBorder type='button'>TERMS & CONDITIONS</ButtonWithBorder>
              <ButtonWithBorder type='button' withoutBorder>DISCLAIMER</ButtonWithBorder>
            </>
          }
        </TopBlock>


        <MiddleBlock>
          <Newsletter>
            <MainText>NEWSLETTER</MainText>
            <Input type='email'/>
          </Newsletter>

          <ConnectUs>
            {!screen.small && <MainText>CONNECT US</MainText>}
            <img src={twitter} alt='twitter' />
            <img src={pinterest} alt='pinterest' />
            <img src={youtube} alt='youtube' />
            <img src={google} alt='google' />
          </ConnectUs>
        </MiddleBlock>


        <BottomBlock>
          <Text>?? 2022 the shop. All Rights Reserved.</Text>
          <img src={paymentSystems} alt='payment systems' />
        </BottomBlock>
      </WrapperInner>
    </WrapperOuter>
  );
}




export default Footer;
