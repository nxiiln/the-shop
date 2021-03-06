import styled from 'styled-components/macro';
import {HashLink} from 'react-router-hash-link';
import fromOurBlogA from '../images/fromOurBlogA.png';
import fromOurBlogB from '../images/fromOurBlogB.png';
import {smallScreen} from '../mediaQueries';


const Wrapper = styled.article`
  width: 310px;
  min-width: 275px;
  height: 435px;
  margin-left: 40px;
  position: relative;
  border: 1px solid var(--color-border);

  @media ${smallScreen} {margin: 0}
`;

const MainText = styled.h2`
  margin: 15px 0 20px 0;
  text-align: center;
  font-family: var(--font-main);
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);
`;

const Image = styled.img`
  margin: 0 0 25px 27px;
`;

const Description = styled.div<{position: string}>`
  width: 150px;
  height: 92px;
  position: absolute;
  top: ${props => props.position === 'up' ? '127px' : '307px'};
  left: 120px;
  background: var(--color-background-main);
`;

const PostHeader = styled.div`
  margin: 12px 0 0 15px;
  font-family: var(--font-second);
  font-size: 14px;
  line-height: 16px;
  font-weight: 300;
  color: var(--color-text-main);
`;

const PostAbout = styled.p`
  width: 120px;
  margin: 8px 0 0 15px;
  font-family: var(--font-second);
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  color: var(--color-text-regular);
`;

const ReadMore = styled(HashLink)`
  width: 95px;
  height: 20px;
  margin: 0;
  position: relative;
  top: -15px;
  left: 155px;
  display: flex;
  font-family: var(--font-main);
  font-size: 14px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);
  text-decoration: none;

  &:hover {text-decoration: underline}
`;


const FromOurBlog = (): JSX.Element => (
  <Wrapper>
    <MainText>FROM OUR BLOG</MainText>
    <Image src={fromOurBlogA} alt='woman in white dress' />

    <Description position='up'>
      <PostHeader>BEST SUMMER TRENDS</PostHeader>
      <PostAbout>
        We know what you need this summer.
        Most fashion looks
      </PostAbout>
    </Description>

    <Image src={fromOurBlogB} alt='woman in white dress' />

    <Description position='down'>
      <PostHeader>BEST SUMMER TRENDS</PostHeader>
      <PostAbout>
        We know what you need this summer.
        Most fashion looks
      </PostAbout>
    </Description>

    <ReadMore to='blog#'>READ MORE</ReadMore>
  </Wrapper>
);


export default FromOurBlog;
