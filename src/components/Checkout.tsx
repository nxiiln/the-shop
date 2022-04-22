import React, {useState} from 'react';
import styled from 'styled-components/macro';
import BreadCrumbs from './BreadCrumbs';
import AlsoLove from './AlsoLove';
import CartCheckout from './CartCheckout';
import visaIcon from '../images/visaIcon.png';
import masterCardIcon from '../images/masterCardIcon.png';
import discoverIcon from '../images/discoverIcon.png';
import americanExpressIcon from '../images/americanExpressIcon.png';




const WrapperOuter = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 960px;
  height: 1740px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: start;

  article:first-child {
    width: 960px;
  }
`;

const ButtonUnderline = styled.button`
  width: 60px;
  height: 10px;
  margin: 0px 0 0 -10px;
  font-family: Arial;
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  text-decoration: underline;
  color: #000;
  background: transparent;
  border: none;
  cursor: pointer;
`;


//Steps------------------------------------------
const Steps = styled.article`
  width: 675px;
  height: 1200px;
`;

type Status = {status: boolean};

const TitleWrapperOuter = styled.div<Status>`
  width: 675px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e4e2e1;
  ${props => !props.status &&
    `margin-bottom: 10px;
     background: #f7f7f7;`
  }
`;

const TitleWrapperInner = styled.div`
  width: 630px;
  height: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span<Status>`
  font-family: 'Playfair Display SC';
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: ${props => props.status ? '#000' : '#aaa'};
`;

const Required = styled.span`
  font-family: Arial;
  font-size: 11px;
  font-weight: 400;
  color: #000;
`;

const Label = styled.label`
  font-family: Nunito;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  color: #000;
`;

const ButtonBlack = styled.button`
  width: 144px;
  height: 30px;
  font-family: Nunito;
  font-size: 10px;
  font-weight: 300;
  color: #fff;
  background: #000;
  border: none;
  cursor: pointer;
`;
//-----------------------------------------------


//Step1------------------------------------------
const Step1 = styled.div`
  width: 675px;
  height: 345px;
  margin-bottom: 10px;
  position: relative;
  border: 1px solid #e4e2e1;
  border-top: none;

  div:first-child {
    width: 255px;
    height: 225px;
    position: absolute;
    top: 38px;
    left: 25px;
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

  div:last-child {
    width: 220px;
    height: 225px;
    position: absolute;
    top: 38px;
    left: 395px;
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
`;

const LabelText1 = styled(Label)`
  height: 45px;
  display: grid;
  align-content: space-between;
  > input {
    width: 254px;
    height: 30px;
    border: 1px solid #e4e2e1;
    :focus {
      outline: 1px solid #000;
    }
  }
`;

const LabelRadio1 = styled(Label)`
  height: 14px;
  display: flex;
  align-items: end;
  > input {
    margin: 0 10px 0 0;
    accent-color: #000;
  }
`;

const TextUp = styled.span`
  font-family: Nunito;
  font-size: 13px;
  font-weight: 300;
  color: #000;
`;

const Text = styled.p`
  font-family: Arial;
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  color: #000;
`;

const TextBold = styled.span`
  font-family: Arial;
  font-size: 11px;
  font-weight: 700;
  color: #000;
`;

const PasswordHelp = styled(ButtonUnderline)`
  width: 90px;
`;
//-----------------------------------------------


//Step2------------------------------------------
const Step2 = styled.div`
  width: 675px;
  height: 656px;
  margin-bottom: 10px;
  border: 1px solid #e4e2e1;
  border-top: none;
`;

const Step2Form = styled.form`
  width: 608px;
  height: 595px;
  position: relative;
  top: 38px;
  left: 26px;
`;

const Step2FormWrapper = styled.div`
  width: 605px;
  height: 410px;
  margin-bottom: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: space-between;
`;

const LabelText2 = styled(Label)`
  height: 45px;
  display: grid;
  align-content: space-between;
  > input {
    width: 289px;
    height: 30px;
    border: 1px solid #e4e2e1;
    :focus {
      outline: 1px solid #000;
    }
  }
`;

const LabelRadio2 = styled(Label)`
  height: 14px;
  margin-bottom: 15px;
  display: flex;
  align-items: end;
  > input {
    margin: 0 15px 0 0;
    accent-color: #000;
  }
`;

const LabelCheckbox = styled(Label)`
  height: 18px;
  display: flex;
  margin: 33px 0 33px 0;
  align-items: center;
  > input {
    margin: 0 10px 0 0;
    accent-color: #000;
  }
`;
//-----------------------------------------------


//Step3------------------------------------------
const Step3 = styled.div`
  width: 675px;
  height: 286px;
  margin-bottom: 10px;
  border: 1px solid #e4e2e1;
  border-top: none;
  > form {
    width: 430px;
    height: 220px;
    position: relative;
    top: 30px;
    left: 25px;
    > span {
      display: inline-block;
      margin-bottom: 38px;
      font-family: Nunito;
      font-size: 13px;
      font-weight: 400;
      color: #000;
    }
    > label:nth-child(5) {
      margin-bottom: 30px;
    }
  }
`;

const LabelRadio3 = styled(Label)`
  height: 14px;
  margin-bottom: 15px;
  display: flex;
  align-items: end;
  > input {
    margin: 0 15px 0 0;
    accent-color: #000;
  }
`;
//-----------------------------------------------


//Step4------------------------------------------
const Step4 = styled.div`
  width: 675px;
  height: 356px;
  margin-bottom: 10px;
  border: 1px solid #e4e2e1;
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
    border: 1px solid #e4e2e1;
    :focus {
      outline: 1px solid #000;
    }
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
    font-family: Nunito;
    font-size: 10px;
    font-weight: 300;
    color: #000;
  }
  > input {
    width: 77px;
    height: 30px;
    font-family: Nunito;
    font-size: 10px;
    line-height: 1.2;
    font-weight: 300;
    color: #000;
    border: 1px solid #e4e2e1;
    :focus {
      outline: 1px solid #000;
    }
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
    border: 1px solid #e4e2e1;
    :focus {
      outline: 1px solid #000;
    }
  }
`;
//-----------------------------------------------


//Step5------------------------------------------
const Step5 = styled.div`
  width: 675px;
  height: 151px;
  border: 1px solid #e4e2e1;
  border-top: none;
  > div {
    width: 328px;
    height: 88px;
    position: relative;
    top: 30px;
    left: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > p {
      margin: 0;
      font-family: Nunito;
      font-size: 10px;
      line-height: 18px;
      font-weight: 400;
      text-transform: uppercase;
      color: #000;
    }
  }
`;

const OrderNow = styled(ButtonBlack)`
  width: 291px;
`;
//-----------------------------------------------




const Checkout = (): JSX.Element => {
  const [step, setStep] = useState<number>(1);


  return(
    <WrapperOuter>
      <WrapperInner>
        <BreadCrumbs
          link={
            <>
              <a href='#'>Home</a>
              <span>/</span>
              <span>Checkout</span>
            </>
          }
          return='#'
          marginBottom='20px'
          gridArea=''
        />


        <AlsoLove />


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


        <CartCheckout />
      </WrapperInner>
    </WrapperOuter>
  )
}




export default Checkout;
