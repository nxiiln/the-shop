import {useState} from 'react';
import styled from 'styled-components/macro';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';
import {Link} from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';
import blogPost2 from '../images/blogPost2.png';
import BlogCategories from './BlogCategories';
import BlogLabels from './BlogLabels';




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

const ReviewReplay = styled.button`
  display: block;
  margin-left: auto;
  font-family: var(--font-regular);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);
  background: transparent;
  border: none;
  cursor: pointer;
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
`;




interface Review {
  id: number;
  name: string;
  text: string;
  date: string;
}

const reviewsList: Review[] = [
  {
    id: 1,
    name: 'Ami Legge',
    text: 'Curabitur justo elit, accumsan non interdum a, facilisis vel odio. Pellentesque commodo vulputate nisi id suscipit. Proin dapibus turpis vel rhoncus cursus. Aliquam sit amet gravida sem.',
    date: '25 Marth 2022'
  },
  {
    id: 2,
    name: 'Lisa Beck',
    text: 'Mauris sollicitudin vestibulum nisi, at dignissim quam volutpat in. Nulla id quam velit.',
    date: '2 April 2022'
  },
  {
    id: 3,
    name: 'Stefanie Broadhurst',
    text: 'Vivamus tristique tellus id sapien egestas, id pellentesque felis volutpat. Sed et convallis leo. Donec vitae eros rhoncus, blandit odio ut, bibendum metus.',
    date: '3 April 2022'
  }
];




const BlogPost = (): JSX.Element => {
  const [reviews, setReviews] = useState<Review []>(reviewsList);
  const [name, setName] = useState<string>('');
  const [text, setText] = useState<string>('');
  const screen = useMediaQuery();


  return(
    <WrapperOuter>
      <WrapperInner>
        <BreadCrumbs
          link={
            <>
              <Link to='/'>Home</Link>
              <span>/</span>
              <Link to='/blog'>Blog</Link>
              <span>/</span>
              <span>Do you realy love a trench coat?</span>
            </>
          }
          gridArea={`1 / 1 / 2 / ${screen.big ? '3' : '1'}`}
        />

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

        <ReviewsWrapper>
          <ReviewsNumber>
            3 REVIEWS
          </ReviewsNumber>

          {reviews.map((review: Review) =>
            <Review key={review.id}>
              <Reviewname>{review.name}</Reviewname>
              <ReviewText>{review.text}</ReviewText>
              <ReviewDate>{review.date}</ReviewDate>
              <ReviewReplay type='button'>Replay</ReviewReplay>
            </Review>
          )}

          <WriteReview onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
            e.preventDefault();
            const newReviews: Review[] = [...reviews];
            const date: Date = new Date();
            const newReview: Review = {
              id: reviews[reviews.length-1].id + 1,
              name: name,
              text: text,
              date: `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`
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
              />
            </Label>

            <Label>
              REVIEW TEXT
              <InputTextArea
                value={text}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => setText(e.target.value)}
              />
            </Label>
            
            <SubmitReview type='submit'>SUBMIT REVIEW</SubmitReview>
          </WriteReview>
        </ReviewsWrapper>

        <BlogCategories gridArea={screen.big ? '2 / 2 / 3 / 3' : '2 / 1 / 3 / 2'} />
        {screen.big && <BlogLabels gridArea='3 / 2 / 4 / 3' />}
      </WrapperInner>
    </WrapperOuter>
  );
}




export default BlogPost;
