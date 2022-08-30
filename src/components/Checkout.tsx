import {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';
import {Link, useNavigate} from 'react-router-dom';
import {useAppSelector} from '../redux-hooks';
import BreadCrumbs from './BreadCrumbs';
import AlsoLove from './AlsoLove';
import CartCheckout from './CartCheckout';
import visaIcon from '../images/visaIcon.png';
import masterCardIcon from '../images/masterCardIcon.png';
import discoverIcon from '../images/discoverIcon.png';
import americanExpressIcon from '../images/americanExpressIcon.png';
import {ContinueShopping} from './Cart';
import {accountLogIn} from '../slices/account';
import {TAccount} from '../types/TAccount';
import {useDispatch} from 'react-redux';
import {cartReset} from '../slices/cart';




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

const TitleWrapperOuter = styled.div<{status: boolean, off?: boolean}>`
  width: 675px;
  height: 50px;
  display: flex;
  justify-content: center;
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

const LabelText = styled(Label)<{labelMargin?: string, inputWidth?: string, error?: boolean}>`
  height: 45px;
  margin: ${props => props.labelMargin};
  position: relative;
  display: grid;
  align-content: space-between;

  > input {
    width: ${props => props.inputWidth};
    height: 30px;
    border: 1px solid ${props => !props.error ?
      'var(--color-border)' : 'var(--color-input-error)'
    };

    &:focus {
      outline: 1px solid ${props => !props.error ?
        'var(--color-input-outline)' : 'var(--color-input-error)'
      };
    }
  }
`;

const LabelRadio = styled(Label)<{labelMargin?: string, inputMargin: string}>`
  height: 14px;
  margin: ${props => props.labelMargin};
  display: flex;
  align-items: end;
  cursor: pointer;

  > input {
    margin: ${props => props.inputMargin};
    accent-color: var(--color-text-main);
  }
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

const Error = styled.span`
  position: absolute;
  top: 47px;
  left: 0;
  font-family: var(--font-regular);
  font-size: 11px;
  color: var(--color-input-error);
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
  const accounts = useAppSelector(state => state.account.accounts);
  const activeAccountId: number = useAppSelector(
    state => state.account.accounts
      .findIndex((account: TAccount): boolean => account.isActive)
  );
  
  const screen = useMediaQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [step, setStep] = useState<number>(activeAccountId === -1 ? 1 : 3);
  const [step2Complete, setStep2Complete] = useState<boolean>(false);
  const [step4Complete, setStep4Complete] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [existEmailError, setExistEmailError] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [invalidPassword, setInvalidPassword] = useState<boolean>(false);

  const [newCustomers, setNewCustomers] = useState<string>('checkout-as-guest');

  const [firstName, setFirstName] = useState<string>('');
  const [firstNameError, setFirstNameError] = useState<boolean>(false);
  const [lastName, setLastName] = useState<string>('');
  const [lastNameError, setLastNameError] = useState<boolean>(false);

  const [address1, setAddress1] = useState<string>('');
  const [address2, setAddress2] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [zip, setZip] = useState<string>('');
  const [zipError, setZipError] = useState<boolean>(false);

  const [shippingMethod, setShippingMethod] = useState<string>('ground');

  const [cardHolder, setCardHolder] = useState<string>('');
  const [cardHolderError, setCardHolderError] = useState<boolean>(false);
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardNumberError, setCardNumberError] = useState<boolean>(false);

  const [expirationMonth, setExpirationMonth] = useState<string>('');
  const [expirationMonthError, setExpirationMonthError] = useState<boolean>(false);
  const [expirationYear, setExpirationYear] = useState<string>('');
  const [expirationYearError, setExpirationYearError] = useState<boolean>(false);
  const [cvv, setCvv] = useState<string>('');
  const [cvvError, setCvvError] = useState<boolean>(false);

  const [orderPaid, setOrderPaid] = useState<boolean>(false);

  type TForm = React.FormEvent<HTMLFormElement>;
  type TChange = React.ChangeEvent<HTMLInputElement>;
  type TFocus = React.FocusEvent<HTMLInputElement>;

  useEffect((): void => {
    if (emailError) {
      setExistEmailError(false);
      setInvalidPassword(false);
    }
    if (passwordError) setExistEmailError(false);
    if (passwordError || existEmailError) setInvalidPassword(false);
  }, [emailError, existEmailError, passwordError, invalidPassword]);

  useEffect((): void => {
    if (step2Complete && step4Complete) {
      setTimeout((): void => setOrderPaid(false), 2000);
    }
  }, [orderPaid]);


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
              <TitleWrapperOuter
                status={step === 1}
                off={activeAccountId !== -1}
                onClick={(): void => {
                  activeAccountId === -1 && setStep(1);
                }}
              >
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

                    <form
                      noValidate
                      onSubmit={(e: TForm): void => {
                        e.preventDefault();

                        const existAccountId: number = accounts
                          .findIndex((account: TAccount): boolean => account.email === email);

                        if (e.currentTarget.checkValidity()) {
                          if (existAccountId !== -1) {
                            setExistEmailError(false);
                            accounts[existAccountId].password === password ?
                              setInvalidPassword(false) : setInvalidPassword(true);
                          } else setExistEmailError(true);
                        }

                        if (existAccountId !== -1 && accounts[existAccountId].password === password) {
                          dispatch(accountLogIn(existAccountId));
                          setStep(3);
                        }
                      }}
                    >
                      <LabelText
                        inputWidth='255px'
                        error={emailError || existEmailError}
                      >
                        E-MAIL*
                        <input
                          type='email'
                          pattern='.+@.+\..+'
                          required
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
                        <Error>
                          {emailError && 'Enter a valid email'}
                          {existEmailError && 'Account with this email address does not exist'}
                        </Error>
                      </LabelText>

                      <LabelText
                        inputWidth='255px'
                        error={passwordError || invalidPassword}
                      >
                        PASSWORD*
                        <input
                          type='password'
                          required
                          value={password}
                          
                          onChange={(e: TChange): void => {
                            setPassword(e.target.value);
                            e.target.validity.valid && setPasswordError(false);
                          }}

                          onInvalid={(): void => setPasswordError(true)}
                          />
                          <Error>
                            {passwordError && 'Enter password'}
                            {invalidPassword && 'Invalid password'}
                          </Error>
                      </LabelText>

                      <ButtonBlack>LOG IN & CHECKOUT</ButtonBlack>
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

                    <form onSubmit={(e: TForm): void => {
                      e.preventDefault();
                      newCustomers === 'register' ? navigate('/login') : setStep(2);
                    }}>
                      <LabelRadio inputMargin='0 10px 0 0'>
                        <input
                          type='radio'
                          checked={newCustomers === 'register'}
                          onChange={(): void => setNewCustomers('register')}
                        />
                        REGISTER
                      </LabelRadio>

                      <LabelRadio inputMargin='0 10px 0 0'>
                        <input
                          type='radio'
                          checked={newCustomers === 'checkout-as-guest'}
                          onChange={(): void => setNewCustomers('checkout-as-guest')}
                        />
                        CHECKOUT AS GUEST
                      </LabelRadio>                  
                      <ButtonBlack>CONTINUE</ButtonBlack>
                    </form>
                  </div>
                </Step1>
              }


              <TitleWrapperOuter
                status={step === 2}
                off={activeAccountId !== -1}
                onClick={(): void => {
                  activeAccountId === -1 && setStep(2);
                }}
              >
                <TitleWrapperInner>
                  <Title status={step === 2}>02. BILLING INFO</Title>
                  {step === 2 && <Required>*Required</Required>}
                </TitleWrapperInner>
              </TitleWrapperOuter>

              {step === 2 &&
                <Step2>
                  <Step2Form
                    noValidate
                    onSubmit={(e: TForm): void => {
                      e.preventDefault();
                      if (e.currentTarget.checkValidity()) {
                        setStep2Complete(true);
                        setStep(3);
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
                        <Error>{firstNameError && 'Enter first name'}</Error>
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
                        <Error>{lastNameError && 'Enter last name'}</Error>
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
                        <Error>{zipError && 'Enter zip / postal code'}</Error>
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
                        <Error>{emailError && 'Enter a valid email'}</Error>
                      </LabelText>
                    </Step2FormWrapper>
                    <ButtonBlack>CONTINUE</ButtonBlack>
                  </Step2Form>
                </Step2>
              }


              <TitleWrapperOuter
                status={step === 3}
                onClick={(): void => setStep(3)}
              >
                <TitleWrapperInner>
                  <Title status={step === 3}>03. SHIPPING METHOD</Title>
                  {step === 3 && <Required>*Required</Required>}
                </TitleWrapperInner>
              </TitleWrapperOuter>

              {step === 3 &&
                <Step3>
                  <form onSubmit={(e: TForm): void => {
                    e.preventDefault();
                    setStep(4);
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


              <TitleWrapperOuter
                status={step === 4}
                onClick={(): void => setStep(4)}
              >
                <TitleWrapperInner>
                  <Title status={step === 4}>04. PAYMENT</Title>
                  {step === 4 && <Required>*Required</Required>}
                </TitleWrapperInner>
              </TitleWrapperOuter>

              {step === 4 &&
                <Step4>
                  <form
                    noValidate
                    onSubmit={(e: TForm): void => {
                    e.preventDefault();
                    if (e.currentTarget.checkValidity()) {
                      setStep4Complete(true);
                      setStep(5);
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
                      <Error>{cardHolderError && 'Enter card holder'}</Error>
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
                      <Error>{cardNumberError && 'Enter card number'}</Error>
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

                      <Error>
                        {(expirationMonthError || expirationYearError) && 'Enter a valid expiration date'}
                      </Error>
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


              <TitleWrapperOuter
                status={step === 5}
                onClick={(): void => setStep(5)}
              >
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
                    <OrderNow
                      type='button'
                      onClick={(): void => {
                        if (!step4Complete) setStep(4);
                        if (!step2Complete && activeAccountId === -1) setStep(2);

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
