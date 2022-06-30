import styled from "styled-components";
import {Link} from "react-router-dom";


const Wrapper = styled.main`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 28px;
  font-weight: 200;
  font-family: var(--font-regular);
  color: var(--color-text-main);
`;

const ContinueShopping = styled(Link)`
  font-size: 20px;
  font-family: var(--font-regular);
  color: var(--color-text-main);
`;


const PageNotFound = (): JSX.Element => (
  <Wrapper>
    <Title>Page not found</Title>
    <ContinueShopping to='catalog'>Continue shopping</ContinueShopping>
  </Wrapper>
);


export default PageNotFound;
