import React from 'react';
import styled from 'styled-components/macro';




const WrapperOuter = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 960px;
  height: 1965px;
  border: 1px solid orange;
`;




const Blog = (): JSX.Element => {
  return(
  	<WrapperOuter>
  	  <WrapperInner>
  	  </WrapperInner>
  	</WrapperOuter>
  )
}




export default Blog;
