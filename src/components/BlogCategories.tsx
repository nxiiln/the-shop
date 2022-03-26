import React from 'react';
import styled from 'styled-components/macro';


const WrapperOuter = styled.article`
  width: 276px;
  height: 201px;
  position: absolute;
  top: 60px;
  left: 71.3%;
  border: 1px solid #e4e2e1;
`;

const WrapperInner = styled.div`
  width: 120px;
  height: 145px;
  margin: 20px 0 0 20px;
`;

const Categories = styled.h2`
  margin: 0 0 25px 5px;
  font-family: Nunito;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 300;
  color: #000;
`;

const Category = styled.button`
  width: 132px;
  margin-bottom: 15px;
  display: flex;
  font-family: Nunito;
  font-size: 11px;
  line-height: 1.2;
  font-weight: 300;
  color: #000;
  background: transparent;
  border: none;
  cursor: pointer;
`;


const BlogCategories = (): JSX.Element => {
	return(
    <WrapperOuter>
      <WrapperInner>
        <Categories>CATEGORIES</Categories>
        <Category>CELEBRITY STYLE (39)</Category>
        <Category>FASHION SHOWS (15)</Category>
        <Category>SHOPPING (27)</Category>
        <Category>BEAUTY LOOK (119)</Category>
      </WrapperInner>
    </WrapperOuter>
  );
}


export default BlogCategories;
