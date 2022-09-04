import {useState} from 'react';
import styled from 'styled-components';
import {smallScreen, useMediaQuery} from '../mediaQueries';
import {useAppSelector} from '../redux-hooks';
import {IOrder} from '../types/IOrder';
import {IProduct} from '../types/IProduct';
import {TAccount} from '../types/TAccount';



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




const AccountOrders = (): JSX.Element => {
  const stateAccount = useAppSelector(state => state.account);
  const accountId = stateAccount.accounts
    .findIndex((account: TAccount): boolean => account.isActive);
  const account = stateAccount.accounts[accountId];

  const orders = account.orders || [];
  const [currOrder, setCurrOrder] = useState<number>(0);
  const screen = useMediaQuery();

  
  return(
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
            )})}
        </OrderHistory>
      </>
    :
      <NoOrders>YOU DON'T HAVE ANY PAID ORDERS YET</NoOrders>
  )
}




export default AccountOrders;
