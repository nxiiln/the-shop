import React from 'react';
import MostPopular from './MostPopular';
import FromOurBlog from './FromOurBlog';
import styled from 'styled-components';


const Wrapper = styled.section`
  width: 100vw;
  position: relative;
  top: 320px;
  left: 0px;
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
