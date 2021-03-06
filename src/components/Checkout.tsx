import {useState} from 'react';
import styled from 'styled-components/macro';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../redux-hooks';
import BreadCrumbs from './BreadCrumbs';
import AlsoLove from './AlsoLove';
import CartCheckout from './CartCheckout';
import visaIcon from '../images/visaIcon.png';
import masterCardIcon from '../images/masterCardIcon.png';
import discoverIcon from '../images/discoverIcon.png';
import americanExpressIcon from '../images/americanExpressIcon.png';
import {ContinueShopping} from './Cart';




const WrapperOuter = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div<{empty: boolean}>`
  width: 1100px;
  max-width: 100%;
  padding: 0 1% 50px;
  display: flex;
  
  ${props => props.empty ?
   `flex-direction: column;
   
    > h2 {
      margin: 0 0 20px;
      align-self: center;
      font-family: var(--font-main);
      font-size: 24px;
      line-height: 1.2;
      font-weight: 400;
      color: var(--color-text-main);
    }

    > a {
      align-self: center;
      @media ${mediumScreen} {align-self: center}
    }`

    :

   `flex-wrap: wrap;
    justify-content: space-between;
    align-content: start;`
  }

  > article:first-child {width: 100%}

  @media ${mediumScreen}, ${smallScreen} {justify-content: center}
`;

const ButtonUnderline = styled.button`
  width: 60px;
  height: 10px;
  margin: 0px 0 0 -10px;
  font-family: var(--font-regular);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  text-decoration: underline;
  color: var(--color-text-main);
  background: transparent;
  border: none;
  cursor: pointer;
`;


// Steps
const Steps = styled.article`
  width: 675px;
  @media ${mediumScreen}, ${smallScreen} {width: 100%}
`;

const TitleWrapperOuter = styled.div<{status: boolean}>`
  width: 675px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-border);
  
  ${props => !props.status && `
    margin-bottom: 10px;
    background: var(--color-background-highlight);
  `}

  @media ${mediumScreen}, ${smallScreen} {width: 100%}
`;

const TitleWrapperInner = styled.div`
  width: 94%;
  height: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span<{status: boolean}>`
  font-family: var(--font-main);
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: ${props => props.status ?
    'var(--color-text-main)' : 'var(--color-text-regular)'
  };
`;

const Required = styled.span`
  font-family: var(--font-regular);
  font-size: 11px;
  font-weight: 400;
  color: var(--color-text-main);
`;

const Label = styled.label`
  font-family: var(--font-second);
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-text-main);
`;

const ButtonBlack = styled.button`
  width: 144px;
  height: 30px;
  font-family: var(--font-second);
  font-size: 10px;
  font-weight: 300;
  color: var(--color-text-second);
  background: var(--color-background-second);
  border: none;
  cursor: pointer;

  &:hover {background: var(--color-button-solid-hover)}
`;


// Step1
const Step1 = styled.div`
  width: 675px;
  height: 345px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid var(--color-border);
  border-top: none;

  > div:first-child {
    width: 255px;
    height: 225px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > form {
      width: 255px;
      height: 158px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: baseline;
      align-content: space-between;
    }
  }

  > div:last-child {
    width: 220px;
    height: 225px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > form {
      width: 144px;
      height: 102px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  @media ${mediumScreen}, ${smallScreen} {width: 100%}

  @media ${smallScreen} {
    height: 600px;
    flex-direction: column;
  }
`;

const LabelText1 = styled(Label)`
  height: 45px;
  display: grid;
  align-content: space-between;

  > input {
    width: 254px;
    height: 30px;
    border: 1px solid var(--color-border);

    &:focus {outline: 1px solid #000}
  }
`;

const LabelRadio1 = styled(Label)`
  height: 14px;
  display: flex;
  align-items: end;

  > input {
    margin: 0 10px 0 0;
    accent-color: var(--color-text-main);
  }
`;

const TextUp = styled.span`
  font-family: var(--font-second);
  font-size: 13px;
  font-weight: 300;
  color: var(--color-text-main);
`;

const Text = styled.p`
  font-family: var(--font-regular);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);
`;

const TextBold = styled.span`
  font-family: var(--font-regular);
  font-size: 11px;
  font-weight: 700;
  color: var(--color-text-main);
`;

const PasswordHelp = styled(ButtonUnderline)`
  width: 90px;
`;


// Step2
const Step2 = styled.div`
  width: 675px;
  height: 656px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-border);
  border-top: none;

  @media ${mediumScreen}, ${smallScreen} {width: 100%}
  @media ${smallScreen} {height: 1100px}
`;

const Step2Form = styled.form`
  width: 608px;
  height: 595px;

  @media ${smallScreen} {
    width: 290px;
    height: auto;
  }
`;

const Step2FormWrapper = styled.div`
  width: 605px;
  height: 410px;
  margin-bottom: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: space-between;

  @media ${smallScreen} {
    width: 290px;
    height: 850px;
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;

const LabelText2 = styled(Label)`
  height: 45px;
  display: grid;
  align-content: space-between;

  > input {
    width: 289px;
    height: 30px;
    border: 1px solid var(--color-border);
    
    &:focus {outline: 1px solid #000}
  }
`;

const LabelRadio2 = styled(Label)`
  height: 14px;
  margin-bottom: 15px;
  display: flex;
  align-items: end;

  > input {
    margin: 0 15px 0 0;
    accent-color: var(--color-text-main);
  }
`;

const LabelCheckbox = styled(Label)`
  height: 18px;
  display: flex;
  margin: 33px 0 33px 0;
  align-items: center;

  > input {
    margin: 0 10px 0 0;
    accent-color: var(--color-text-main);
  }
`;


// Step3
const Step3 = styled.div`
  width: 675px;
  height: 286px;
  margin-bottom: 10px;
  border: 1px solid var(--color-border);
  border-top: none;

  > form {
    width: 430px;
    height: 220px;
    position: relative;
    top: 30px;
    left: 25px;

    @media ${smallScreen} {width: 250px}

    > span {
      display: inline-block;
      margin-bottom: 38px;
      font-family: var(--font-second);
      font-size: 13px;
      font-weight: 400;
      color: var(--color-text-main);

      @media ${smallScreen} {width: 250px}
    }

    > label:nth-child(5) {margin-bottom: 30px}
  }

  @media ${mediumScreen}, ${smallScreen} {width: 100%}
`;

const LabelRadio3 = styled(Label)`
  height: 14px;
  margin-bottom: 15px;
  display: flex;
  align-items: end;

  > input {
    margin: 0 15px 0 0;
    accent-color: var(--color-text-main);
  }
`;


// Step4
const Step4 = styled.div`
  width: 675px;
  height: 356px;
  margin-bottom: 10px;
  border: 1px solid var(--color-border);
  border-top: none;

  > form {
    width: 270px;
    height: 298px;
    position: relative;
    top: 30px;
    left: 25px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
  }

  @media ${mediumScreen}, ${smallScreen} {width: 100%}
`;

const Icons = styled.div`
  width: 217px;
  height: 32px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LabelText4 = styled(Label)`
  height: 45px;
  margin-bottom: 17px;
  display: grid;
  align-content: space-between;

  > input {
    width: 269px;
    height: 30px;
    border: 1px solid var(--color-border);
    
    &:focus {outline: 1px solid #000}
  }
`;

const DatalistWrapper4 = styled.div`
  width: 160px;
  height: 45px;
  margin-bottom: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  > span {
    font-family: var(--font-second);
    font-size: 10px;
    font-weight: 300;
    color: var(--color-text-main);
  }

  > input {
    width: 77px;
    height: 30px;
    font-family: var(--font-second);
    font-size: 10px;
    line-height: 1.2;
    font-weight: 300;
    color: var(--color-text-main);
    border: 1px solid var(--color-border);
    
    &:focus {outline: 1px solid #000}
  }
`;

const Cvv = styled(Label)`
  height: 45px;
  margin-left: 24px;
  display: grid;
  align-content: space-between;
  
  > input {
    width: 84px;
    height: 30px;
    border: 1px solid var(--color-border);
    
    &:focus {outline: 1px solid #000}
  }
`;


// Step5
const Step5 = styled.div`
  width: 675px;
  border: 1px solid var(--color-border);
  border-top: none;

  > div {
    padding: 30px 0 30px 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    > p {
      margin: 0 0 10px;
      font-family: var(--font-second);
      font-size: 10px;
      line-height: 18px;
      font-weight: 400;
      text-transform: uppercase;
      color: var(--color-text-main);
      @media ${smallScreen} {width: 260px}
    }
  }

  @media ${mediumScreen}, ${smallScreen} {width: 100%}
`;

const OrderNow = styled(ButtonBlack)`
  width: 291px;
  @media ${smallScreen} {width: 260px}
`;




const Checkout = (): JSX.Element => {
  const [step, setStep] = useState<number>(1);
  const screen = useMediaQuery();
  const cart = useAppSelector(state => state.cart);


  return(
    <WrapperOuter>
      <WrapperInner empty={cart.length === 0}>
        <BreadCrumbs
          link={
            <>
              <Link to='/'>Home</Link>
              <span>/</span>
              <span>Checkout</span>
            </>
          }
          marginBottom='20px'
        />

        {cart.length > 0 ?
          <>
            {screen.big ? <AlsoLove /> : <CartCheckout />}

            <Steps>
              <TitleWrapperOuter status={step === 1}>
                <TitleWrapperInner>
                  <Title status={step === 1}>01. CHECKOUT</Title>
                  {step === 1 && <Required>*Required</Required>}
                </TitleWrapperInner>
              </TitleWrapperOuter>

              {step === 1 &&
                <Step1>
                  <div>
                    <TextUp>REGISTERED CUSTOMERS</TextUp>
                    <Text>
                      <TextBold>Already registered? </TextBold>
                      Please log in below:
                    </Text>

                    <form onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
                      e.preventDefault();
                      setStep(2);
                    }}
                    >
                      <LabelText1>
                        E-MAIL*
                        <input type='email' required />
                      </LabelText1>

                      <LabelText1>
                        PASSWORD*
                        <input type='password' required />
                      </LabelText1>

                      <ButtonBlack>LOG IN & CHECKOUT</ButtonBlack>
                      <PasswordHelp type='button'>Password Help</PasswordHelp>
                    </form>
                  </div>
                  
                  <div>
                    <TextUp>NEW CUSTOMERS</TextUp>
                    <TextBold>Register and save time!</TextBold>
                    <Text>
                      Register with us for future convenience:<br />
                      Fast and easy check out<br />
                      Easy access to your order history and status
                    </Text>

                    <form onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
                      e.preventDefault();
                      setStep(2);
                    }}>
                      <LabelRadio1>
                        <input type='radio' name='new-customer' value='register'/>
                        REGISTER
                      </LabelRadio1>

                      <LabelRadio1>
                        <input type='radio' name='new-customer' value='checkout-as-guest' defaultChecked />
                        CHECKOUT AS GUEST
                      </LabelRadio1>                  
                      <ButtonBlack>CONTINUE</ButtonBlack>
                    </form>
                  </div>
                </Step1>
              }


              <TitleWrapperOuter status={step === 2}>
                <TitleWrapperInner>
                  <Title status={step === 2}>02. BILLING INFO</Title>
                  {step === 2 && <Required>*Required</Required>}
                </TitleWrapperInner>
              </TitleWrapperOuter>

              {step === 2 &&
                <Step2>
                  <Step2Form onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
                    e.preventDefault();
                    setStep(3);
                  }}>
                    <Step2FormWrapper>
                      <LabelText2>
                        FIRST NAME*
                        <input type='text' required />
                      </LabelText2>

                      <LabelText2>
                        LAST NAME*
                        <input type='text' required />
                      </LabelText2>

                      <LabelText2>
                        COMPANY
                        <input type='text' />
                      </LabelText2>

                      <LabelText2>
                        E-MAIL ADDRESS*
                        <input type='text' required />
                      </LabelText2>

                      <LabelText2>
                        ADDRESS 1
                        <input type='text' />
                      </LabelText2>

                      <LabelText2>
                        ADDRESS 2
                        <input type='text' />
                      </LabelText2>

                      <LabelText2>
                        COUNTRY
                        <input list='countries' />
                      </LabelText2>
                      <datalist id='countries'>
                        <option value='Russia' />
                        <option value='UK' />
                        <option value='USA' />
                      </datalist>

                      <LabelText2>
                        CITY
                        <input type='text' />
                      </LabelText2>

                      <LabelText2>
                        STATE
                        <input type='text' />
                      </LabelText2>

                      <LabelText2>
                        ZIP / POSTAL CODE*
                        <input type='text' required />
                      </LabelText2>

                      <LabelText2>
                        PHONE
                        <input type='text' />
                      </LabelText2>

                      <LabelText2>
                        FAX
                        <input type='text' />
                      </LabelText2>

                      <LabelText2>
                        PASSWORD*
                        <input
                          type='text'
                          required
                        />
                      </LabelText2>

                      <LabelText2>
                        CONFIRM PASSWORD*
                        <input
                          type='text'
                          required
                        />
                      </LabelText2>
                    </Step2FormWrapper>

                    <LabelRadio2>
                      <input type='radio' name='shipping' value='this' defaultChecked />
                      SHIP TO THIS ADDRESS
                    </LabelRadio2>

                    <LabelRadio2>
                      <input type='radio' name='shipping' value='different' />
                      SHIP TO DIFFERENT ADDRESS
                    </LabelRadio2>

                    <LabelCheckbox>
                      <input type='checkbox' name='subscribe-newsletter' defaultChecked />
                      I WANT TO SUBSCRIBE TO THE NEWSLETTER
                    </LabelCheckbox>

                    <ButtonBlack>CONTINUE</ButtonBlack>
                  </Step2Form>
                </Step2>
              }


              <TitleWrapperOuter status={step === 3}>
                <TitleWrapperInner>
                  <Title status={step === 3}>03. SHIPPING METHOD</Title>
                  {step === 3 && <Required>*Required</Required>}
                </TitleWrapperInner>
              </TitleWrapperOuter>

              {step === 3 &&
                <Step3>
                  <form onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
                    e.preventDefault();
                    setStep(4);
                  }}>
                    <span>PLEASE CHOOSE A SHIPPING METHOD TO DELIVERY YOUR ORDER:</span>

                    <LabelRadio3>
                      <input type='radio' name='shipping-method' value='ground' defaultChecked />
                      UPS (GROUND) $7.25
                    </LabelRadio3>

                    <LabelRadio3>
                      <input type='radio' name='shipping-method' value='3-day-select' />
                      UPS (3 DAY SELECT) $9.75
                    </LabelRadio3>

                    <LabelRadio3>
                      <input type='radio' name='shipping-method' value='next-day-air' />
                      UPS (NEXT DAY AIR) $17.25
                    </LabelRadio3>

                    <LabelRadio3>
                      <input type='radio' name='shipping-method' value='second-day-air' />
                      UPS (SECOND DAY AIR) $12.25
                    </LabelRadio3>

                    <ButtonBlack>CONTINUE</ButtonBlack>
                  </form>
                </Step3>
              }


              <TitleWrapperOuter status={step === 4}>
                <TitleWrapperInner>
                  <Title status={step === 4}>04. PAYMENT</Title>
                  {step === 4 && <Required>*Required</Required>}
                </TitleWrapperInner>
              </TitleWrapperOuter>

              {step === 4 &&
                <Step4>
                  <form onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
                    e.preventDefault();
                    setStep(5);
                  }}>
                    <Icons>
                      <img src={visaIcon} alt='visaIcon' />
                      <img src={masterCardIcon} alt='masterCardIcon' />
                      <img src={discoverIcon} alt='discoverIcon' />
                      <img src={americanExpressIcon} alt='americanExpressIcon' />
                    </Icons>

                    <LabelText4>
                      CARD HOLDER*
                      <input type='text' required />
                    </LabelText4>

                    <LabelText4>
                      CARD NUMBER*
                      <input type='text' required />
                    </LabelText4>

                    <DatalistWrapper4>
                      <span>EXPIRATION DATE*</span>

                      <input list='month' required />
                      <datalist id='month'>
                        <option value='01' />
                        <option value='02' />
                        <option value='03' />
                        <option value='04' />
                        <option value='05' />
                        <option value='06' />
                        <option value='07' />
                        <option value='08' />
                        <option value='09' />
                        <option value='10' />
                        <option value='11' />
                        <option value='12' />
                      </datalist>

                      <input list='year' required />
                      <datalist id='year'>
                        <option value='22' />
                        <option value='23' />
                        <option value='24' />
                        <option value='25' />
                      </datalist>
                    </DatalistWrapper4>

                    <Cvv>
                      CVV*
                      <input type='text' required />
                    </Cvv>

                    <ButtonBlack>CONTINUE</ButtonBlack>
                  </form>
                </Step4>
              }


              <TitleWrapperOuter status={step === 5}>
                <TitleWrapperInner>
                  <Title status={step === 5}>05. ORDER REVIEW</Title>
                  {step === 5 && <Required>*Required</Required>}
                </TitleWrapperInner>
              </TitleWrapperOuter>

              {step === 5 &&
                <Step5>
                  <div>
                    <p>
                      Please review all the information on this page.<br />
                      Press the order now button to confirm your purchase.
                    </p>
                    <OrderNow type='button'>ORDER NOW</OrderNow>
                  </div>
                </Step5>
              }
            </Steps>


            {screen.big && <CartCheckout />}
          </>

          :

          <>
            <h2>NO SELECTED PRODUCTS</h2>
            <ContinueShopping to='/catalog#top'>CONTINUE SHOPPING</ContinueShopping>
          </>
        }
      </WrapperInner>
    </WrapperOuter>
  )
}




export default Checkout;
