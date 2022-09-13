import {useState} from 'react';
import styled from 'styled-components/macro';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';
import {Link, useParams} from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';
import BlogCategories from './BlogCategories';
import BlogLabels from './BlogLabels';
import PageNotFound from './PageNotFound';
import {IBlogPostReview} from '../types/IBlogPostReview';
import data from '../data.json';
import {blogPostImages} from '../images/blogPostImages';




const WrapperOuter = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 1100px;
  margin: 0 1% 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 40px 240px 1fr 1fr;

  @media ${mediumScreen}, ${smallScreen} {
    grid-template-columns: 1fr;
    grid-template-rows: 40px repeat(3, auto);
  }
`;


// Post
const PostWrapper = styled.article`
  width: 650px;
  margin-bottom: 25px;
  grid-area: 2 / 1 / 4 / 2;
  display: flex;
  flex-direction: column;
  justify-self: center;

  > img {width: 100%}

  @media ${mediumScreen}, ${smallScreen} {
    grid-area: 3 / 1 / 4 / 2;
  }

  @media ${smallScreen} {
    width: 100%;
    max-width: 650px;
  }
`;

const PostHeader = styled.h2`
  margin: 0 0 22px 0;
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

const PostDescription = styled.div`
  margin-top: 18px;
  font-family: var(--font-second);
  font-size: 14px;
  line-height: 22px;
  font-weight: 300;
  text-align: justify;
  color: var(--color-text-regular);

  > p {margin: 0 0 30px 0}
`;


// Reviews
const ReviewsWrapper = styled.article`
  width: 650px;
  grid-area: 4 / 1 / 5 / 2;
  justify-self: center;

  @media ${smallScreen} {
    width: 100%;
    max-width: 650px;
  }
`;

const ReviewsNumber = styled.h2`
  margin: 0 0 12px 0;
  font-family: var(--font-main);
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);
`;

const Review = styled.div`
  width: 100%;
  margin-bottom: 8px;
  padding: 20px 35px 15px 30px;
  position: relative;
  background: var(--color-background-highlight);
`;

const Reviewname = styled.span`
  font-family: var(--font-regular);
  font-size: 11px;
  line-height: 14px;
  font-weight: 700;
  color: var(--color-text-main);
`;

const ReviewText = styled.p`
  margin: 10px 0 10px 0;
  font-family: var(--font-regular);
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
  color: var(--color-text-regular);
`;

const ReviewDate = styled.span`
  font-family: var(--font-regular);
  font-size: 11px;
  line-height: 14px;
  font-weight: 400;
  color: var(--color-text-regular);
`;


// WriteReview
const WriteReview = styled.form`
  width: 100%;
  margin-top: 30px;
  padding: 35px 25px 25px 30px;
  border: 1px solid var(--color-border);
`;

const WriteReviewHeader = styled.h2`
  margin: 0 0 20px 0;
  font-family: var(--font-main);
  font-size: 18px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);
`;

const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  font-family: var(--font-second);
  font-size: 10px;
  line-height: 30px;
  font-weight: 400;
  color: var(--color-text-main);
`;

const InputText = styled.input`
  width: 100%;
  height: 34px;
  border: 1px solid var(--color-border);
`;

const InputTextArea = styled.textarea`
  width: 100%;
  max-width: 100%;
  height: 76px;
  border: 1px solid var(--color-border);
`;

const SubmitReview = styled.button`
  width: 103px;
  height: 30px;
  font-family: var(--font-second);
  font-size: 10px;
  font-weight: 300;
  color: var(--color-text-second);
  background: var(--color-background-second);
  border: none;
  cursor: pointer;

  &:hover {background: var(--color-button-solid-hover)}
`;




const BlogPost = (): JSX.Element => {
  const findBlogPostId = (id: string | undefined): number => {
    if (typeof id === 'string') {
      return +id.replace(/(post)(\d+$)/, '$2');
    }
    return -1;
  }
  
  const blogPostId: number = findBlogPostId(useParams().id);
  const post = data.blogPosts[blogPostId - 1];

  const [reviews, setReviews] = useState<IBlogPostReview[]>(post.reviews);
  const [name, setName] = useState<string>('');
  const [text, setText] = useState<string>('');
  const screen = useMediaQuery();



  return(
    <>
      {blogPostId >= 1 && blogPostId <= 3 ?
        <WrapperOuter>
          <WrapperInner>
            <BreadCrumbs
              link={
                <>
                  <Link to='/'>Home</Link>
                  <span>/</span>
                  <Link to='/blog'>Blog</Link>
                  <span>/</span>
                  <span>
                    {post.header[0].toUpperCase()}
                    {post.header.substring(1)}
                  </span>
                </>
              }
              gridArea={`1 / 1 / 2 / ${screen.big ? '3' : '1'}`}
            />

            <PostWrapper>
              <PostHeader>{post.header}</PostHeader>
              <PostDate>{post.date}</PostDate>

              <img
                src={blogPostImages[`blogPost${post.id}`]}
                alt={'blog post'}
              />

              <PostDescription>
                {post.text.map((p: string): JSX.Element => <p key={p.substring(0, 16)}>{p}</p>)}
              </PostDescription>
            </PostWrapper>


            <ReviewsWrapper>
              <ReviewsNumber>{reviews.length} REVIEWS</ReviewsNumber>

              {reviews.map((review: IBlogPostReview) =>
                <Review key={review.id}>
                  <Reviewname>{review.name}</Reviewname>
                  <ReviewText>{review.text}</ReviewText>
                  <ReviewDate>{review.date}</ReviewDate>
                </Review>
              )}

              <WriteReview onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
                e.preventDefault();
                if (name === '' || text === '') return;

                const newReviews: IBlogPostReview[] = JSON.parse(JSON.stringify(reviews));
                const date: Date = new Date();

                const day: string = date.getDate() < 10 ?
                  `0${date.getDate()}` : `${date.getDate()}`;

                const month: string = date.getMonth() < 9 ?
                  `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;

                const newReview: IBlogPostReview = {
                  id: reviews[reviews.length-1].id + 1,
                  name: name,
                  text: text,
                  date: `${day}.${month}.${date.getFullYear()}`
                };

                newReviews.push(newReview);
                setReviews(newReviews);
              }}>
                <WriteReviewHeader>WRITE REVIEW</WriteReviewHeader>

                <Label>
                  NAME
                  <InputText
                    type='text'
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setName(e.target.value)}
                    required
                  />
                </Label>

                <Label>
                  REVIEW TEXT
                  <InputTextArea
                    value={text}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => setText(e.target.value)}
                    required
                  />
                </Label>
                
                <SubmitReview type='submit'>SUBMIT REVIEW</SubmitReview>
              </WriteReview>
            </ReviewsWrapper>

            <BlogCategories gridArea={screen.big ? '2 / 2 / 3 / 3' : '2 / 1 / 3 / 2'} />
            {screen.big && <BlogLabels gridArea='3 / 2 / 4 / 3' />}
          </WrapperInner>
        </WrapperOuter>
        :
        <PageNotFound />
      }
    </>
  );
}




export default BlogPost;
