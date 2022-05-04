import React from 'react';
import MostPopular from './MostPopular';
import FromOurBlog from './FromOurBlog';
import styled from 'styled-components/macro';


const WrapperOuter = styled.article`
  width: 100vw;
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 1100px;
  min-width: 960px;
  display: flex;
  justify-content: space-between;
`;


const HomeBottom = (): JSX.Element => {
  return(
    <WrapperOuter>
      <WrapperInner>
        <MostPopular />
        <FromOurBlog />
      </WrapperInner>
    </WrapperOuter>
  );
}


export default HomeBottom;
