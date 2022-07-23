import styled from "styled-components";
import {mediumScreen} from '../mediaQueries';
import {ContinueShopping} from "./Cart";


const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  
  > a {
    margin-bottom: 50px;
    align-self: center;
    @media ${mediumScreen} {align-self: center}
  }
`;

const Title = styled.h2`
  margin: 42px 0 20px 0;
  align-self: center;
  font-family: var(--font-main);
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);
`;




const PageNotFound = (): JSX.Element => (
  <Wrapper>
    <Title>PAGE NOT FOUND</Title>
    <ContinueShopping to='/catalog#top'>CONTINUE SHOPPING</ContinueShopping>
  </Wrapper>
);


export default PageNotFound;
