import {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import {smallScreen} from '../mediaQueries';
import {Link, useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../redux-hooks';
import {accountLogIn, accountLogOut, accountSetNewEmail} from '../slices/account';
import {IAccount} from '../types/IAccount';
import BreadCrumbs from './BreadCrumbs';




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
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const RegisteredCustomers = styled.div`
  width: 260px;
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;

  @media ${smallScreen} {margin: 0}
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

const Label = styled.label<{error?: boolean}>`
  position: relative;
  height: 45px;
  margin-bottom: 20px;
  display: grid;
  align-content: space-between;
  font-family: var(--font-second);
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-text-main);

  > input {
    width: 254px;
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

const ButtonPreset: string = `
  height: 30px;
  margin-top: 15px;
  font-family: var(--font-second);
  font-size: 10px;
  font-weight: 300;
  color: var(--color-text-second);
  background: var(--color-background-second);
`;

const ButtonLogin = styled.button`
  ${ButtonPreset}
  width: 254px;
  border: none;
  cursor: pointer;

  &:hover {background: var(--color-button-solid-hover)}
`;

const NewCustomers = styled.div`
  width: 255px;
  height: 175px;
  margin-right: 20px;
  display: flex;
  flex-wrap: wrap;

  @media ${smallScreen} {margin: 0 0 60px 0}
`;

const ButtonCreateAccount = styled.button`
  ${ButtonPreset}
  width: 254px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
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

const LogOutWrapper = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonLogOut = styled.button`
  ${ButtonPreset}
  width: 200px;
  margin: 0;
  cursor: pointer;

  &:hover {background: var(--color-button-solid-hover)}
`;




const Login = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const accounts: IAccount[] = useAppSelector(state => state.account.accounts);
  const accountActiveId: number = useAppSelector(
    state => state.account.accounts
      .findIndex((account: IAccount): boolean => account.isActive)
  );

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [existEmailError, setExistEmailError] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [invalidPassword, setInvalidPassword] = useState<boolean>(false);

  const [newEmail, setNewEmail] = useState<string>('');
  const [newEmailError, setNewEmailError] = useState<boolean>(false);

  type Form = React.FormEvent<HTMLFormElement>;
  type Change = React.ChangeEvent<HTMLInputElement>;
  type Focus = React.FocusEvent<HTMLInputElement>;

  useEffect((): void => {
    if (passwordError || existEmailError) setInvalidPassword(false);
    if (emailError) {
      setExistEmailError(false);
      setInvalidPassword(false);
    }
  }, [emailError, existEmailError, passwordError, invalidPassword]);

  
  return(
    <WrapperOuter>
      <WrapperInner>
        <BreadCrumbs
          link={
            <>
              <Link to='/'>Home</Link>
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
          
          {accountActiveId === - 1 ?
            <Groups>
              <RegisteredCustomers>
                <TextUp>REGISTERED CUSTOMERS</TextUp>
                <Text>
                  <TextBold>Already registered? </TextBold>
                  Please log in below:
                </Text>

                <form
                  noValidate
                  onSubmit={(e: Form): void => {
                    e.preventDefault();
                    const existAccountId: number = accounts
                      .findIndex((account: IAccount): boolean => account.email === email);

                    if (e.currentTarget.checkValidity()) {
                      if (existAccountId !== -1) {
                        setExistEmailError(false);
                        accounts[existAccountId].password === password ?
                          setInvalidPassword(false) : setInvalidPassword(true);
                      } else setExistEmailError(true);
 
                      if (existAccountId !== -1 && accounts[existAccountId].password === password) {
                        dispatch(accountLogIn(existAccountId));
                        navigate('/my-account');
                      }
                    }
                  }}
                >
                  <Label error={emailError || existEmailError}>
                    E-MAIL*
                    <input
                      type='email'
                      pattern='.+@.+\..+'
                      required
                      value={email}

                      onChange={(e: Change): void => {
                        setEmail(e.target.value);
                        e.target.validity.valid && setEmailError(false);
                      }}

                      onBlur={(e: Focus): void => {
                        if (email && !e.target.validity.valid) setEmailError(true);
                      }}

                      onInvalid={(): void => setEmailError(true)}
                    />
                    <Error>
                      {emailError && 'Enter a valid email'}
                      {existEmailError && 'Email does not exist'}
                    </Error>
                  </Label>

                  <Label error={passwordError || invalidPassword}>
                    PASSWORD*
                    <input
                      type='password'
                      required
                      value={password}

                      onChange={(e: Change): void => {
                        setPassword(e.target.value);
                        e.target.validity.valid && setPasswordError(false);
                      }}

                      onBlur={(e: Focus): void => {
                        if (password && !e.target.validity.valid) setEmailError(true);
                      }}

                      onInvalid={(): void => setPasswordError(true)}
                    />
                    <Error>
                      {passwordError && 'Enter password'}
                      {invalidPassword && 'Invalid password'}
                    </Error>
                  </Label>

                  <ButtonLogin>LOGIN</ButtonLogin>
                </form>
              </RegisteredCustomers>


              <NewCustomers>
                <TextUp>NEW CUSTOMERS</TextUp>
                <Text>
                  <TextBold>Enter your email address to create an account:</TextBold>
                </Text>

                <form
                  noValidate
                  onSubmit={(e: Form): void => {
                    e.preventDefault();
                    if (e.currentTarget.checkValidity()) {
                      dispatch(accountSetNewEmail(newEmail));
                      navigate('/create-account');
                    }
                  }}
                >
                  <Label error={newEmailError}>
                    E-MAIL*
                    <input
                      type='email'
                      pattern='.+@.+\..+'
                      required
                      placeholder='your@email.com'
                      value={newEmail}

                      onChange={(e: Change): void => {
                        setNewEmail(e.target.value);
                        e.target.validity.valid && setNewEmailError(false);
                      }}
                      
                      onBlur={(e: Focus): void => {
                        if (newEmail && !e.target.validity.valid) setNewEmailError(true);
                      }}

                      onInvalid={(): void => setNewEmailError(true)}
                    />
                    <Error>{newEmailError && 'Enter a valid email'}</Error>
                  </Label>

                  <ButtonCreateAccount type='submit'>CREATE AN ACCOUNT</ButtonCreateAccount>
                </form>
              </NewCustomers>
            </Groups>
          :
            <LogOutWrapper>
              <ButtonLogOut
                type='button'
                onClick={(): void => {
                  if (accountActiveId !== -1) dispatch(accountLogOut(accountActiveId));
                }}
              >
                LOGOUT
              </ButtonLogOut>
            </LogOutWrapper>
          }
        </UserLogin>
      </WrapperInner>
    </WrapperOuter>
  );
}




export default Login;
