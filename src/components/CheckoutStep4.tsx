import {useState} from 'react';
import styled from 'styled-components/macro';
import {mediumScreen, smallScreen} from '../mediaQueries';
import {useAppDispatch} from '../redux-hooks';
import {checkoutSetStep, checkoutSetStep4Complete} from '../slices/checkout';
import {LabelText, LabelError} from './Labels';
import visaIcon from '../images/visaIcon.png';
import masterCardIcon from '../images/masterCardIcon.png';
import discoverIcon from '../images/discoverIcon.png';
import americanExpressIcon from '../images/americanExpressIcon.png';




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




const CheckoutStep4 = (): JSX.Element => {
  const dispatch = useAppDispatch();

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


  return(
    <Step4>
      <form
        noValidate
        onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
              setCvv(e.target.value);
              e.target.validity.valid && setCvvError(false);
            }}
            onInvalid={(): void => setCvvError(true)}
          />
          <LabelError>{cvvError && 'Enter CVV'}</LabelError>
        </LabelText>

        <ButtonBlack>CONTINUE</ButtonBlack>
      </form>
    </Step4>
  )
}




export default CheckoutStep4;
