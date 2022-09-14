import {useState, useEffect} from 'react';
import styled from 'styled-components/macro';
import {useAppDispatch, useAppSelector} from '../redux-hooks';
import {accountChangeAddressInfo} from '../slices/account';
import {TAccount} from '../types/TAccount';
import {LabelText, InputError} from './Form';
import Button from './Button';


const ButtonUpdateWrapper = styled.div`
  width: 255px;
  position: relative;
  display: flex;
  align-items: baseline;
`;

const Required = styled.span`
  margin-left: 40px;
  font-family: var(--font-regular);
  font-size: 11px;
  font-weight: 400;
  color: var(--color-text-main);
`;


const AccountAddress = (): JSX.Element => {
  const stateAccount = useAppSelector(state => state.account);
  const accountId = stateAccount.accounts
    .findIndex((account: TAccount): boolean => account.isActive);
  const account = stateAccount.accounts[accountId];

  const [address, setAddress] = useState<string>(account?.address || '');
  const [country, setCountry] = useState<string>(account?.country || '');
  const [city, setCity] = useState<string>(account?.city || '');
  const [zip, setZip] = useState<string>(account?.zip || '');
  const [zipError, setZipError] = useState<boolean>(false);
  
  const [changesApplied, setChangesApplied] = useState<boolean>(false);
  const dispatch = useAppDispatch();

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

        if (e.currentTarget.checkValidity()) {
          dispatch(accountChangeAddressInfo({
            address: address,
            country: country,
            city: city,
            zip: zip
          }));

          setChangesApplied(true);
        }
      }}
    >
      <LabelText margin='0 0 20px 0'>
        ADDRESS
        <input
          type='text'
          value={address}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            setAddress(e.target.value);
          }}
        />
      </LabelText>

      <LabelText margin='0 0 20px 0'>
        COUNTRY
        <input
          type='text'
          value={country}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            setCountry(e.target.value);
          }}
        />
      </LabelText>

      <LabelText margin='0 0 20px 0'>
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
        margin='0 0 20px 0'
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
        <InputError>{zipError && 'Enter zip / postal code'}</InputError>
      </LabelText>

      <ButtonUpdateWrapper>
        <Button
          type='submit'
          width='145px'
          margin='30px 0 0 0'
        >
          {changesApplied ? 'UPDATE SAVED' : 'UPDATE'}
        </Button>
        <Required>*Required</Required>
      </ButtonUpdateWrapper>
    </form>
  )
}


export default AccountAddress;
