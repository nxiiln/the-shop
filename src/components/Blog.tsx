import styled from 'styled-components/macro';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';
import {HashLink} from 'react-router-hash-link';
import BreadCrumbs from './BreadCrumbs';
import BlogCategories from './BlogCategories';
import BlogLabels from './BlogLabels';
import {IBlogPost} from '../types/IBlogPost';
import data from '../data.json';
import {blogPostImages} from '../images/blogPostImages';




const WrapperOuter = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 1100px;
  margin: 0 1% 50px 1%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 40px 240px 1fr;

  @media ${smallScreen}, ${mediumScreen} {
    grid-template-columns: 1fr;
    grid-template-rows: 40px auto 1fr;
  }
`;

const PostsWrapper = styled.div`
  grid-area: 2 / 1 / 4 / 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${mediumScreen}, ${smallScreen} {grid-area: 3 / 1 / 4 / 2}
`;


// Post
const PostWrapper = styled(HashLink)`
  width: 650px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  text-decoration: none;

  @media ${smallScreen} {
    width: 100%;
    max-width: 650px;
  }
`;

const PostHeader = styled.h2`
  margin: 0 0 22px;
  display: inline-block;
  font-family: var(--font-main);
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-text-main);
`;

const PostDate = styled.span`
  margin-bottom: 13px;
  font-family: var(--font-second);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  color: var(--color-text-main);
`;

const ProductImage = styled.img`
  width: 100%;
`;

const PostDescription = styled.span`
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: var(--font-second);
  font-size: 14px;
  line-height: 22px;
  font-weight: 300;
  color: var(--color-text-regular);
`;

const PostLine = styled.div`
  width: 100%;
  height: 3px;
  margin-top: 25px;
  background: var(--color-background-second);
`;




const Blog = (): JSX.Element => {
  const screen = useMediaQuery();

  return(
  	<WrapperOuter>
  	  <WrapperInner>
        <BreadCrumbs
          link={
            <>
              <HashLink to='/'>Home</HashLink>
              <span>/</span>
              <span>Blog</span>
            </>
          }
          gridArea={`1 / 1 / 2 / ${screen.big ? '3' : '1'}`}
        />
        
        <PostsWrapper>
          {[...data.blogPosts].reverse().map((post: IBlogPost): JSX.Element =>
            <PostWrapper key={post.id} to={`post${post.id}#top`}>
              <PostHeader>{post.header}</PostHeader>
              <PostDate>{post.date}</PostDate>
              <ProductImage src={blogPostImages[`blogPost${post.id}`]} alt={post.header} />
              <PostDescription>{post.description}</PostDescription>
              {post.id !== 1 && <PostLine />}
            </PostWrapper>
          )}
        </PostsWrapper>

        <BlogCategories gridArea={screen.big ? '2 / 2 / 3 / 3' : '2 / 1 / 3 / 2'} />
        {screen.big && <BlogLabels gridArea='3 / 2 / 4 / 3' />}
  	  </WrapperInner>
  	</WrapperOuter>
  )
}




export default Blog;
