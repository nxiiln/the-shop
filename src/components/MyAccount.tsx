import {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';
import {Link} from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';
import {useAppDispatch, useAppSelector} from '../redux-hooks';
import {accountChangePersonalInfo, accountChangeAddressInfo} from '../slices/account';
import {TAccount} from '../types/TAccount';
import {IOrder} from '../types/IOrder';
import {IProduct} from '../types/IProduct';




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

  @media ${mediumScreen}, ${smallScreen} {width: 100%}
`;

const MyAccountWrapper = styled.div`
  width: 960px;
  align-self: center;

  @media ${mediumScreen}, ${smallScreen} {width: 100%}
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-family: var(--font-main);
  font-size: 24px;
  font-weight: 400;
  color: var(--color-text-main);
`;

const Tabs = styled.div`
  width: 100%;
  height: 51px;
  display: flex;

  @media ${smallScreen} {
    height: auto;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid var(--color-border);
    border-right: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);

    > form {margin: 45px 0 45px}
  }
`;

const Tab = styled.div`
  width: 321px;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-second);
  font-size: 13px;
  font-weight: 300;
  color: var(--color-text-main);
  border: 1px solid var(--color-border);
  cursor: pointer;
  user-select: none;

  @media ${smallScreen} {width: 100%}
`;

const MyPersonalInfoTab = styled(Tab)<{currTab: string}>`
  border-right: none;
  ${props => props.currTab === 'myPersonalInfo' && 'border: 1px solid #000;'}
`;

const MyAddressesTab = styled(Tab)<{currTab: string}>`
  border-right: none;
  ${props => props.currTab === 'myAddresses' && 'border: 1px solid #000;'}
  ${props => props.currTab === 'myPersonalInfo' && 'border-left: none;'}
`;

const OrderHistoryTab = styled(Tab)<{currTab: string}>`
  ${props => props.currTab === 'orderHistory' && 'border: 1px solid #000;'}
  ${props => props.currTab === 'myAddresses' && 'border-left: none;'}
`;

const MyAccountBody = styled.div`
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  border: 1px solid var(--color-border);
  border-top: none;

  > form {margin: 45px 0 45px}
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
  margin-bottom: 17px;
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
  margin-top: 22px;
  align-items: center;
  font-weight: 400;
  cursor: pointer;
  
  > input {
    margin: 0 10px 0 0;
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


// OrderHystory
const OrderHistory = styled.div`
  width: 674px;
  margin: 50px 0;

  @media ${smallScreen} {
    width: 100%;
    max-width: 674px;
    padding: 0 2% 0;
  }
`;

const NoOrders = styled.span`
  margin: 40px 0;
  font-family: var(--font-second);
  font-size: 13px;
  font-weight: 300;
  color: var(--color-text-main);
`;

const OrderHistoryHeader = styled.div`
  width: 100%;
  height: 25px;
  display: grid;
  grid-template-columns: 30px 205px 137px 130px 1fr;

  > span {
    font-family: var(--font-second);
    font-size: 12px;
    line-height: 1.2;
    font-weight: 300;
    color: var(--color-text-main);
  }

  > span:nth-child(1) {grid-area: 1 / 2 / 1 / 3}
  > span:nth-child(2) {grid-area: 1 / 3 / 1 / 4}
  > span:nth-child(3) {grid-area: 1 / 4 / 1 / 5}
  > span:nth-child(4) {grid-area: 1 / 5 / 1 / 6}

  @media ${smallScreen} {
    width: 100%;
    height: 35px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 66px;

    > span:nth-child(1) {
      grid-area: 1 / 1 / 1 / 2;
      display: flex;
      flex-direction: column;
    }

    > span:nth-child(2) {grid-area: 1 / 2 / 1 / 3}
    > span:nth-child(3) {grid-area: 1 / 3 / 1 / 4}
  }
`;

const OrderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Order = styled.div`
  height: 32px;
  margin-bottom: 9px;
  display: grid;
  grid-template-columns: 33px 205px 137px 130px 106px 1fr;
  align-items: center;
  text-transform: uppercase;
  background: var(--color-background-highlight);

  > span {
    font-family: var(--font-second);
    font-size: 10px;
    line-height: 14px;
    font-weight: 400;
    color: var(--color-text-main);
  }

  > span:nth-child(1) {grid-area: 1 / 2 / 1 / 3}
  > span:nth-child(2) {grid-area: 1 / 3 / 1 / 4}
  > span:nth-child(3) {grid-area: 1 / 4 / 1 / 5}
  > span:nth-child(4) {grid-area: 1 / 5 / 1 / 6}
  > button:nth-child(5) {grid-area: 1 / 6 / 1 / 7}

  @media ${smallScreen} {
    width: 100%;
    height: 35px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 66px;

    > span:nth-child(1) {
      grid-area: 1 / 1 / 1 / 2;
      display: flex;
      flex-direction: column;
    }

    > span:nth-child(2) {grid-area: 1 / 2 / 1 / 3}
    > span:nth-child(3) {grid-area: 1 / 3 / 1 / 4}
  }
`;

const ButtonDetails = styled(ButtonBlack)<{status: boolean}>`
  width: 66px;
  
  > span {
    font-family: var(--font-second);
    font-size: 10px;
    font-weight: 300;
    color: var(--color-text-second);

    ${props => props.status && `
      margin: -4px 0 0 3px;
      display: inline-block;
      font-size: 25px;
      font-weight: 400;
      transform: rotate(45deg);
    `}
  }
`;


// OrderDetails
const OrderDetails = styled.div`
  width: 505px;
  height: 320px;
  margin: 48px 0 60px;

  @media ${smallScreen} {
    width: 100%;
    max-width: 505px;
    margin: 20px 0 20px;
  }
`;

const OrderDetailsHeader = styled.div`
  height: 22px;
  display: grid;
  grid-template-columns: 200px 125px 125px 1fr;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  
  > span {
    font-family: var(--font-second);
    font-size: 12px;
    line-height: 1.2;
    font-weight: 300;
    color: var(--color-text-main);
  }

  @media ${smallScreen} {
    grid-template-columns: 1fr max-content;
  }
`;

const OrderDetailsBody = styled.div`
  height: 60px;
  display: grid;
  grid-template-columns: 200px 125px 125px 1fr;
  align-items: center;
  border-bottom: 1px solid var(--color-border);

  > span {
    font-family: var(--font-second);
    font-size: 10px;
    line-height: 14px;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--color-text-main);
  }
  
  > span:nth-child(4n) {justify-self: end;}
  
  @media ${smallScreen} {
    grid-template-columns: 1fr 1fr;

    > span:first-child {
      width: max-content;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
`;

const TotalBlockWrapper = styled.div`
  height: 140px;
  border-bottom: 1px solid var(--color-border);
`;

const TotalBlock = styled.div`
  width: 190px;
  height: 87px;
  margin: 20px 0 0 calc(100% - 190px);
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  > span {
    font-family: var(--font-second);
    font-size: 10px;
    line-height: 1.2;
    font-weight: 300;
    color: var(--color-text-main);
  }

  > span:nth-child(2n) {justify-self: end}

  > span:nth-child(n+7) {
    font-size: 12px;
    font-weight: 700;
    align-self: end;
    justify-self: start;
  }

  > span:nth-child(9) {justify-self: end}
`;

const TotalBlockLine = styled.div`
  width: 100%;
  height: 1px;
  margin: 0;
  position: absolute;
  top: 61px;
  background: var(--color-border);
`;

const DescriptionBlock = styled.div`
  > span {
    font-family: var(--font-regular);
    font-size: 11px;
    color: var(--color-text-main);
    font-weight: 400;
  }

  > span:nth-child(3n+1) {font-weight: 700}
`;

const Error = styled.span`
  position: absolute;
  top: 47px;
  left: 0;
  font-family: var(--font-regular);
  font-size: 11px;
  color: var(--color-input-error);
`;




const MyAccount = (): JSX.Element => {
  const [tab, setTab] = useState<string>('myPersonalInfo');
  const [currOrder, setCurrOrder] = useState<number>(0);
  const dispatch = useAppDispatch();
  const screen = useMediaQuery();

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

  const [address, setAddress] = useState<string>(account?.address || '');
  const [country, setCountry] = useState<string>(account?.country || '');
  const [city, setCity] = useState<string>(account?.city || '');

  const [zip, setZip] = useState<string>(account?.zip || '');
  const [zipError, setZipError] = useState<boolean>(false);

  const [changesApplied, setChangesApplied] = useState<boolean>(false);

  const orders = account.orders || [];

  type TForm = React.FormEvent<HTMLFormElement>;
  type TChange = React.ChangeEvent<HTMLInputElement>;
  type TFocus = React.FocusEvent<HTMLInputElement>;

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


  const myPersonalInfo: JSX.Element =
    <form
      noValidate
      onSubmit={(e: TForm): void => {
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

      <LabelText>
        NEW PASSWORD
        <input
          type='password'
          value={newPassword}
          onChange={(e: TChange): void => setNewPassword(e.target.value)}
          onBlur={(): void => newPassword !== confirmNewPassword ?
            setConfirmNewPasswordError(true) : setConfirmNewPasswordError(false)
          }
        />
      </LabelText>

      <LabelText error={confirmNewPasswordError}>
        CONFIRM NEW PASSWORD
        <input
          type='password'
          value={confirmNewPassword}

          onChange={(e: TChange): void => {
            setConfirmNewPassword(e.target.value);
            e.target.validity.valid && setConfirmNewPasswordError(false);
          }}

          onBlur={(): void => newPassword !== confirmNewPassword ?
            setConfirmNewPasswordError(true) : setConfirmNewPasswordError(false)
          }
        />
        <Error>{confirmNewPasswordError && 'Passwords do not match'}</Error>
      </LabelText>

      <LabelCheckbox>
        <input
          type='checkbox'
          checked={newsletterSubscription}
          onChange={(e: TChange): void => setNewsletterSubscription(e.target.checked)}
        />
        I WANT TO SUBSCRIBE TO THE NEWSLETTER
      </LabelCheckbox>

      <ButtonUpdateWrapper>
        <ButtonUpdate>{changesApplied ? 'UPDATE SAVED' : 'UPDATE'}</ButtonUpdate>
        <Required>*Required</Required>
      </ButtonUpdateWrapper>
    </form>;


  const myAddresses: JSX.Element =
    <form
      noValidate
      onSubmit={(e: TForm): void => {
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
      <LabelText>
        ADDRESS
        <input
          type='text'
          value={address}
          onChange={(e: TChange): void => setAddress(e.target.value)}
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

      <ButtonUpdateWrapper>
        <ButtonUpdate>{changesApplied ? 'UPDATE SAVED' : 'UPDATE'}</ButtonUpdate>
        <Required>*Required</Required>
      </ButtonUpdateWrapper>
    </form>;
  
  
  const orderHistory: JSX.Element =
    orders.length > 0 ? 
      <>
        <OrderHistory>
          <OrderHistoryHeader>
            {!screen.small ?
              <>
                <span>ORDER NUMBER</span>
                <span>DATE</span>
              </>
              :
              <span>
                <span>ORDER#</span>
                <span>DATE</span>
              </span>
            }
            <span>STATUS</span>
            <span>TOTAL</span>
          </OrderHistoryHeader>

          {orders.map((order: IOrder): JSX.Element => {
            const subtotal: number = order.products
              .map((product: IProduct): number => product.price * product.quantity)
              .reduce((prevAmount, currAmount): number => prevAmount + currAmount);

            return(
              <OrderWrapper key={order.id}>
                <Order>
                  {!screen.small ?
                    <>
                      <span>{order.id}</span>
                      <span>paid</span>
                    </>
                    :
                    <span>
                      <span>{order.id}</span>
                      <span>paid</span>
                    </span>
                  }

                  <span>paid</span>
                  <span>${subtotal + 35 - 5}</span>

                  <ButtonDetails
                    type='button'
                    status={order.id === currOrder}
                    onClick={(): void => {
                      order.id === currOrder ?
                      setCurrOrder(0) : setCurrOrder(order.id);
                    }}
                  >
                    <span>{order.id === currOrder ? '+' : 'DETAILS'}</span>
                  </ButtonDetails>
                </Order>

                {order.id === currOrder && 
                  <OrderDetails>
                    <OrderDetailsHeader>
                      <span>PRODUCT</span>
                      {!screen.small &&
                        <>
                          <span>PRICE</span>
                          <span>Q-TY</span>
                        </>
                      }
                      <span>AMOUNT</span>
                    </OrderDetailsHeader>

                    <OrderDetailsBody>
                      {order.products.map((product: IProduct): JSX.Element =>
                        <>
                          {!screen.small ?
                            <>
                              <span>{product.name}</span>
                              <span>${product.price}</span>
                              <span>{product.quantity}</span>
                            </>
                            :
                            <span>
                              <span>{product.name}</span>
                              <span>{product.quantity} X ${product.price}</span>
                            </span>
                          }
                          <span>${product.price * product.quantity}</span>
                        </>
                      )}
                    </OrderDetailsBody>

                    <TotalBlockWrapper>
                      <TotalBlock>
                        <span>SUBTOTAL</span>
                        <span>${subtotal}</span>

                        <span>DELIVERY COSTS</span>
                        <span>$35</span>

                        <span>GIFT VOUCHER</span>
                        <span>$5</span>

                        <TotalBlockLine />

                        <span>TOTAL</span>
                        <span>${subtotal + 35 - 5}</span>
                      </TotalBlock>
                    </TotalBlockWrapper>

                    <DescriptionBlock>
                      <span>Purchased on: </span>
                      <span>{order.date}</span><br />

                      <span>Order status: </span>
                      <span>paid</span><br />

                      <span>Delivery Address: </span>
                      <span>{order.address || 'matches postal code'}</span><br />
                    </DescriptionBlock>
                  </OrderDetails>
                }
              </OrderWrapper>
            )
          })}
        </OrderHistory>
      </>
    :
      <NoOrders>YOU DON'T HAVE ANY PAID ORDERS YET</NoOrders>;


  return(
    <WrapperOuter>
      <WrapperInner>
        <BreadCrumbs
          link={
            <>
              <Link to='/'>Home</Link>
              <span>/</span>
              <span>My Account</span>
            </>
          }
          marginBottom='20px'
        />


        <MyAccountWrapper>
          <TitleWrapper>
            <Title>MY ACCOUNT</Title>
          </TitleWrapper>


          <Tabs>
            <MyPersonalInfoTab
              currTab={tab}
              onClick={(): void => setTab('myPersonalInfo')}
            >
              MY PERSONAL INFO
            </MyPersonalInfoTab>
            {screen.small && tab === 'myPersonalInfo' && myPersonalInfo}

            <MyAddressesTab
              currTab={tab}
              onClick={(): void => setTab('myAddresses')}
            >
              MY ADDRESSES
            </MyAddressesTab>
            {screen.small && tab === 'myAddresses' && myAddresses}

            <OrderHistoryTab
              currTab={tab}
              onClick={(): void => setTab('orderHistory')}
            >
              ORDER HISTORY
            </OrderHistoryTab>
            {screen.small && tab === 'orderHistory' && orderHistory}
          </Tabs>


          {!screen.small &&
            <MyAccountBody>
              {tab === 'myPersonalInfo' && myPersonalInfo}
              {tab === 'myAddresses' && myAddresses}
              {tab === 'orderHistory' && orderHistory}
            </MyAccountBody>
          }
        </MyAccountWrapper>
      </WrapperInner>
    </WrapperOuter>
  )
}




export default MyAccount;
