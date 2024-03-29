import {useState, useEffect} from 'react';
import styled from 'styled-components/macro';
import {mediumScreen, smallScreen} from '../mediaQueries';
import {useNavigate} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../redux-hooks';
import {accountLogIn} from '../slices/account';
import {checkoutSetStep} from '../slices/checkout';
import {LabelText, LabelRadio, InputError} from './Form';
import Button from './Button';
import {TAccount} from '../types/TAccount';




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




const CheckoutStep1 = (): JSX.Element => {
  const accounts = useAppSelector(state => state.account.accounts);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [existEmailError, setExistEmailError] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [invalidPassword, setInvalidPassword] = useState<boolean>(false);

  const [newCustomers, setNewCustomers] = useState<string>('checkout-as-guest');


  useEffect((): void => {
    if (emailError) {
      setExistEmailError(false);
      setInvalidPassword(false);
    }
    
    if (passwordError) setExistEmailError(false);
    if (passwordError || existEmailError) setInvalidPassword(false);
  }, [emailError, existEmailError, passwordError, invalidPassword]);
  

  return(
    <Step1>
      <div>
        <TextUp>REGISTERED CUSTOMERS</TextUp>
        <Text>
          <TextBold>Already registered? </TextBold>
          Please log in below:
        </Text>

        <form
          noValidate
          onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
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
              dispatch(checkoutSetStep(3));
            }
          }}
        >
          <LabelText
            width='255px'
            error={emailError || existEmailError}
          >
            E-MAIL*
            <input
              type='email'
              pattern='.+@.+\..+'
              required
              placeholder='your@email.com'
              value={email}

              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setEmail(e.target.value);
                e.target.validity.valid && setEmailError(false);
              }}

              onBlur={(e: React.FocusEvent<HTMLInputElement>): void => {
                if (email && !e.target.validity.valid) setEmailError(true);
              }}
              
              onInvalid={(): void => setEmailError(true)}
            />
            <InputError>
              {emailError && 'Enter a valid email'}
              {existEmailError && 'Account with this email address does not exist'}
            </InputError>
          </LabelText>

          <LabelText
            width='255px'
            error={passwordError || invalidPassword}
          >
            PASSWORD*
            <input
              type='password'
              required
              value={password}
              
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setPassword(e.target.value);
                e.target.validity.valid && setPasswordError(false);
              }}

              onInvalid={(): void => setPasswordError(true)}
              />
              <InputError>
                {passwordError && 'Enter password'}
                {invalidPassword && 'Invalid password'}
              </InputError>
          </LabelText>

          <Button type='submit' width='145px'>
            LOG IN & CHECKOUT
          </Button>
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
          
          if (newCustomers === 'register') {
            navigate('/login');
            window.scroll(0, 0);
          } else dispatch(checkoutSetStep(2));
        }}>
          <LabelRadio width='80px'>
            <input
              type='radio'
              checked={newCustomers === 'register'}
              onChange={(): void => setNewCustomers('register')}
            />
            REGISTER
          </LabelRadio>

          <LabelRadio width='140px'>
            <input
              type='radio'
              checked={newCustomers === 'checkout-as-guest'}
              onChange={(): void => setNewCustomers('checkout-as-guest')}
            />
            CHECKOUT AS GUEST
          </LabelRadio>                  
          <Button type='submit' width='145px'>CONTINUE</Button>
        </form>
      </div>
    </Step1>
  )
}




export default CheckoutStep1;
