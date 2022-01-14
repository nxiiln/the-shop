import React from 'react';
import MostPopular from './MostPopular';
import FromOurBlog from './FromOurBlog';
import styled from 'styled-components';


const Wrapper = styled.section`
  width: 100vw;
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;


const HomeBottom = (): JSX.Element => {
  return(
    <Wrapper>
      <MostPopular />
      <FromOurBlog />
    </Wrapper>
  );
}


export default HomeBottom;
