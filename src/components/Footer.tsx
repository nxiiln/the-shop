import {useState, useEffect} from 'react';
import styled from 'styled-components/macro';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';
import {HashLink} from 'react-router-hash-link';
import Button from './Button';
import {Input} from './Form';
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
  margin: 0 0 15px 0;
  font-family: var(--font-main);
  font-size: 14px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-second);
`;

const Link = styled(HashLink)`
  width: max-content;
  margin-bottom: 8px;
  display: block;
  font-family: var(--font-second);
  font-size: 10px;
  font-weight: 300;
  text-decoration: none;
  color: var(--color-text-regular);
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: var(--color-text-second);
  }
`;

const LinkWithBorder = styled(Link)<{$withoutBorder?: boolean, $withoutPadding?: boolean}>`
  height: 10px;
  margin-top: 10px;
  padding: 0 10px 0 10px;
  display: flex;
  align-items: center;

  ${props => !props.$withoutBorder &&
    'border-right: 1px solid var(--color-text-regular);'
  }

  ${props => props.$withoutPadding && 'padding-left: 0;'}
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

  > a {display: inline}
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

const Newsletter = styled.form`
  width: 50%;
  max-width: 550px;
  height: 40px;
  display: flex;
  align-items: center;

  > div:first-child {margin: 0}
  > input, button {margin-left: 3%}
  
  @media ${smallScreen} {
    width: 100%;
    justify-content: center;
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
  const [email, setEmail] = useState<string>('');
  const [submitEmail, setSubmitEmail] = useState<boolean>(false);

  useEffect((): void => {
    setTimeout((): void => setSubmitEmail(false), 2000);
  }, [submitEmail]);

  return(
    <WrapperOuter id='footer'>
      <WrapperInner>
        <TopBlock>
          {screen.big ?
            <>
              <ShoppingGuide>
                <MainText>SHOPPING GUIDE</MainText>
                <Link to='#top' smooth>ABOUT G-STAR ROW</Link>
                <Link to='#top' smooth>CORPORATE RESPONSIBILITY</Link>
                <Link to='#top' smooth>PRESS ROOM</Link>
                <Link to='#top' smooth>CAREERS</Link>
                <Link to='#top' smooth>G-START RETAILERS</Link>
                <Link to='#top' smooth>OPEN A G-STAR STORE</Link>
              </ShoppingGuide>

              <HelpInfo>
                <MainText>HELP & INFO</MainText>
                <Link to='#top' smooth>FAQ</Link>
                <Link to='#top' smooth>CONTACT</Link>
                <Link to='#top' smooth>PRIVACY POLICY</Link>
                <Link to='#top' smooth>TERMS & CONDITIONS</Link>
                <Link to='#top' smooth>DISCLAIMER</Link>
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
                  Uses <Link to='#top' smooth>read more</Link>
                </Text>
              </AboutUs>
            </>
            :
            <>
              <LinkWithBorder to='#top' smooth $withoutPadding>FAQ</LinkWithBorder>
              <LinkWithBorder to='#top' smooth>CONTACT</LinkWithBorder>
              <LinkWithBorder to='#top' smooth>PRIVACY POLICY</LinkWithBorder>
              <LinkWithBorder to='#top' smooth>TERMS & CONDITIONS</LinkWithBorder>
              <LinkWithBorder to='#top' smooth $withoutBorder>DISCLAIMER</LinkWithBorder>
            </>
          }
        </TopBlock>


        <MiddleBlock>
          <Newsletter
            noValidate
            onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
              e.preventDefault();
              if (e.currentTarget.checkValidity()) {
                setEmail('');
                setSubmitEmail(true);
              }
            }}
          >
            <MainText>NEWSLETTER</MainText>
            <Input
              type='email'
              width='40%'
              pattern='.+@.+\..+'
              required
              placeholder='your@email.com'
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setEmail(e.target.value);
              }}
            />
            <Button
              type='submit'
              variant='outline'
              width='25%'
            >
              {submitEmail ? 'you are subscribed' : 'subscribe'}
            </Button>
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
          <Text>© 2022 the shop. All Rights Reserved.</Text>
          <img src={paymentSystems} alt='payment systems' />
        </BottomBlock>
      </WrapperInner>
    </WrapperOuter>
  );
}




export default Footer;
