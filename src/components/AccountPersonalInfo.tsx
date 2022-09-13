import {useState, useEffect} from 'react';
import styled from 'styled-components/macro';
import {useAppDispatch, useAppSelector} from '../redux-hooks';
import {accountChangePersonalInfo} from '../slices/account';
import {TAccount} from '../types/TAccount';
import {LabelText, LabelCheckbox, InputError} from './Form';




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

const ButtonUpdateWrapper = styled.div`
  width: 255px;
  position: relative;
  display: flex;
  align-items: baseline;
`;

const ButtonUpdate = styled(ButtonBlack)`
  width: 144px;
  height: 30px;
  margin-top: 30px;
`;

const Required = styled.span`
  margin-left: 40px;
  font-family: var(--font-regular);
  font-size: 11px;
  font-weight: 400;
  color: var(--color-text-main);
`;




const AccountPersonalInfo = (): JSX.Element => {
  const stateAccount = useAppSelector(state => state.account);
  const accountId = stateAccount.accounts
    .findIndex((account: TAccount): boolean => account.isActive);
  const account = stateAccount.accounts[accountId];

  const [firstName, setFirstName] = useState<string>(account?.firstName || '');
  const [firstNameError, setFirstNameError] = useState<boolean>(false);

  const [lastName, setLastName] = useState<string>(account?.lastName || '');
  const [lastNameError, setLastNameError] = useState<boolean>(false);

  const [email, setEmail] = useState<string>(account?.email || '');
  const [emailError, setEmailError] = useState<boolean>(false);

  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState<boolean>(false);

  const [
    newsletterSubscription,
    setNewsletterSubscription
  ] = useState<boolean>(account?.newsletterSubscription);

  const [changesApplied, setChangesApplied] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect((): void => {
    if (confirmNewPassword) {
      newPassword !== confirmNewPassword ?
        setConfirmNewPasswordError(true) : setConfirmNewPasswordError(false);
    }
  }, [newPassword, confirmNewPassword, confirmNewPasswordError]);

  useEffect((): void => {
    if (changesApplied) {
      setTimeout((): void => {
        setChangesApplied(false);
      }, 2000);
    }
  }, [changesApplied]);


  return(
    <form
      noValidate
      onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (accountId !== -1 && e.currentTarget.checkValidity() && !confirmNewPasswordError) {
          dispatch(accountChangePersonalInfo({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: newPassword ? newPassword : account.password,
            newsletterSubscription: newsletterSubscription
          }));

          setChangesApplied(true);
        }
      }}
    >
      <LabelText
        margin='0 0 20px 0'
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
        <InputError>{firstNameError && 'Enter first name'}</InputError>
      </LabelText>

      <LabelText
        margin='0 0 20px 0'
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
        <InputError>{lastNameError && 'Enter last name'}</InputError>
      </LabelText>

      <LabelText
        margin='0 0 20px 0'
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
        <InputError>{emailError && 'Enter a valid email'}</InputError>
      </LabelText>

      <LabelText margin='0 0 20px 0'>
        NEW PASSWORD
        <input
          type='password'
          value={newPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setNewPassword(e.target.value)}
          onBlur={(): void => newPassword !== confirmNewPassword ?
            setConfirmNewPasswordError(true) : setConfirmNewPasswordError(false)
          }
        />
      </LabelText>

      <LabelText
        margin='0 0 20px 0'
        error={confirmNewPasswordError}
      >
        CONFIRM NEW PASSWORD
        <input
          type='password'
          value={confirmNewPassword}

          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            setConfirmNewPassword(e.target.value);
            e.target.validity.valid && setConfirmNewPasswordError(false);
          }}

          onBlur={(): void => newPassword !== confirmNewPassword ?
            setConfirmNewPasswordError(true) : setConfirmNewPasswordError(false)
          }
        />
        <InputError>{confirmNewPasswordError && 'Passwords do not match'}</InputError>
      </LabelText>

      <LabelCheckbox labelWidth='245px' inputMargin='0 10px 0 0' >
        <input
          type='checkbox'
          checked={newsletterSubscription}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            setNewsletterSubscription(e.target.checked)
          }}
        />
        I WANT TO SUBSCRIBE TO THE NEWSLETTER
      </LabelCheckbox>

      <ButtonUpdateWrapper>
        <ButtonUpdate>{changesApplied ? 'UPDATE SAVED' : 'UPDATE'}</ButtonUpdate>
        <Required>*Required</Required>
      </ButtonUpdateWrapper>
    </form>
  )
}




export default AccountPersonalInfo;
