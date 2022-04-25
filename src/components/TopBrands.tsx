import React from 'react';
import styled from 'styled-components/macro';
import emporioArmani from '../images/emporioArmani.png';
import calvinKlein from '../images/calvinKlein.png';
import dkny from '../images/dkny.png';
import baldinini from '../images/baldinini.png';


const WrapperOuter = styled.section`
  width: 100vw;
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 965px;
  height: 105px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Line = styled.div`
  width: 370px;
  height: 1px;
  background: var(--color-border);
`;

const MainText = styled.h2`
  margin: 0;
  font-family: var(--font-main);
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);
`;


const TopBrands = (): JSX.Element => {
  return(
    <WrapperOuter>
      <WrapperInner>
        <Line />
        <MainText>TOP BRANDS</MainText>
        <Line />
        <img
          src={emporioArmani}
          alt='Emporio Armani'
        />
        <img
          src={calvinKlein}
          alt='Calvin Klein'
        />
        <img
          src={dkny}
          alt='DKNY'
        />
        <img
          src={baldinini}
          alt='Baldinini'
        />
        <img
          src={emporioArmani}
          alt='Emporio Armani'
        />
        <img
          src={dkny}
          alt='DKNY'
        />
      </WrapperInner>
    </WrapperOuter>
  );
}


export default TopBrands;
