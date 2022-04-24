import React from 'react';
import styled from 'styled-components/macro';
import BreadCrumbs from './BreadCrumbs';
import blogPost1 from '../images/blogPost1.png';
import blogPost2 from '../images/blogPost2.png';
import blogPost3 from '../images/blogPost3.png';
import BlogCategories from './BlogCategories';
import BlogLabels from './BlogLabels';




const WrapperOuter = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 960px;
  height: 2000px;
  position: relative;
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
  margin-bottom: 22px;
  display: inline-block;
  font-family: var(--font-main);
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  color: #000;
`;

const PostDate = styled.span`
  margin-bottom: 13px;
  font-family: var(--font-second);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  color: #000;
`;

const PostDescription = styled.span`
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: var(--font-second);
  font-size: 14px;
  line-height: 22px;
  font-weight: 300;
  color: #aaa;
`;

const PostLine = styled.div`
  width: 100%;
  height: 3px;
  background: #000;
`;
//-----------------------------------------------


const OlderPosts = styled.button`
  width: 123px;
  height: 20px;
  position: relative;
  left: 530px;
  background: transparent;
  border: none;
  cursor: pointer;
`;




const Blog = (): JSX.Element => {
  interface Post {
    id: number;
    header: string;
    date: string;
    image: string;
    description: string;
  }

  const posts: Post[] = [
    {
      id: 3,
      header: 'what’s the best beauty look to wear with a metallic?',
      date: '25 Marth 2022',
      image: blogPost1,
      description: 'Every color has a personality, an emotion that you channel while wearing it. Red is exciting — a color to evoke your inner daring. Then, there"s pink: safe, benign, and obviously pretty. Or is it?'
    },
    {
      id: 2,
      header: 'do you realy love trench coat?',
      date: '16 Marth 2022',
      image: blogPost2,
      description: 'Every color has a personality, an emotion that you channel while wearing it. Red is exciting — a color to evoke your inner daring. Then, there"s pink: safe, benign, and obviously pretty. Or is it?'
    },
    {
      id: 1,
      header: 'how to wear a scarf like a french woman',
      date: '08 January 2022',
      image: blogPost3,
      description: 'Every color has a personality, an emotion that you channel while wearing it. Red is exciting — a color to evoke your inner daring. Then, there"s pink: safe, benign, and obviously pretty. Or is it?'
    }
  ];


  return(
  	<WrapperOuter>
  	  <WrapperInner>
        <BreadCrumbs
          link={
            <>
              <a href='#'>Home</a>
              <span>/</span>
              <span>Blog</span>
            </>
          }
          return='#'
          marginBottom='20px'
          gridArea=''
        />

        {posts.map((post: Post): JSX.Element => {
          return(
            <PostWrapper key={post.id}>
              <PostHeader>{post.header}</PostHeader>
              <PostDate>{post.date}</PostDate>
              <img src={post.image} alt={post.image} />
              <PostDescription>{post.description}</PostDescription>
              {post.id !== 1 && <PostLine />}
            </PostWrapper>
          );
        })}

        <OlderPosts>OLDER POSTS {'>'}</OlderPosts>

        <BlogCategories />
        <BlogLabels />
  	  </WrapperInner>
  	</WrapperOuter>
  )
}




export default Blog;
