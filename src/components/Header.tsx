import styled from 'styled-components/macro';
import {smallScreen, mediumScreen, useMediaQuery} from '../mediaQueries';
import {HashLink} from 'react-router-hash-link';
import Top from './Top';
import CartPreview from './CartPreview';
import Menu from './Menu';


const Wrapper = styled.header`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CentralGroup = styled.div`
  width: 1100px;
  height: 90px;
  position: relative;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 55px;
  position: absolute;
  display: flex;
  justify-content: center;
`;

const Title = styled(HashLink)`
  font-family: var(--font-main);
  font-size: 36px;
  font-weight: 400;
  color: var(--color-text-main);
  text-decoration: none;
`;

const CartPreviewWrapper = styled.div`
  position: relative;
  @media ${smallScreen}, ${mediumScreen} {align-self: end}
`;


const Header = (): JSX.Element => {
  const screen = useMediaQuery();

  return(
    <Wrapper>
      <Top />
      <CentralGroup>
        <TitleWrapper>
          <Title to='/#top'>THE SHOP</Title>
        </TitleWrapper>

        {!screen.small &&
          <CartPreviewWrapper>
            <CartPreview />
          </CartPreviewWrapper>
        }
      </CentralGroup>
      <Menu />
    </Wrapper>
  );
}


export default Header;
