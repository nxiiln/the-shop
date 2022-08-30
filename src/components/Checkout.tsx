import {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';
import {Link} from 'react-router-dom';

import {useAppSelector, useAppDispatch} from '../redux-hooks';
import {checkoutSetStep, checkoutSetStep2Complete, checkoutSetStep4Complete} from '../slices/checkout';
import {cartReset} from '../slices/cart';

import {TAccount} from '../types/TAccount';
import BreadCrumbs from './BreadCrumbs';
import AlsoLove from './AlsoLove';
import CartCheckout from './CartCheckout';
import {LabelText, LabelRadio, LabelError} from './Labels';
import CheckoutStep1 from './CheckoutStep1';

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


// Steps
const Steps = styled.article`
  width: 675px;
  @media ${mediumScreen}, ${smallScreen} {width: 100%}
`;

const TitleWrapper = styled.div<{status: boolean, off?: boolean}>`
  width: 675px;
  height: 50px;
  padding: 0 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--color-border);
  user-select: none;
  ${props => !props.off && 'cursor: pointer;'}
  
  ${props => !props.status && `
    margin-bottom: 10px;
    background: var(--color-background-highlight);
  `}

  @media ${mediumScreen}, ${smallScreen} {width: 100%}
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


// Step2
const Step2 = styled.div`
  width: 675px;
  height: 500px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-border);
  border-top: none;

  @media ${mediumScreen}, ${smallScreen} {width: 100%}
  @media ${smallScreen} {height: 750px}
`;

const Step2Form = styled.form`
  width: 608px;
  height: auto;

  > button {margin-left: calc(50% - 144px / 2)}

  @media ${smallScreen} {
    width: 290px;
    height: auto;
  }
`;

const Step2FormWrapper = styled.div`
  width: 605px;
  height: 320px;
  margin-bottom: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: space-between;

  @media ${smallScreen} {
    width: 290px;
    height: 550px;
    margin-bottom: 50px;
    flex-wrap: nowrap;
    flex-direction: column;
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
  width: 270px;
  height: 32px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExpirationWrapper = styled.div`
  width: 160px;
  height: 60px;
  position: relative;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: end;

  > span:first-child {
    font-family: var(--font-second);
    font-size: 10px;
    font-weight: 300;
    color: var(--color-text-main);
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
  const cart = useAppSelector(state => state.cart);
  const activeAccountId: number = useAppSelector(
    state => state.account.accounts
      .findIndex((account: TAccount): boolean => account.isActive)
  ); // 5
  
  const screen = useMediaQuery();
  const dispatch = useAppDispatch();
  
  const checkoutStep = useAppSelector(state => state.checkout.step);
  const step: number = (checkoutStep === 0) ? (activeAccountId === -1 ? 1 : 3) : checkoutStep;

  const step2Complete = useAppSelector(state => state.checkout.step2Complete);
  const step4Complete = useAppSelector(state => state.checkout.step4Complete);

  const [email, setEmail] = useState<string>(''); // 1 2
  const [emailError, setEmailError] = useState<boolean>(false); // 1 2

  const [firstName, setFirstName] = useState<string>(''); // 2
  const [firstNameError, setFirstNameError] = useState<boolean>(false); // 2
  const [lastName, setLastName] = useState<string>(''); // 2
  const [lastNameError, setLastNameError] = useState<boolean>(false); // 2

  const [address1, setAddress1] = useState<string>(''); // 2
  const [address2, setAddress2] = useState<string>(''); // 2
  const [country, setCountry] = useState<string>(''); // 2
  const [city, setCity] = useState<string>(''); // 2
  const [zip, setZip] = useState<string>(''); // 2
  const [zipError, setZipError] = useState<boolean>(false); // 2

  const [shippingMethod, setShippingMethod] = useState<string>('ground'); // 3

  const [cardHolder, setCardHolder] = useState<string>(''); // 4
  const [cardHolderError, setCardHolderError] = useState<boolean>(false); // 4
  const [cardNumber, setCardNumber] = useState<string>(''); // 4
  const [cardNumberError, setCardNumberError] = useState<boolean>(false); // 4

  const [expirationMonth, setExpirationMonth] = useState<string>(''); // 4
  const [expirationMonthError, setExpirationMonthError] = useState<boolean>(false); // 4
  const [expirationYear, setExpirationYear] = useState<string>(''); // 4
  const [expirationYearError, setExpirationYearError] = useState<boolean>(false); // 4
  const [cvv, setCvv] = useState<string>(''); // 4
  const [cvvError, setCvvError] = useState<boolean>(false); // 4

  const [orderPaid, setOrderPaid] = useState<boolean>(false); // 5

  type TForm = React.FormEvent<HTMLFormElement>;
  type TChange = React.ChangeEvent<HTMLInputElement>;
  type TFocus = React.FocusEvent<HTMLInputElement>;


  useEffect((): void => {
    if (step2Complete && step4Complete) {
      setTimeout((): void => setOrderPaid(false), 2000);
    }
  }, [orderPaid]); // 5


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
              <TitleWrapper
                status={step === 1}
                off={activeAccountId !== -1}
                onClick={(): void => {
                  activeAccountId === -1 && dispatch(checkoutSetStep(1));
                }}
              >
                <Title status={step === 1}>01. CHECKOUT</Title>
                {step === 1 && <Required>*Required</Required>}
              </TitleWrapper>

              {step === 1 && <CheckoutStep1 />}


              <TitleWrapper
                status={step === 2}
                off={activeAccountId !== -1}
                onClick={(): void => {
                  activeAccountId === -1 && dispatch(checkoutSetStep(2));
                }}
              >
                <Title status={step === 2}>02. BILLING INFO</Title>
                {step === 2 && <Required>*Required</Required>}
              </TitleWrapper>

              {step === 2 &&
                <Step2>
                  <Step2Form
                    noValidate
                    onSubmit={(e: TForm): void => {
                      e.preventDefault();
                      if (e.currentTarget.checkValidity()) {
                        dispatch(checkoutSetStep2Complete(true));
                        dispatch(checkoutSetStep(3))
                      }
                    }}
                  >
                    <Step2FormWrapper>
                      <LabelText
                        inputWidth='290px'
                        error={firstNameError}
                      >
                        FIRST NAME*
                        <input
                          type='text'
                          required
                          value={firstName}
                          onChange={(e: TChange): void => {
                            setFirstName(e.target.value);
                            e.target.validity.valid && setFirstNameError(false);
                          }}
                          onInvalid={(): void => setFirstNameError(true)}
                        />
                        <LabelError>{firstNameError && 'Enter first name'}</LabelError>
                      </LabelText>

                      <LabelText
                        inputWidth='290px'
                        error={lastNameError}
                      >
                        LAST NAME*
                        <input
                          type='text'
                          required
                          value={lastName}
                          onChange={(e: TChange): void => {
                            setLastName(e.target.value);
                            e.target.validity.valid && setLastNameError(false);
                          }}
                          onInvalid={(): void => setLastNameError(true)}
                        />
                        <LabelError>{lastNameError && 'Enter last name'}</LabelError>
                      </LabelText>

                      <LabelText inputWidth='290px' >
                        ADDRESS 1
                        <input
                          type='text'
                          value={address1}
                          onChange={(e: TChange): void => setAddress1(e.target.value)}
                        />
                      </LabelText>

                      <LabelText inputWidth='290px' >
                        ADDRESS 2
                        <input
                          type='text'
                          value={address2}
                          onChange={(e: TChange): void => setAddress2(e.target.value)}
                        />
                      </LabelText>

                      <LabelText inputWidth='290px' >
                        COUNTRY
                        <input
                          type='text'
                          value={country}
                          onChange={(e: TChange): void => setCountry(e.target.value)}
                        />
                      </LabelText>

                      <LabelText inputWidth='290px' >
                        CITY
                        <input
                          type='text'
                          value={city}
                          onChange={(e: TChange): void => setCity(e.target.value)}
                        />
                      </LabelText>

                      <LabelText
                        inputWidth='290px'
                        error={zipError}
                      >
                        ZIP / POSTAL CODE*
                        <input
                          type='text'
                          required
                          value={zip}
                          onChange={(e: TChange): void => {
                            setZip(e.target.value);
                            e.target.validity.valid && setZipError(false);
                          }}
                          onInvalid={(): void => setZipError(true)}
                        />
                        <LabelError>{zipError && 'Enter zip / postal code'}</LabelError>
                      </LabelText>

                      <LabelText
                        inputWidth='290px'
                        error={emailError}
                      >
                        E-MAIL*
                        <input
                          type='email'
                          pattern='.+@.+\..+'
                          required
                          placeholder='your@email.com'
                          value={email}

                          onChange={(e: TChange): void => {
                            setEmail(e.target.value);
                            e.target.validity.valid && setEmailError(false);
                          }}

                          onBlur={(e: TFocus): void => {
                            if (email && !e.target.validity.valid) setEmailError(true);
                          }}

                          onInvalid={(): void => setEmailError(true)}
                        />
                        <LabelError>{emailError && 'Enter a valid email'}</LabelError>
                      </LabelText>
                    </Step2FormWrapper>
                    <ButtonBlack>CONTINUE</ButtonBlack>
                  </Step2Form>
                </Step2>
              }


              <TitleWrapper
                status={step === 3}
                onClick={(): void => {dispatch(checkoutSetStep(3))}}
              >
                <Title status={step === 3}>03. SHIPPING METHOD</Title>
                {step === 3 && <Required>*Required</Required>}
              </TitleWrapper>

              {step === 3 &&
                <Step3>
                  <form onSubmit={(e: TForm): void => {
                    e.preventDefault();
                    dispatch(checkoutSetStep(4));
                  }}>
                    <span>PLEASE CHOOSE A SHIPPING METHOD TO DELIVERY YOUR ORDER:</span>

                    <LabelRadio
                      labelMargin='0 0 15px 0'
                      inputMargin='0 15px 0 0'
                    >
                      <input
                        type='radio'
                        value='ground'
                        checked={shippingMethod === 'ground'}
                        onChange={(): void => setShippingMethod('ground')}
                      />
                      UPS (GROUND) $7.25
                    </LabelRadio>

                    <LabelRadio
                      labelMargin='0 0 15px 0'
                      inputMargin='0 15px 0 0'
                    >
                      <input
                        type='radio'
                        checked={shippingMethod === '3-day-select'}
                        onChange={(): void => setShippingMethod('3-day-select')}
                      />
                      UPS (3 DAY SELECT) $9.75
                    </LabelRadio>

                    <LabelRadio
                      labelMargin='0 0 15px 0'
                      inputMargin='0 15px 0 0'
                    >
                      <input
                        type='radio'
                        value='next-day-air'
                        checked={shippingMethod === 'next-day-air'}
                        onChange={(): void => setShippingMethod('nex-day-air')}
                      />
                      UPS (NEXT DAY AIR) $17.25
                    </LabelRadio>

                    <LabelRadio
                      labelMargin='0 0 15px 0'
                      inputMargin='0 15px 0 0'
                    >
                      <input
                        type='radio'
                        value='second-day-air'
                        checked={shippingMethod === 'second-day-air'}
                        onChange={(): void => setShippingMethod('second-day-air')}
                      />
                      UPS (SECOND DAY AIR) $12.25
                    </LabelRadio>

                    <ButtonBlack>CONTINUE</ButtonBlack>
                  </form>
                </Step3>
              }


              <TitleWrapper
                status={step === 4}
                onClick={(): void => {dispatch(checkoutSetStep(4))}
                }
              >
                <Title status={step === 4}>04. PAYMENT</Title>
                {step === 4 && <Required>*Required</Required>}
              </TitleWrapper>

              {step === 4 &&
                <Step4>
                  <form
                    noValidate
                    onSubmit={(e: TForm): void => {
                    e.preventDefault();
                    if (e.currentTarget.checkValidity()) {
                      dispatch(checkoutSetStep4Complete(true));
                      dispatch(checkoutSetStep(5));
                    }
                  }}>
                    <Icons>
                      <img src={visaIcon} alt='visaIcon' />
                      <img src={masterCardIcon} alt='masterCardIcon' />
                      <img src={discoverIcon} alt='discoverIcon' />
                      <img src={americanExpressIcon} alt='americanExpressIcon' />
                    </Icons>

                    <LabelText
                      labelMargin='0 0 17px 0'
                      inputWidth='270px'
                      error={cardHolderError}
                    >
                      CARD HOLDER*
                      <input
                        type='text'
                        pattern="[a-zA-Z\s'`~\.-]+"
                        maxLength={48}
                        required
                        placeholder='John Doe'
                        value={cardHolder}
                        onChange={(e: TChange): void => {
                          setCardHolder(e.target.value);
                          e.target.validity.valid && setCardHolderError(false);
                        }}
                        onInvalid={(): void => setCardHolderError(true)}
                      />
                      <LabelError>{cardHolderError && 'Enter card holder'}</LabelError>
                    </LabelText>

                    <LabelText
                      labelMargin='0 0 17px 0'
                      inputWidth='270px'
                      error={cardNumberError}
                    >
                      CARD NUMBER*
                      <input
                        type='text'
                        inputMode='decimal'
                        pattern='([0-9]{4}\s?){4}'
                        maxLength={19}
                        required
                        placeholder='1234 5678 9012 3456'
                        value={cardNumber.replace(/([0-9]{4}(?!\s|$))/g, '$& ')}
                        onChange={(e: TChange): void => {
                          setCardNumber(e.target.value);
                          e.target.validity.valid && setCardNumberError(false);
                        }}
                        onInvalid={(): void => setCardNumberError(true)}
                      />
                      <LabelError>{cardNumberError && 'Enter card number'}</LabelError>
                    </LabelText>

                    <ExpirationWrapper>
                      <span>EXPIRATION DATE*</span>

                      <LabelText
                        inputWidth='77px'
                        error={expirationMonthError}
                      >
                        <input
                          type='text'
                          inputMode='decimal'
                          pattern='0[1-9]|1[0-2]'
                          required
                          placeholder='01'
                          value={expirationMonth}
                          onChange={(e: TChange): void => {
                            setExpirationMonth(e.target.value);
                            e.target.validity.valid && setExpirationMonthError(false);
                          }}
                          onInvalid={(): void => setExpirationMonthError(true)}
                        />             
                      </LabelText>

                      <LabelText
                        inputWidth='77px'
                        error={expirationYearError}
                      >
                        <input
                          type='text'
                          inputMode='decimal'
                          pattern='[2-9][0-9]'
                          required
                          placeholder='24'
                          value={expirationYear}
                          onChange={(e: TChange): void => {
                            setExpirationYear(e.target.value);
                            e.target.validity.valid && setExpirationYearError(false);
                          }}
                          onInvalid={(): void => setExpirationYearError(true)}
                          />
                      </LabelText>

                      <LabelError>
                        {(expirationMonthError || expirationYearError) && 'Enter a valid expiration date'}
                      </LabelError>
                    </ExpirationWrapper>

                    <LabelText
                      labelMargin='0 0 0 25px'
                      inputWidth='85px'
                      error={cvvError}
                    >
                      CVV*
                      <input
                        type='text'
                        inputMode='decimal'
                        pattern='[0-9]{3}'
                        maxLength={4}
                        required
                        placeholder='123'
                        value={cvv}
                        onChange={(e: TChange): void => {
                          setCvv(e.target.value);
                          e.target.validity.valid && setCvvError(false);
                        }}
                        onInvalid={(): void => setCvvError(true)}
                      />
                    </LabelText>

                    <ButtonBlack>CONTINUE</ButtonBlack>
                  </form>
                </Step4>
              }


              <TitleWrapper
                status={step === 5}
                onClick={(): void => {dispatch(checkoutSetStep(5))}}
              >
                <Title status={step === 5}>05. ORDER REVIEW</Title>
                {step === 5 && <Required>*Required</Required>}
              </TitleWrapper>

              {step === 5 &&
                <Step5>
                  <div>
                    <p>
                      Please review all the information on this page.<br />
                      Press the order now button to confirm your purchase.
                    </p>
                    <OrderNow
                      type='button'
                      onClick={(): void => {
                        if (!step4Complete) dispatch(checkoutSetStep(4));
                        if (!step2Complete && activeAccountId === -1) dispatch(checkoutSetStep(2));

                        const confirmPurchase = (): void => {
                          setOrderPaid(true);
                          setTimeout((): void => {
                            dispatch(cartReset());
                            window.scroll(0, 0);
                          }, 2000);
                        }

                        if (activeAccountId === -1) {
                          if (step2Complete && step4Complete) confirmPurchase();
                        } else {
                          if (step4Complete) confirmPurchase();
                        }
                      }}
                    >
                      {orderPaid ? 'ORDER HAS BEEN PAID' : 'ORDER NOW'}
                    </OrderNow>
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
