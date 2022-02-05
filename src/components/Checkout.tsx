import React, {useState} from 'react';
import QuickView from './QuickView';
import styled from 'styled-components';
import alsoLove1 from '../images/alsoLove1.png';
import alsoLove2 from '../images/alsoLove2.png';
import alsoLove3 from '../images/alsoLove3.png';
import cartProductA from '../images/cartProductA.png';
import cartProductB from '../images/cartProductB.png';
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
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 10px;
  background: #aaa;
`;

const BreadCrumbsWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
`;

const BreadCrumbs = styled.button`
  font-family: Arial;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 400;
  color: #aaa;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const BreadCrumbsLeft = styled(BreadCrumbs)`
  width: 68px;
  height: 10px;
`;

const BreadCrumbsRight = styled(BreadCrumbs)`
  width: 130px;
  height: 10px;
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


//Also Love--------------------------------------
const AlsoLove = styled.article`
  width: 960px;
  height: 296px;
  margin-bottom: 30px;
  position: relative;
  background-color: #f7f7f7;
  border: 1px solid #e4e2e1;
  > span:first-child {
    position: relative;
    top: 25px;
    left: 22px;
    font-family: 'Playfair Display SC';
    font-size: 21px;
    font-weight: 400;
    color: #000;
  }
`;

const AlsoLoveClose = styled.button`
  width: 29px;
  height: 29px;
  position: absolute;
  top: 10px;
  right: 10px;
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

const ProductAlsoWrapper = styled.div`
  width: 890px;
  height: 190px;
  position: absolute;
  top: 75px;
  left: 25px;
  display: flex;
  justify-content: space-between;
`;

const ProductAlso = styled.div`
  width: 260px;
  height: 190px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  > span:nth-child(2) {
    width: 115px;
    margin: 0 0 20px 10px;
    font-family: 'Playfair Display SC';
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    text-transform: uppercase;
    color: #000;
  }
  > span:nth-child(3) {
    margin: 0 0 25px 10px;
    font-family: Nunito;
    font-size: 12px;
    line-height: 1.2;
    font-weight: 300;
    color: #000;
  }
`;

const ButtonQuickView = styled.button`
  width: 107px;
  height: 30px;
  margin-left: 10px;
  font-family: Nunito;
  font-size: 10px;
  color: #000;
  background: #fff;
  border: 1px solid #e4e2e1;
  cursor: pointer;
`;
//-----------------------------------------------


//Cart-------------------------------------------
const Cart = styled.article`
  width: 275px;
  height: min-content;
  border: 1px solid #e4e2e1;
  > span {
    width: 100%;
    height: 50px;
    padding: 7px 0 0 17px;
    display: inline-block;
    font-family: 'Playfair Display SC';
    font-size: 24px;
    font-weight: 400;
    color: #000;
  }
`;

const ProductWrapper = styled.div`
  width: 100%;
  height: 135px;
  margin-bottom: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
`;

const Product = styled.div`
  width: 240px;
  height: 110px;
  display: grid;
  grid-template-columns: 92px 99px 35px 1fr;
  grid-template-rows: repeat(12, 9.167px);
  span {
    font-family: Nunito;
    font-size: 10px;
    line-height: 12px;
    font-weight: 400;
    text-transform: uppercase;
    color: #000;
  }
  img:nth-child(1) {
    height: 100%;
    grid-area: 1 / 1 / 13 / 2;
  }
  span:nth-child(2) {grid-area: 1 / 2 / 3 / 3;}
  span:nth-child(3) {grid-area: 4 / 2 / 5 / 3;}
  span:nth-child(4) {grid-area: 6 / 2 / 7 / 3;}
  span:nth-child(5) {grid-area: 8 / 2 / 9 / 3;}
  button:nth-child(6) {grid-area: 11 / 2 / 12 / 3;}
  button:nth-child(7) {grid-area: 1 / 4 / 2 / 5;}
  span:nth-child(8) {
    grid-area: 11 / 3 / 12 / 4;
    font-size: 12px;
  }
`;

const X = styled.button`
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  background: transparent;
  border: none;
  transform: rotate(45deg);
  cursor: pointer;
`;

const TotalWrapper = styled.div`
  width: 100%;
  height: 135px;
  margin-top: -6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Total = styled.div`
  width: 245px;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(10, 10px);
  span {
    font-family: Nunito;
    font-size: 12px;
    line-height: 1.2;
    font-weight: 300;
    text-transform: uppercase;
    color: #000;
  }
  span:nth-child(even) {justify-self: end;}
  span:nth-child(3) {grid-area: 3 / 1 / 4 / 2;}
  span:nth-child(4) {grid-area: 3 / 2 / 4 / 3;}
  span:nth-child(5) {grid-area: 5 / 1 / 6 / 2;}
  span:nth-child(6) {grid-area: 5 / 2 / 6 / 3;}
  span:nth-child(7) {
    grid-area: 9 / 1 / 11 / 2;
    align-self: end;
    font-size: 13px;
    font-weight: 700;
  }
  span:nth-child(8) {
    grid-area: 9 / 2 / 11 / 3;
    align-self: end;
    font-size: 13px;
    font-weight: 700;
  }
`;
//-----------------------------------------------


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

  interface ProductAlso {
    id: number;
    image: string;
    name: string;
    price: number;
  }

  const productsAlso: ProductAlso[] = [
    {
      id: 1,
      image: alsoLove1,
      name: 'detailed swing dress',
      price: 1875
    },
    {
      id: 2,
      image: alsoLove2,
      name: 'detailed swing dress',
      price: 850
    },
    {
      id: 3,
      image: alsoLove3,
      name: 'detailed swing dress',
      price: 875
    }
  ];


  interface Product {
    id: number;
    status: boolean;
    image: string;
    name: string;
    color: string;
    size: number;
    qty: number;
    price: number;
    amount(): number;
  }

  const initialProducts: Product[] = [
    {
      id: 1,
      status: true,
      image: cartProductA,
      name: 'detailed swing dress',
      color: 'yellow',
      size: 12,
      qty: 1,
      price: 275,
      amount() {return this.price * this.qty}
    },
    {
      id: 2,
      status: true,
      image: cartProductB,
      name: 'detailed swing dress',
      color: 'blue',
      size: 14,
      qty: 1,
      price: 325,
      amount() {return this.price * this.qty}
    }
  ]


  const [alsoLove, setAlsoLove] = useState<boolean>(true);
  const [quickView, setQuickView] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [step, setStep] = useState<number>(1);

  const subtotal: number = products
    .map((product: Product): number => +product.status && product.amount())
    .reduce((prev: number, curr: number): number => prev + curr);


  return(
    <WrapperOuter>
      <WrapperInner>
        <Line />
        <BreadCrumbsWrapper>
          <BreadCrumbsLeft type='button'>
            Home / Cart
          </BreadCrumbsLeft>
          <BreadCrumbsRight type='button'>
            {'<'} Return to Previous Page
          </BreadCrumbsRight>
        </BreadCrumbsWrapper>


        {alsoLove && 
          <AlsoLove>
            <span>YOU WILL ALSO LOVE</span>
            <AlsoLoveClose
              type='button'
              onClick={(): void => setAlsoLove(false)}
            >
              <span>+</span>
            </AlsoLoveClose>
            <ProductAlsoWrapper>
              {productsAlso.map((product: ProductAlso): JSX.Element => {
                return(
                  <ProductAlso key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <span>{product.name}</span>
                    <span>
                      ${product.price.toString().replace(/(.+)(...)$/, '$1,$2')}
                    </span>
                    <ButtonQuickView
                      type='button'
                      onClick={(): void => setQuickView(true)}
                    >
                      QUICKVIEW
                    </ButtonQuickView>
                  </ProductAlso>
                )
              })}
            </ProductAlsoWrapper>
            {quickView && <QuickView />}
          </AlsoLove>
        }


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


        <Cart>
          <span>CART</span>
          {products.map((product: Product): false | JSX.Element => {
            return(product.status &&
              <ProductWrapper key={product.id}>
                <Product>
                  <img src={product.image} alt={product.name} />
                  <span>{product.name}</span>
                  <span>color: {product.color}</span>
                  <span>size: {product.size}</span>
                  <span>qty: {product.qty}</span>
                  <ButtonUnderline type='button'>Edit Item</ButtonUnderline>
                  <X
                    type='button'
                    onClick={(): void => {
                      const newProducts: Product[] = [...products];
                      const currIndex: number = products.indexOf(product);
                      newProducts[currIndex].status = false;
                      setProducts(newProducts);
                    }}
                  >
                    +
                  </X>
                  <span>${product.price}</span>
                </Product>
              </ProductWrapper>
            )
          })}
          <TotalWrapper>
            <Total>
              <span>subtotal</span>
              <span>${subtotal}</span>
              <span>delivery costs</span>
              <span>${subtotal && 35}</span>
              <span>gift voucher</span>
              <span>${subtotal && 5}</span>
              <span>total inc tax</span>
              <span>${subtotal && subtotal + 35 - 5}</span>
            </Total>
          </TotalWrapper>
        </Cart>
      </WrapperInner>
    </WrapperOuter>
  )
}




export default Checkout;
