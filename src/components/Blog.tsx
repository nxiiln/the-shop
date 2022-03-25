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

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 10px;
  background: #aaa;
`;

const BreadCrumbsWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const BreadCrumbs = styled.button`
  font-family: Arial;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 400;
  color: #aaa;
  background: transparent;
  border: none;
  cursor: pointer;
`;

const BreadCrumbsLeft = styled(BreadCrumbs)`
  width: 100px;
  height: 10px;
`;

const BreadCrumbsRight = styled(BreadCrumbs)`
  width: 130px;
  height: 10px;
`;




const Blog = (): JSX.Element => {
  return(
  	<WrapperOuter>
  	  <WrapperInner>
        <Line />
        <BreadCrumbsWrapper>
          <BreadCrumbsLeft type='button'>
            Home / Blog
          </BreadCrumbsLeft>
          <BreadCrumbsRight type='button'>
            {'<'} Return to Previous Page
          </BreadCrumbsRight>
        </BreadCrumbsWrapper>
  	  </WrapperInner>
  	</WrapperOuter>
  )
}




export default Blog;
