import {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import {smallScreen, useMediaQuery} from '../mediaQueries';
import {Link, useNavigate} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import {useAppSelector, useAppDispatch} from '../redux-hooks';
import {accountCreate} from '../slices/account';
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

  @media ${smallScreen} {width: 100%}
`;

const CreateAccountWrapper = styled.div`
  width: 675px;
  /* height: calc( + 20px); */
  position: relative;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: start;
  border: 1px solid var(--color-border);

  @media ${smallScreen} {
    width: 100%;
    max-width: 675px;
    height: 1230px;
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

const Required = styled.span`
  position: absolute;
  top: 20px;
  left: calc(100% - 70px);
  font-family: var(--font-regular);
  font-size: 11px;
  font-weight: 400;
  color: var(--color-text-main);

  @media ${smallScreen} {top: 65px}
`;

const Form = styled.form`
   display: flex;
   flex-direction: column;

  > div {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  
    @media ${smallScreen} {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const PersonalInformation = styled.div`
  width: 260px;
  margin-left: 20px;

  @media ${smallScreen} {margin: 0}
`;

const AddressInformation = styled.div`
  width: 260px;
  margin-right: 20px;

  @media ${smallScreen} {margin: 30px 0 0}
`;

const Description = styled.span`
  margin-bottom: 25px;
  display: inline-block; 
  font-family: var(--font-second);
  font-size: 13px;
  font-weight: 300;
  color: var(--color-text-main);
`;

const Label = styled.label`
  font-family: var(--font-second);
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-text-main);
`;

const LabelText = styled(Label)<{error?: boolean}>`
  position: relative;
  height: 45px;
  margin-bottom: 20px;
  display: grid;
  align-content: space-between;

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

const LabelCheckbox = styled(Label)`
  height: 18px;
  display: flex;
  margin-top: 30px;
  align-items: center;
  cursor: pointer;

  > input {
    margin: 0 10px 0 0;
    accent-color: var(--color-text-main);
  }
`;

const ButtonCreateAccount = styled.button`
  width: 254px;
  height: 30px;
  margin-top: 20px;
  align-self: center;
  font-family: var(--font-second);
  font-size: 10px;
  font-weight: 300;
  color: var(--color-text-second);
  background: var(--color-background-second);
  border: none;
  cursor: pointer;

  &:hover {background: var(--color-button-solid-hover)}
`;

const BackToLogin = styled(HashLink)`
  width: 80px;
  height: 10px;
  margin: 20px 0 30px 0;
  align-self: center;
  font-family: var(--font-regular);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);
`;

const Error = styled.span`
  position: absolute;
  top: 47px;
  left: 0;
  font-family: var(--font-regular);
  font-size: 11px;
  color: var(--color-input-error);
`;




const CreateAccount = (): JSX.Element => {
  const screen = useMediaQuery();
  const account = useAppSelector(state => state.account);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState<string>('');
  const [firstNameError, setFirstNameError] = useState<boolean>(false);

  const [lastName, setLastName] = useState<string>('');
  const [lastNameError, setLastNameError] = useState<boolean>(false);

  const [email, setEmail] = useState<string>(account.newEmail);
  const [emailError, setEmailError] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false);

  const [newsletterSubscription, setNewsletterSubscription] = useState<boolean>(true);
  const [address1, setAddress1] = useState<string>('');
  const [address2, setAddress2] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [city, setCity] = useState<string>('');

  const [zip, setZip] = useState<string>('');
  const [zipError, setZipError] = useState<boolean>(false);

  type TChange = React.ChangeEvent<HTMLInputElement>;
  type TFocus = React.FocusEvent<HTMLInputElement>;

  useEffect((): void => {
    if (confirmPassword) {
      password !== confirmPassword ?
        setConfirmPasswordError(true) : setConfirmPasswordError(false);
    }
  }, [password, confirmPassword, confirmPasswordError]);

  
  return(
    <WrapperOuter>
      <WrapperInner>
        <BreadCrumbs
          link={
            <>
              <Link to='/'>Home</Link>
              <span>/</span>
              <span>Create Account</span>
            </>
          }
          marginBottom='20px'
        />


        <CreateAccountWrapper>
          <Required>*Required</Required>
          <TitleWrapper>
            <Title>CREATE AN ACCOUNT</Title>
          </TitleWrapper>

          <Form
            noValidate
            onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
              e.preventDefault();

              if (e.currentTarget.checkValidity() && !confirmPasswordError) {
                dispatch(accountCreate({
                  isActive: true,
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  password: password,
                  newsletterSubscription: newsletterSubscription,
                  address1: address1,
                  address2: address2,
                  country: country,
                  city: city,
                  zip: zip
                }));

                navigate('/my-account');
              }
            }}
          >
            <div>
              <PersonalInformation>
                <Description>PERSONAL INFORMATION</Description>

                <LabelText error={firstNameError}>
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

                <LabelText error={lastNameError}>
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

                <LabelText error={emailError}>
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

                <LabelText error={passwordError}>
                  PASSWORD*
                  <input
                    type='password'
                    required
                    value={password}

                    onChange={(e: TChange): void => {
                      setPassword(e.target.value);
                      e.target.validity.valid && setPasswordError(false);
                    }}

                    onBlur={(): void => password !== confirmPassword ?
                      setConfirmPasswordError(true) : setConfirmPasswordError(false)
                    }

                    onInvalid={(): void => setPasswordError(true)}
                  />
                  <Error>{passwordError && 'Enter password'}</Error>
                </LabelText>

                <LabelText error={confirmPasswordError}>
                  CONFIRM PASSWORD*
                  <input
                    type='password'
                    value={confirmPassword}
                    onChange={(e: TChange): void => setConfirmPassword(e.target.value)}
                  />
                  <Error>{confirmPasswordError && 'Passwords do not match'}</Error>
                </LabelText>

                {!screen.small &&
                  <LabelCheckbox>
                    <input
                      type='checkbox'
                      checked={newsletterSubscription}
                      onChange={(e): void => setNewsletterSubscription(e.target.checked)}
                    />
                    I WANT TO SUBSCRIBE TO THE NEWSLETTER
                  </LabelCheckbox>
                }
              </PersonalInformation>


              <AddressInformation>
                <Description>ADDRESS INFORMATION</Description>
                <LabelText>
                  ADDRESS 1
                  <input
                    type='text'
                    value={address1}
                    onChange={(e: TChange): void => setAddress1(e.target.value)}
                  />
                </LabelText>

                <LabelText>
                  ADDRESS 2
                  <input
                    type='text'
                    value={address2}
                    onChange={(e: TChange): void => setAddress2(e.target.value)}
                  />
                </LabelText>

                <LabelText>
                  COUNTRY
                  <input
                    type='text'
                    value={country}
                    onChange={(e: TChange): void => setCountry(e.target.value)}
                  />
                </LabelText>

                <LabelText>
                  CITY
                  <input
                    type='text'
                    value={city}
                    onChange={(e: TChange): void => setCity(e.target.value)}
                  />
                </LabelText>

                <LabelText error={zipError}>
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
              </AddressInformation>
              

              {screen.small &&
                <LabelCheckbox>
                  <input
                    type='checkbox'
                    checked={newsletterSubscription}
                    onChange={(e: TChange): void => setNewsletterSubscription(e.target.checked)}
                  />
                  I WANT TO SUBSCRIBE TO THE NEWSLETTER
                </LabelCheckbox>
              }
            </div>
            <ButtonCreateAccount type='submit'>CREATE AN ACCOUNT</ButtonCreateAccount>
          </Form>
          
          <BackToLogin to='/login#top'>Back to Login</BackToLogin>
        </CreateAccountWrapper>
      </WrapperInner>
    </WrapperOuter>
  );
}




export default CreateAccount;
