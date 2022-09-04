import {useState} from 'react';
import styled from 'styled-components';
import {mediumScreen, smallScreen} from '../mediaQueries';
import {useAppDispatch} from '../redux-hooks';
import {checkoutSetStep, checkoutSetStep2Complete} from '../slices/checkout';
import {LabelText, LabelError} from './Labels';




const Step2 = styled.div`
  width: 675px;
  height: 570px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-border);
  border-top: none;

  @media ${mediumScreen}, ${smallScreen} {width: 100%}
  @media ${smallScreen} {height: 580px}
`;

const Step2Form = styled.form`
  width: 608px;
  > button {margin-left: calc(50% - 144px / 2)}
  @media ${smallScreen} {width: 290px}
`;

const Step2FormWrapper = styled.div`
  width: 605px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${smallScreen} {
    width: 290px;
    height: 450px;
    flex-wrap: nowrap;
    flex-direction: column;
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




const CheckoutStep2 = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);

  const [firstName, setFirstName] = useState<string>('');
  const [firstNameError, setFirstNameError] = useState<boolean>(false);

  const [lastName, setLastName] = useState<string>('');
  const [lastNameError, setLastNameError] = useState<boolean>(false);

  const [address, setAddress] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [city, setCity] = useState<string>('');

  const [zip, setZip] = useState<string>('');
  const [zipError, setZipError] = useState<boolean>(false);


  return(
    <Step2>
      <Step2Form
        noValidate
        onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
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
            labelMargin='0 0 20px 0'
            error={firstNameError}
          >
            FIRST NAME*
            <input
              type='text'
              required
              value={firstName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setFirstName(e.target.value);
                e.target.validity.valid && setFirstNameError(false);
              }}
              onInvalid={(): void => setFirstNameError(true)}
            />
            <LabelError>{firstNameError && 'Enter first name'}</LabelError>
          </LabelText>

          <LabelText
            inputWidth='290px'
            labelMargin='0 0 20px 0'
            error={lastNameError}
          >
            LAST NAME*
            <input
              type='text'
              required
              value={lastName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setLastName(e.target.value);
                e.target.validity.valid && setLastNameError(false);
              }}
              onInvalid={(): void => setLastNameError(true)}
            />
            <LabelError>{lastNameError && 'Enter last name'}</LabelError>
          </LabelText>

          <LabelText
            inputWidth='290px'
            labelMargin='0 0 20px 0'
          >
            ADDRESS
            <input
              type='text'
              value={address}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setAddress(e.target.value);
              }}
            />
          </LabelText>

          <LabelText
            inputWidth='290px'
            labelMargin='0 0 20px 0'
          >
            COUNTRY
            <input
              type='text'
              value={country}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setCountry(e.target.value);
              }}
            />
          </LabelText>

          <LabelText
            inputWidth='290px'
            labelMargin='0 0 20px 0'
          >
            CITY
            <input
              type='text'
              value={city}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setCity(e.target.value);
              }}
            />
          </LabelText>

          <LabelText
            inputWidth='290px'
            labelMargin='0 0 20px 0'
            error={zipError}
          >
            ZIP / POSTAL CODE*
            <input
              type='text'
              required
              value={zip}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setZip(e.target.value);
                e.target.validity.valid && setZipError(false);
              }}
              onInvalid={(): void => setZipError(true)}
            />
            <LabelError>{zipError && 'Enter zip / postal code'}</LabelError>
          </LabelText>

          <LabelText
            inputWidth='290px'
            labelMargin='0 0 20px 0'
            error={emailError}
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
            <LabelError>{emailError && 'Enter a valid email'}</LabelError>
          </LabelText>
        </Step2FormWrapper>
        <ButtonBlack>CONTINUE</ButtonBlack>
      </Step2Form>
    </Step2>
  )
}




export default CheckoutStep2;
