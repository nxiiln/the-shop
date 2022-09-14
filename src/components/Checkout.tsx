import styled from 'styled-components/macro';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';
import {Link} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../redux-hooks';
import {checkoutSetStep} from '../slices/checkout';
import {TAccount} from '../types/TAccount';
import BreadCrumbs from './BreadCrumbs';
import AlsoLove from './AlsoLove';
import CartCheckout from './CartCheckout';
import CheckoutStep1 from './CheckoutStep1';
import CheckoutStep2 from './CheckoutStep2';
import CheckoutStep3 from './CheckoutStep3';
import CheckoutStep4 from './CheckoutStep4';
import CheckoutStep5 from './CheckoutStep5';
import Button from './Button';
import { HashLink } from 'react-router-hash-link';




const WrapperOuter = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div<{empty: boolean}>`
  width: 1100px;
  max-width: 100%;
  padding: 0 1% 50px;
  display: flex;
  
  ${props => props.empty ?
   `flex-direction: column;
   
    > h2 {
      margin: 0 0 20px;
      align-self: center;
      font-family: var(--font-main);
      font-size: 24px;
      line-height: 1.2;
      font-weight: 400;
      color: var(--color-text-main);
    }

    > a {
      align-self: center;
      @media ${mediumScreen} {align-self: center}
    }`

    :

   `flex-wrap: wrap;
    justify-content: space-between;
    align-content: start;`
  }

  > article:first-child {width: 100%}

  @media ${mediumScreen}, ${smallScreen} {justify-content: center}
`;

const Steps = styled.article`
  width: 675px;
  @media ${mediumScreen}, ${smallScreen} {width: 100%}
`;

const TitleWrapper = styled.div<{status: boolean, off?: boolean}>`
  width: 675px;
  height: 50px;
  padding: 0 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--color-border);
  user-select: none;
  ${props => !props.off && 'cursor: pointer;'}
  
  ${props => !props.status && `
    margin-bottom: 10px;
    background: var(--color-background-highlight);
  `}

  @media ${mediumScreen}, ${smallScreen} {width: 100%}
`;

const Title = styled.span<{status: boolean}>`
  font-family: var(--font-main);
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: ${props => props.status ?
    'var(--color-text-main)' : 'var(--color-text-regular)'
  };
`;

const Required = styled.span`
  font-family: var(--font-regular);
  font-size: 11px;
  font-weight: 400;
  color: var(--color-text-main);
`;




const Checkout = (): JSX.Element => {
  const cart = useAppSelector(state => state.cart);
  const activeAccountId: number = useAppSelector(
    state => state.account.accounts
      .findIndex((account: TAccount): boolean => account.isActive)
  );
  
  const screen = useMediaQuery();
  const dispatch = useAppDispatch();
  const checkoutStep = useAppSelector(state => state.checkout.step);

  const calculateStep = (): number => {
    if (activeAccountId > -1) {
      if (checkoutStep < 3) {
        dispatch(checkoutSetStep(3));
        return checkoutStep;
      }
    }
    return checkoutStep;
  }

  const step = calculateStep();


  return(
    <WrapperOuter>
      <WrapperInner empty={cart.length === 0}>
        <BreadCrumbs
          link={
            <>
              <Link to='/'>Home</Link>
              <span>/</span>
              <span>Checkout</span>
            </>
          }
          marginBottom='20px'
        />

        {cart.length > 0 ?
          <>
            {screen.big ? <AlsoLove /> : <CartCheckout />}

            <Steps>
              <TitleWrapper
                status={step === 1}
                off={activeAccountId !== -1}
                onClick={(): void => {
                  activeAccountId === -1 && dispatch(checkoutSetStep(1));
                }}
              >
                <Title status={step === 1}>01. CHECKOUT</Title>
                {step === 1 && <Required>*Required</Required>}
              </TitleWrapper>
              {step === 1 && <CheckoutStep1 />}

              <TitleWrapper
                status={step === 2}
                off={activeAccountId !== -1}
                onClick={(): void => {
                  activeAccountId === -1 && dispatch(checkoutSetStep(2));
                }}
              >
                <Title status={step === 2}>02. BILLING INFO</Title>
                {step === 2 && <Required>*Required</Required>}
              </TitleWrapper>
              {step === 2 && <CheckoutStep2 />}

              <TitleWrapper
                status={step === 3}
                onClick={(): void => {dispatch(checkoutSetStep(3))}}
              >
                <Title status={step === 3}>03. SHIPPING METHOD</Title>
                {step === 3 && <Required>*Required</Required>}
              </TitleWrapper>
              {step === 3 && <CheckoutStep3 />}

              <TitleWrapper
                status={step === 4}
                onClick={(): void => {dispatch(checkoutSetStep(4))}
                }
              >
                <Title status={step === 4}>04. PAYMENT</Title>
                {step === 4 && <Required>*Required</Required>}
              </TitleWrapper>
              {step === 4 && <CheckoutStep4 />}

              <TitleWrapper
                status={step === 5}
                onClick={(): void => {dispatch(checkoutSetStep(5))}}
              >
                <Title status={step === 5}>05. ORDER REVIEW</Title>
                {step === 5 && <Required>*Required</Required>}
              </TitleWrapper>
              {step === 5 && <CheckoutStep5 />}
            </Steps>
            {screen.big && <CartCheckout />}
          </>
          :
          <>
            <h2>NO SELECTED PRODUCTS</h2>
            <Button
              as={HashLink}
              to='/catalog#top'
              variant='outline'
              width='290px'
              smallWidth='45%'
              maxWidth='290px'
            >
              CONTINUE SHOPPING
            </Button>
          </>
        }
      </WrapperInner>
    </WrapperOuter>
  )
}




export default Checkout;
