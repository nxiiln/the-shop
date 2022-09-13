import {useState} from 'react';
import styled from 'styled-components/macro';
import {mediumScreen, smallScreen} from '../mediaQueries';
import {useAppDispatch} from '../redux-hooks';
import {checkoutSetStep} from '../slices/checkout';
import {LabelRadio} from './Form';




const Step3 = styled.div`
  width: 675px;
  height: 286px;
  margin-bottom: 10px;
  border: 1px solid var(--color-border);
  border-top: none;

  > form {
    width: 430px;
    height: 220px;
    position: relative;
    top: 30px;
    left: 25px;

    @media ${smallScreen} {width: 250px}

    > span {
      display: inline-block;
      margin-bottom: 38px;
      font-family: var(--font-second);
      font-size: 13px;
      font-weight: 400;
      color: var(--color-text-main);

      @media ${smallScreen} {width: 250px}
    }

    > label:nth-child(5) {margin-bottom: 30px}
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




const CheckoutStep3 = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [shippingMethod, setShippingMethod] = useState<string>('ground');

  return(
    <Step3>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch(checkoutSetStep(4));
      }}>
        <span>PLEASE CHOOSE A SHIPPING METHOD TO DELIVERY YOUR ORDER:</span>

        <LabelRadio
          width='140px'
          margin='0 0 15px 0'
        >
          <input
            type='radio'
            checked={shippingMethod === 'ground'}
            onChange={(): void => setShippingMethod('ground')}
          />
          UPS (GROUND) $7.25
        </LabelRadio>

        <LabelRadio
          width='165px'
          margin='0 0 15px 0'
        >
          <input
            type='radio'
            checked={shippingMethod === '3-day-select'}
            onChange={(): void => setShippingMethod('3-day-select')}
          />
          UPS (3 DAY SELECT) $9.75
        </LabelRadio>

        <LabelRadio
          width='170px'
          margin='0 0 15px 0'
        >
          <input
            type='radio'
            checked={shippingMethod === 'next-day-air'}
            onChange={(): void => setShippingMethod('next-day-air')}
          />
          UPS (NEXT DAY AIR) $17.25
        </LabelRadio>

        <LabelRadio
          width='185px'
          margin='0 0 15px 0'
        >
          <input
            type='radio'
            checked={shippingMethod === 'second-day-air'}
            onChange={(): void => setShippingMethod('second-day-air')}
          />
          UPS (SECOND DAY AIR) $12.25
        </LabelRadio>

        <ButtonBlack>CONTINUE</ButtonBlack>
      </form>
    </Step3>
  )
}




export default CheckoutStep3;
