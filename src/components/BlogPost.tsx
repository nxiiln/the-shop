import React from 'react';
import styled from 'styled-components/macro';
import blogPost2 from '../images/blogPost2.png';
import BlogCategories from './BlogCategories';
import BlogLabels from './BlogLabels';




const WrapperOuter = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 960px;
  height: 2075px;
  position: relative;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 10px;
  background: #aaa;
`;

const BreadCrumbsWrapper = styled.article`
  width: 100%;
  margin-bottom: 35px;
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
  width: 68px;
  height: 10px;
`;

const BreadCrumbsRight = styled(BreadCrumbs)`
  width: 130px;
  height: 10px;
`;


//Post-------------------------------------------
const PostWrapper = styled.article`
  width: 647px;
  height: 590px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

const PostHeader = styled.h2`
  width: 480px;
  margin: 0 0 22px 0;
  display: inline-block;
  font-family: 'Playfair Display SC';
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  color: #000;
`;

const PostDate = styled.span`
  margin-bottom: 13px;
  font-family: Nunito;
  font-size: 11px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  color: #000;
`;

const PostDescription = styled.div`
  margin-top: 18px;
  margin-bottom: 55px;
  font-family: Nunito;
  font-size: 14px;
  line-height: 22px;
  font-weight: 300;
  color: #aaa;
  p {margin: 0 0 30px 0;}
`;




const BlogPost = (): JSX.Element => {
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

        <PostWrapper>
          <PostHeader>do you realy love a trench coat?</PostHeader>
          <PostDate>16 Marth 2022</PostDate>
          <img src={blogPost2} alt={blogPost2} />
          <PostDescription>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Aenean pretium accumsan metus vestibulum dignissim. 
              Aenean et lorem in risus mollis finibus eget nec ipsum. 
              Curabitur commodo gravida lacus, eget tempus lorem sodales a. 
              Cras tincidunt blandit pulvinar. Phasellus ut cursus diam. 
              Aenean ac fringilla magna, et vulputate lectus. 
              Vestibulum pretium ut massa vitae egestas.
            </p>
            <p>
              Mauris tempus luctus gravida. 
              Vivamus hendrerit purus commodo diam aliquet, mollis porta dui vestibulum. 
              Curabitur ultrices facilisis libero id tristique. 
              Maecenas sagittis elit in ex varius consequat. 
              Cras condimentum, enim sed volutpat pellentesque, 
              mauris elit hendrerit neque, vitae volutpat lorem massa a ante. 
              Quisque id nisi congue, semper ante ultricies, dapibus orci. 
              Morbi lacinia bibendum massa ac ornare. 
              Cras pharetra et elit ac efficitur. 
              Sed vitae ipsum ut odio rutrum facilisis id a ligula. 
              Interdum et malesuada fames ac ante ipsum primis in faucibus. 
              Ut sit amet fringilla tortor. 
              Integer semper dignissim lorem, sit amet molestie lacus mollis et. 
              Sed a risus ut orci viverra sodales ut in dolor. 
              Nunc condimentum, ipsum nec eleifend volutpat, 
              lorem neque pretium massa, quis ultricies odio ligula nec ante.
            </p>
            <p>
              Donec turpis massa, malesuada vel risus at, ullamcorper volutpat purus. 
              Proin nunc eros, vehicula euismod nisl sit amet, malesuada aliquet felis. 
              Morbi in congue ligula. Sed elementum, elit id fermentum blandit, 
              turpis felis pharetra tortor, vel posuere est nisl quis nisi. 
              Donec dictum eu est et efficitur. Praesent convallis tortor eget nibh pulvinar dapibus. 
              Phasellus congue nulla efficitur faucibus posuere. 
              Integer augue ante, efficitur ac mollis mollis, lobortis a velit. 
              Phasellus ac blandit purus. In in urna eget orci sagittis commodo viverra in felis. 
              Nullam at ex arcu. Nullam mollis dapibus felis quis pulvinar. 
              Cras vel lectus nibh. Curabitur sodales, felis consequat scelerisque faucibus, 
              ex purus commodo urna, eu molestie est nisl nec tortor. 
              Etiam non semper est, vitae blandit nisl.
            </p>
          </PostDescription>
        </PostWrapper>

        <BlogCategories />
        <BlogLabels />
      </WrapperInner>
    </WrapperOuter>
  );
}




export default BlogPost;
