import React from 'react';
import styled from 'styled-components';
import emporioArmani from '../images/emporioArmani.png';
import calvinKlein from '../images/calvinKlein.png';
import dkny from '../images/dkny.png';
import baldinini from '../images/baldinini.png';


const WrapperOuter = styled.div`
  width: 100vw;
  position: relative;
  top: 340px;
  left: 0px;
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
  background: #aaa;
`;

const MainText = styled.h2`
  margin: 0;
  font-family: 'Playfair Display SC';
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: #000;
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
