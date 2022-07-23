import styled from 'styled-components/macro';
import {smallScreen, useMediaQuery} from '../mediaQueries';
import emporioArmani from '../images/emporioArmani.png';
import calvinKlein from '../images/calvinKlein.png';
import dkny from '../images/dkny.png';
import baldinini from '../images/baldinini.png';


const WrapperOuter = styled.article`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 1100px;
  height: 105px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media ${smallScreen} {justify-content: space-evenly}
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Line = styled.div`
  width: calc(53% - 145px);
  height: 1px;
  background: var(--color-border);
`;

const Title = styled.h2`
  width: 145px;
  margin: 0;
  font-family: var(--font-main);
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);
`;


const TopBrands = (): JSX.Element => {
  const screen = useMediaQuery();

  return(
    <WrapperOuter id='top-brands'>
      <WrapperInner>
        <TitleWrapper>
          <Line />
          <Title>TOP BRANDS</Title>
          <Line />
        </TitleWrapper>

        {screen.big && <img src={emporioArmani} alt='Emporio Armani' />}

        {!screen.small &&
          <>
            <img src={calvinKlein} alt='Calvin Klein'/>
            <img src={dkny} alt='DKNY' />
            <img src={baldinini} alt='Baldinini' />
          </>
        }

        <img src={emporioArmani} alt='Emporio Armani'/>
        <img src={dkny} alt='DKNY'/>
      </WrapperInner>
    </WrapperOuter>
  );
}


export default TopBrands;
