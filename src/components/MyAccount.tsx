import {useState} from 'react';
import styled from 'styled-components/macro';
import BreadCrumbs from './BreadCrumbs';
import {mediumScreen} from '../mediaQueries';




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

  @media ${mediumScreen} {width: 100%}
`;

const MyAccountWrapper = styled.div`
  width: 960px;
  align-self: center;

  @media ${mediumScreen} {width: 100%}
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
  cursor: default;
  user-select: none;
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
  height: 865px;
  display: flex;
  justify-content: center;
  border: 1px solid var(--color-border);
  border-top: none;

  > form {margin-top: 48px}
`;

const Label = styled.label`
  font-family: var(--font-second);
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-text-main);
`;

const LabelText = styled(Label)`
  height: 45px;
  margin-bottom: 17px;
  display: grid;
  align-content: space-between;

  > input {
    width: 254px;
    height: 30px;
    border: 1px solid var(--color-border);
    
    &:focus {outline: 1px solid #000}
  }
`;

const LabelCheckbox = styled(Label)`
  height: 18px;
  display: flex;
  margin-top: 22px;
  align-items: center;
  font-weight: 400;
  
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
`;

const ButtonUpdate = styled(ButtonBlack)`
  width: 144px;
  height: 30px;
  margin-top: 30px;
`;

const Required = styled.span`
  margin-left: 12px;
  font-family: Arial;
  font-size: 11px;
  font-weight: 400;
  color: var(--color-text-main);
`;


//OrderHystory-----------------------------------
const OrderHistory = styled.div`
  width: 674px;
  height: 645px;
  margin-top: 48px;
`;

const OrderHistoryHeader = styled.div`
  width: 100%;
  height: 25px;
  display: grid;
  grid-template-columns: 33px 205px 137px 130px 1fr;

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
`;

const ButtonDetails = styled(ButtonBlack)<{status: boolean}>`
  width: 66px;
  
  > span {
    font-family: var(--font-second);
    font-size: 10px;
    font-weight: 300;
    color: var(--color-text-second);

    ${props => props.status && `
      display: inline-block;
      font-size: 25px;
      font-weight: 400;
      transform: rotate(45deg);
    `}
  }
`;


//OrderDetails-----------------------------------
const OrderDetails = styled.div`
  width: 505px;
  height: 320px;
  margin: 48px 0 60px 0;
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
`;

const OrderDetailsBody = styled.div`
  height: 40px;
  display: grid;
  grid-template-columns: 200px 125px 125px 1fr;
  align-items: center;
  border-bottom: 1px solid var(--color-border);

  > span {
    font-family: var(--font-second);
    font-size: 10px;
    line-height: 14px;
    font-weight: 400;
    color: var(--color-text-main);
  }

  > span:last-child {justify-self: end;}
`;

const TotalBlockWrapper = styled.div`
  height: 140px;
  border-bottom: 1px solid var(--color-border);
`;

const TotalBlock = styled.div`
  width: 190px;
  height: 87px;
  margin: 20px 0 0 312px;
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
    font-family: Arial;
    font-size: 11px;
    color: var(--color-text-main);
    font-weight: 400;
  }

  > span:nth-child(3n+1) {font-weight: 700}
`;




interface order {
  view: boolean;
  number: string;
  name: string;
  datePurchased: string;
  dateDespathed: string;
  addressDelivery: string;
  addressBilling: string;
  status: string;
  price: number;
  qty: number;
  amount(): number;
  deliveryCosts: number;
  giftVoucher: number;
  total(): number;
}

const initialOrders: order[] = [
  {
    view: false,
    number: 'FN9136137',
    name: 'DETAILED SWING DRESS',
    datePurchased: '02/02/2022',
    dateDespathed: '04/02/2022',
    addressDelivery: 'User User, Street1, City9, USA 10014',
    addressBilling: 'User User, Street1, City9, USA 10014',
    status: 'despatched',
    price: 275,
    qty: 1,
    amount() {return this.price * this.qty},
    deliveryCosts: 35,
    giftVoucher: 5,
    total() {return this.amount() + this.deliveryCosts - this.giftVoucher},
  },
  {
    view: false,
    number: 'FN9135142',
    name: 'DETAILED SWING DRESS',
    datePurchased: '16/01/2022',
    dateDespathed: '18/01/2022',
    addressDelivery: 'User User, Street1, City9, USA 10014',
    addressBilling: 'User User, Street1, City9, USA 10014',
    status: 'despatched',
    price: 325,
    qty: 1,
    amount() {return this.price * this.qty},
    deliveryCosts: 35,
    giftVoucher: 5,
    total() {return this.amount() + this.deliveryCosts - this.giftVoucher},
  },
  {
    view: false,
    number: 'FN9135132',
    name: 'DETAILED SWING DRESS',
    datePurchased: '08/01/2021',
    dateDespathed: '10/01/2021',
    addressDelivery: 'User User, Street1, City9, USA 10014',
    addressBilling: 'User User, Street1, City9, USA 10014',
    status: 'despatched',
    price: 275,
    qty: 2,
    amount() {return this.price * this.qty},
    deliveryCosts: 35,
    giftVoucher: 5,
    total() {return this.amount() + this.deliveryCosts - this.giftVoucher},
  },
  {
    view: false,
    number: 'FN9132142',
    name: 'DETAILED SWING DRESS',
    datePurchased: '04/01/2021',
    dateDespathed: '06/01/2021',
    addressDelivery: 'User User, Street1, City9, USA 10014',
    addressBilling: 'User User, Street1, City9, USA 10014',
    status: 'despatched',
    price: 275,
    qty: 3,
    amount() {return this.price * this.qty},
    deliveryCosts: 35,
    giftVoucher: 5,
    total() {return this.amount() + this.deliveryCosts - this.giftVoucher},
  },
  {
    view: false,
    number: 'FN9132138',
    name: 'DETAILED SWING DRESS',
    datePurchased: '02/01/2021',
    dateDespathed: '04/01/2021',
    addressDelivery: 'User User, Street1, City9, USA 10014',
    addressBilling: 'User User, Street1, City9, USA 10014',
    status: 'despatched',
    price: 380,
    qty: 1,
    amount() {return this.price * this.qty},
    deliveryCosts: 35,
    giftVoucher: 5,
    total() {return this.amount() + this.deliveryCosts - this.giftVoucher},
  },
];




const MyAccount = (): JSX.Element => {
  const [tab, setTab] = useState<string>('myPersonalInfo');
  const [orders, setOrders] = useState<order[]>(initialOrders);
  const [currOrder, setCurrOrder] = useState<string>('');


  return(
    <WrapperOuter>
      <WrapperInner>
        <BreadCrumbs
          link={
            <>
              <a href='#'>Home</a>
              <span>/</span>
              <span>Create An Account</span>
            </>
          }
          return='#'
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

            <MyAddressesTab
              currTab={tab}
              onClick={(): void => setTab('myAddresses')}
            >
              MY ADDRESSES
            </MyAddressesTab>

            <OrderHistoryTab
              currTab={tab}
              onClick={(): void => setTab('orderHistory')}
            >
              ORDER HISTORY
            </OrderHistoryTab>
          </Tabs>


          <MyAccountBody>
            {tab === 'myPersonalInfo' &&
              <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>): void => e.preventDefault()}
              >
                <LabelText>
                  FIRST NAME*
                  <input type='text' required />
                </LabelText>
  
                <LabelText>
                  LAST NAME*
                  <input type='text' required />
                </LabelText>
  
                <LabelText>
                  E-MAIL*
                  <input type='email' required />
                </LabelText>
  
                <LabelText>
                  CURRENT PASSWORD*
                  <input type='password' required />
                </LabelText>

                <LabelText>
                  NEW PASSWORD
                  <input type='password' />
                </LabelText>

                <LabelText>
                  CONFIRMATION
                  <input type='password' />
                </LabelText>
  
                <LabelCheckbox>
                  <input type='checkbox' name='subscribe' defaultChecked />
                  I WANT TO SUBSCRIBE TO THE NEWSLETTER
                </LabelCheckbox>

                <ButtonUpdate>UPDATE</ButtonUpdate>
                <Required>*Required</Required>
              </form>
            }


            {tab === 'myAddresses' &&
              <form>
                <LabelText>
                  FIRST NAME*
                  <input type='text' required />
                </LabelText>
  
                <LabelText>
                  LAST NAME*
                  <input type='text' required />
                </LabelText>

                <LabelText>
                  COMPANY
                  <input type='text' />
                </LabelText>

                <LabelText>
                  ADDRESS 1
                  <input type='text' />
                </LabelText>

                <LabelText>
                  ADDRESS 2
                  <input type='text' />
                </LabelText>

                <LabelText>
                  COUNTRY
                  <input list='country' />
                </LabelText>
                <datalist id='country'>
                  <option value='Russia' />
                  <option value='UK' />
                  <option value='USA' />
                </datalist>

                <LabelText>
                  CITY
                  <input type='text' />
                </LabelText>
  
                <LabelText>
                  STATE
                  <input type='text' />
                </LabelText>

                <LabelText>
                  ZIP / POSTAL CODE*
                  <input type='text' required />
                </LabelText>

                <LabelText>
                  PHONE
                  <input type='text' />
                </LabelText>

                <ButtonUpdate>UPDATE</ButtonUpdate>
                <Required>*Required</Required>
              </form>
            }


            {tab === 'orderHistory' &&
              <OrderHistory>
                <OrderHistoryHeader>
                  <span>ORDER NUMBER</span>
                  <span>DATE</span>
                  <span>STATUS</span>
                  <span>TOTAL</span>
                </OrderHistoryHeader>

                {orders.map((order: order): JSX.Element =>
                  <OrderWrapper key={order.number}>
                    <Order>
                      <span>{order.number}</span>
                      <span>
                        {order.status === 'despatched' ?
                        order.dateDespathed : order.datePurchased}
                      </span>
                      <span>{order.status}</span>
                      <span>${order.total()}</span>
                      <ButtonDetails
                        type='button'
                        status={order.number === currOrder}
                        onClick={(): void => {
                          order.number === currOrder ?
                          setCurrOrder('') : setCurrOrder(order.number);
                        }}
                      >
                        <span>{order.number === currOrder ? '+' : 'DETAILS'}</span>
                      </ButtonDetails>
                    </Order>

                    {order.number === currOrder && 
                      <OrderDetails>
                        <OrderDetailsHeader>
                          <span>PRODUCT</span>
                          <span>PRICE</span>
                          <span>Q-TY</span>
                          <span>AMOUNT</span>
                        </OrderDetailsHeader>

                        <OrderDetailsBody>
                          <span>{order.name}</span>
                          <span>${order.price}</span>
                          <span>{order.qty}</span>
                          <span>${order.amount()}</span>
                        </OrderDetailsBody>

                        <TotalBlockWrapper>
                          <TotalBlock>
                            <span>SUBTOTAL</span>
                            <span>${order.amount()}</span>

                            <span>DELIVERY COSTS</span>
                            <span>${order.deliveryCosts}</span>

                            <span>GIFT VOUCHER</span>
                            <span>${order.giftVoucher}</span>

                            <TotalBlockLine />

                            <span>TOTAL</span>
                            <span>${order.total()}</span>
                          </TotalBlock>
                        </TotalBlockWrapper>

                        <DescriptionBlock>
                          <span>Purchased on: </span>
                          <span>{order.datePurchased}</span><br />

                          <span>Order status: </span>
                          <span>
                            {order.status}{' '}
                            {order.status === 'despatched' && order.dateDespathed}
                          </span><br />

                          <span>Delivery Address: </span>
                          <span>{order.addressDelivery}</span><br />

                          <span>Billing Address: </span>
                          <span>{order.addressBilling}</span>
                        </DescriptionBlock>
                      </OrderDetails>
                    }
                  </OrderWrapper>
                )}
              </OrderHistory>
            }
          </MyAccountBody>
        </MyAccountWrapper>
      </WrapperInner>
    </WrapperOuter>
  )
}




export default MyAccount;
