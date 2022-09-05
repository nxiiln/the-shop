import {useState} from 'react';
import styled from 'styled-components';
import {mediumScreen, smallScreen} from '../mediaQueries';
import {useAppDispatch, useAppSelector} from '../redux-hooks';
import {checkoutSetStep, checkoutSetStep2Complete, checkoutSetStep4Complete} from '../slices/checkout';
import {cartReset} from '../slices/cart';
import {accountSetOrders} from '../slices/account';
import {TAccount} from '../types/TAccount';




const Step5 = styled.div`
  width: 675px;
  border: 1px solid var(--color-border);
  border-top: none;

  > div {
    padding: 30px 0 30px 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    > p {
      margin: 0 0 10px;
      font-family: var(--font-second);
      font-size: 10px;
      line-height: 18px;
      font-weight: 400;
      text-transform: uppercase;
      color: var(--color-text-main);
      @media ${smallScreen} {width: 260px}
    }
  }

  @media ${mediumScreen}, ${smallScreen} {width: 100%}
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

const OrderNow = styled(ButtonBlack)`
  width: 291px;
  @media ${smallScreen} {width: 260px}
`;




const CheckoutStep5 = (): JSX.Element => {
  const cart = useAppSelector(state => state.cart);
  const activeAccountId: number = useAppSelector(
    state => state.account.accounts
      .findIndex((account: TAccount): boolean => account.isActive)
  );

  const dispatch = useAppDispatch();
  const step2Complete = useAppSelector(state => state.checkout.step2Complete);
  const step4Complete = useAppSelector(state => state.checkout.step4Complete);
  const orderId = useAppSelector(state => state.account.accounts[activeAccountId]?.orders?.length);
  const address = useAppSelector(state => state.account.accounts[activeAccountId]?.address);
  const [orderPayment, setOrderPayment] = useState<boolean>(false);


  return(
    <Step5>
      <div>
        <p>
          Please review all the information on this page.<br />
          Press the order now button to confirm your purchase.
        </p>
        <OrderNow
          type='button'
          onClick={(): void => {
            if (!step4Complete) dispatch(checkoutSetStep(4));
            if (!step2Complete && activeAccountId === -1) dispatch(checkoutSetStep(2));

            const confirmPurchase = (): void => {
              setOrderPayment(true);
              dispatch(checkoutSetStep2Complete(false));
              dispatch(checkoutSetStep4Complete(false));

              setTimeout((): void => {
                setOrderPayment(false)
                dispatch(cartReset());
                dispatch(checkoutSetStep(1));
                window.scroll(0, 0);
              }, 2000);
            }

            if (activeAccountId === -1) {
              if (step2Complete && step4Complete) confirmPurchase();
            } else {
              if (step4Complete) {
                const date = new Date();
                const day: string = date.getDate() < 10 ?
                  `0${date.getDate()}` : date.getDate() + '';
                const month: string = date.getMonth() < 9 ?
                  `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;

                dispatch(accountSetOrders({
                  id: orderId ? orderId + 1 : 1,
                  date: `${day}.${month}.${date.getFullYear()}`,
                  address: address,
                  products: cart
                }));

                confirmPurchase();
              }
            }
          }}
        >
          {orderPayment ? 'ORDER PAYMENT...' : 'ORDER NOW'}
        </OrderNow>
      </div>
    </Step5>
  )
}




export default CheckoutStep5;
