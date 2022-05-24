import styled from 'styled-components/macro';
import BreadCrumbs from './BreadCrumbs';
import blogPost1 from '../images/blogPost1.png';
import blogPost2 from '../images/blogPost2.png';
import blogPost3 from '../images/blogPost3.png';
import BlogCategories from './BlogCategories';
import BlogLabels from './BlogLabels';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';




const WrapperOuter = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 1100px;
  margin-bottom: 50px;
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

  @media ${mediumScreen}, ${smallScreen} {
    grid-area: 3 / 1 / 4 / 2;
  }
`;

const OlderPosts = styled.button`
  width: 123px;
  height: 20px;
  margin-left: 520px;
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover {text-decoration: underline}
`;


//Post-------------------------------------------
const PostWrapper = styled.article`
  width: 647px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
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




const Blog = (): JSX.Element => {
  const screen = useMediaQuery();

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
          gridArea={`1 / 1 / 2 / ${screen.big ? '3' : '1'}`}
        />
        
        <PostsWrapper>
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

          <OlderPosts>OLDER POSTS ❯</OlderPosts>
        </PostsWrapper>

        <BlogCategories gridArea={screen.big ? '2 / 2 / 3 / 3' : '2 / 1 / 3 / 2'} />
        {screen.big && <BlogLabels gridArea='3 / 2 / 4 / 3' />}
  	  </WrapperInner>
  	</WrapperOuter>
  )
}




export default Blog;
