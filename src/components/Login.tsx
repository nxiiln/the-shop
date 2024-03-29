import {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import {smallScreen} from '../mediaQueries';
import {useNavigate} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import {useAppDispatch, useAppSelector} from '../redux-hooks';
import {accountLogIn, accountLogOut, accountSetNewEmail} from '../slices/account';
import {checkoutSetStep} from '../slices/checkout';
import {TAccount} from '../types/TAccount';
import BreadCrumbs from './BreadCrumbs';
import {LabelText, InputError} from './Form';
import Button from './Button';



const WrapperOuter = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 1100px;
  padding: 0 1% 50px;
  display: flex;
  flex-direction: column;
`;

const UserLogin = styled.div`
  width: 675px;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid var(--color-border);

  @media ${smallScreen} {
    width: 100%;
    max-width: 675px;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: start;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
`;

const Title = styled.h2`
  font-family: var(--font-main);
  font-size: 24px;
  font-weight: 400;
  color: var(--color-text-main);
`;

const Groups = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;

  @media ${smallScreen} {
    flex-direction: column;
    align-items: center;
  }
`;

const RegisteredCustomers = styled.div`
  width: 260px;
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;

  @media ${smallScreen} {margin: 0 0 60px 0}
`;

const TextUp = styled.span`
  display: inline-block;
  margin-bottom: 15px;
  font-family: var(--font-second);
  font-size: 13px;
  font-weight: 300;
  color: var(--color-text-main);
`;

const Text = styled.p`
  margin: 0 0 15px 0;
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

const NewCustomers = styled.div`
  width: 255px;
  height: 175px;
  margin-right: 20px;
  display: flex;
  flex-wrap: wrap;

  @media ${smallScreen} {margin: 0}
`;

const LogOutWrapper = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;




const Login = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const accounts: TAccount[] = useAppSelector(state => state.account.accounts);
  const activeAccountId: number = useAppSelector(
    state => state.account.accounts
      .findIndex((account: TAccount): boolean => account.isActive)
  );

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [existEmailError, setExistEmailError] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [invalidPassword, setInvalidPassword] = useState<boolean>(false);

  const [newEmail, setNewEmail] = useState<string>('');
  const [newEmailError, setNewEmailError] = useState<boolean>(false);
  const [registeredEmailError, setRegisteredEmailError] = useState<boolean>(false);

  type TForm = React.FormEvent<HTMLFormElement>;
  type TChange = React.ChangeEvent<HTMLInputElement>;
  type TFocus = React.FocusEvent<HTMLInputElement>;

  useEffect((): void => {
    if (emailError) {
      setExistEmailError(false);
      setInvalidPassword(false);
    }
    if (passwordError || existEmailError) setInvalidPassword(false);
    if (newEmailError) setRegisteredEmailError(false);
  }, [emailError, existEmailError, passwordError, invalidPassword, newEmailError]);

  
  return(
    <WrapperOuter>
      <WrapperInner>
        <BreadCrumbs
          link={
            <>
              <HashLink to='/#top'>Home</HashLink>
              <span>/</span>
              <span>Login</span>
            </>
          }
          marginBottom='20px'
        />

        <UserLogin>
          <TitleWrapper>
            <Title>USER LOGIN</Title>
          </TitleWrapper>
          
          {activeAccountId === - 1 ?
            <Groups>
              <RegisteredCustomers>
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
 
                      if (existAccountId !== -1 && accounts[existAccountId].password === password) {
                        dispatch(accountLogIn(existAccountId));
                        navigate('/my-account');
                        window.scroll(0, 0);
                      }
                    }
                  }}
                >
                  <LabelText
                    margin='0 0 20px 0'
                    error={emailError || existEmailError}
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
                    <InputError>
                      {emailError && 'Enter a valid email'}
                      {existEmailError && 'Account with this email address does not exist'}
                    </InputError>
                  </LabelText>

                  <LabelText
                    margin='0 0 20px 0'
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

                      onBlur={(e: TFocus): void => {
                        if (password && !e.target.validity.valid) setEmailError(true);
                      }}

                      onInvalid={(): void => setPasswordError(true)}
                    />
                    <InputError>
                      {passwordError && 'Enter password'}
                      {invalidPassword && 'Invalid password'}
                    </InputError>
                  </LabelText>

                  <Button
                    type='submit'
                    width='255px'
                    margin='15px 0 0 0'
                  >
                    LOGIN
                  </Button>
                </form>
              </RegisteredCustomers>


              <NewCustomers>
                <TextUp>NEW CUSTOMERS</TextUp>
                <Text>
                  <TextBold>Enter your email address to create an account:</TextBold>
                </Text>

                <form
                  noValidate
                  onSubmit={(e: TForm): void => {
                    e.preventDefault();

                    const registeredEmail: boolean = accounts
                      .findIndex((account: TAccount): boolean => account.email === newEmail) !== -1;

                    if (e.currentTarget.checkValidity()) {
                      if (!registeredEmail) {
                        dispatch(accountSetNewEmail(newEmail));
                        navigate('/create-account');
                        window.scroll(0, 0);
                      } else setRegisteredEmailError(true);
                    }
                  }}
                >
                  <LabelText
                    margin='0 0 20px 0'
                    error={newEmailError || registeredEmailError}
                  >
                    E-MAIL*
                    <input
                      type='email'
                      pattern='.+@.+\..+'
                      required
                      placeholder='your@email.com'
                      value={newEmail}

                      onChange={(e: TChange): void => {
                        setNewEmail(e.target.value);
                        e.target.validity.valid && setNewEmailError(false);
                      }}
                      
                      onBlur={(e: TFocus): void => {
                        if (newEmail && !e.target.validity.valid) setNewEmailError(true);
                      }}

                      onInvalid={(): void => setNewEmailError(true)}
                    />
                    <InputError>
                      {newEmailError && 'Enter a valid email'}
                      {registeredEmailError && 'Account with this email address exists'}
                    </InputError>
                  </LabelText>

                  <Button
                    type='submit'
                    width='255px'
                    margin='15px 0 0 0'
                  >
                    CREATE AN ACCOUNT
                  </Button>
                </form>
              </NewCustomers>
            </Groups>
          :
            <LogOutWrapper>
              <TextUp>ARE YOU SURE YOU WANT TO LOG OUT?</TextUp>
              <Button
                type='button'
                width='200px'
                onClick={(): void => {
                  if (activeAccountId !== -1) {
                    dispatch(accountLogOut(activeAccountId));
                    dispatch(checkoutSetStep(1));
                  }
                  window.scroll(0, 0);
                }}
              >
                LOGOUT
              </Button>
            </LogOutWrapper>
          }
        </UserLogin>
      </WrapperInner>
    </WrapperOuter>
  );
}




export default Login;
