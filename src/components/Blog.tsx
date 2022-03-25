import React from 'react';
import styled from 'styled-components/macro';
import blogPost1 from '../images/blogPost1.png';
import blogPost2 from '../images/blogPost2.png';
import blogPost3 from '../images/blogPost3.png';




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
