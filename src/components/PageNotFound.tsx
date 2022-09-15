import styled from "styled-components";
import {mediumScreen} from '../mediaQueries';
import {HashLink} from "react-router-hash-link";
import Button from "./Button";


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
    <Button
      as={HashLink}
      to='/catalog#top'
      variant='outline'
      width='290px'
      $smallWidth='45%'
      $maxWidth='290px'
    >
      CONTINUE SHOPPING
    </Button>
  </Wrapper>
);


export default PageNotFound;
