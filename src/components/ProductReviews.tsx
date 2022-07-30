import {useState} from 'react';
import styled from 'styled-components/macro';
import {smallScreen} from '../mediaQueries';
import {useAppDispatch} from '../redux-hooks';
import {productRatingAdd} from '../slices/productRating';
import {IProductReview} from '../types/IProductReview';
import {IProductReviews} from '../types/IProductReviews';
import data from '../data.json';



const Wrapper = styled.article`
  width: 326px;
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--color-border);

  @media ${smallScreen} {
    width: 100%;
    align-items: start;
  }
`;

const Title = styled.h2`
  margin: 15px 0 15px 0;
  text-align: center;
  font-family: var(--font-main);
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);

  @media ${smallScreen} {align-self: center}
`;

const Review = styled.div`
  width: 320px;
  padding: 15px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: repeat(3, auto);
  font-family: var(--font-regular);
  font-size: 11px;
  line-height: 14px;
  font-weight: 400;
  color: var(--color-text-regular);
  background: var(--color-background-highlight);

  @media ${smallScreen} {
    width: 100%;
    max-width: 490px;
  }

  > span:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
    font-family: var(--font-second);
    font-size: 13px;
    color: var(--color-text-main);
  }

  > div:nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
    justify-self: end;
  }

  > p {
    margin: 12px 0 12px 0;
    grid-area: 2 / 1 / 3 / 3;
  }

  > span:nth-child(4) {
    grid-area: 3 / 1 / 4 / 2;
    align-self: end;
  }

  > span:nth-child(5) {
    grid-area: 3 / 2 / 4 / 3;
    justify-self: end;
  }
`;

const Stars = styled.div<{rating: number}>`
  width: 70px;
  height: 15px;
  position: relative;
  font-size: 16px;
  line-height: 0.8;
  letter-spacing: 0.5px;

  > div:first-child {
    display: inline-block;
    position: absolute;

    --rating: ${props => props.rating / 5 * 100}%;

    background: linear-gradient(
      90deg,
      var(--color-text-highlight) var(--rating),
      var(--color-background-main) var(--rating)
    );

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  > div:last-child {
    display: inline-block;
    position: absolute;
    color: var(--color-text-highlight);
  }
`;

const Button = styled.button`
  width: 103px;
  height: 30px;
  margin: 0 12px 12px 0;
  align-self: end;
  font-family: Nunito;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-text-second);
  background: var(--color-background-second);
  border: none;
  cursor: pointer;

  &:hover {background: var(--color-button-solid-hover)}
`;

const Rating = styled.div`
  width: 140px;
  height: 20px;
  margin: 0 0 10px 16px;
  align-self: start;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-second);
  font-size: 10px;
  font-weight: 400;
  color: var(--color-main);
`;

const SetStars = styled(Stars)`
  width: 88px;
  height: 18px;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
`;

const Label = styled.label`
  width: 290px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  font-family: var(--font-second);
  font-size: 10px;
  font-weight: 400;
  color: var(--color-main);

  @media ${smallScreen} {
    width: 93%;
    margin-left: 16px;
  }

  > input, > textarea {
    width: 290px;
    height: 34px;
    margin-top: 4px;
    font-family: var(--font-regular);
    font-size: 13px;
    font-weight: 400;
    color: var(--color-main);
    border: 1px solid var(--color-border);

    &:focus {
      outline: none;
      border: 1px solid var(--color-background-second);
    }

    @media ${smallScreen} {width: 100%}
  }

  > textarea {height: 76px}
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > button {margin: 0 4% 12px}
`;




const ProductReviews = ({productId}: {productId: number}): JSX.Element => {
  const reviewsKey = `product${productId}`;
  const [reviews, setReviews] = useState<IProductReviews>(data.productReviews);
  const currReviews: IProductReview[] = reviews[reviewsKey];

  const [writeReview, setWriteReview] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const dispatch = useAppDispatch();


  return(
    <Wrapper>
      {!writeReview ?
        <>
          <Title>{currReviews.length} REVIEWS</Title>
          {currReviews.map((review: IProductReview): JSX.Element =>
            <Review key={review.id}>
              <span>{review.title}</span>
              <Stars rating={review.rating}>
                <div>★★★★★</div>
                <div>☆☆☆☆☆</div>
              </Stars>
              <p>{review.text}</p>
              <span>{review.date}</span>
              <span>{review.author}</span>
            </Review>
          )}

          <Button
            type='button'
            onClick={(): void => setWriteReview(true)}
          >
            WRITE REVIEW
          </Button>
        </>
        :
        <>
          <Title>WRITE REVIEW</Title>
          <Rating>
            RATING
            <SetStars rating={rating}>
              <div>
                ★★★★★
              </div>
              <div>
                <span onMouseEnter={(): void => setRating(1)}>☆</span>
                <span onMouseEnter={(): void => setRating(2)}>☆</span>
                <span onMouseEnter={(): void => setRating(3)}>☆</span>
                <span onMouseEnter={(): void => setRating(4)}>☆</span>
                <span onMouseEnter={(): void => setRating(5)}>☆</span>
              </div>
            </SetStars>
          </Rating>

          <Label>
            NAME
            <input
              type='text'
              value={author}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setAuthor(e.target.value);
              }}
            />
          </Label>

          <Label>
            REVIEW TITLE
            <input
              type='text'
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setTitle (e.target.value);
              }}
            />
          </Label>

          <Label>
            REVIEW TEXT
            <textarea
              value={text}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => {
                setText (e.target.value);
              }}
            />
          </Label>

          <Buttons>
            <Button
              type='button'
              onClick={(): void => {
                setTitle('');
                setRating(0);
                setText('');
                setAuthor('');
                setWriteReview(false);
              }}
            >
              RETURN
            </Button>

            <Button
              type='button'
              onClick={(): void => {
                if (rating === 0) return;
                const date: Date = new Date();

                const day: string = date.getDate() <= 9 ?
                  `0${date.getDate()}` : `${date.getDate()}`;

                const month: string = date.getMonth() <= 10 ?
                  `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;

                const review: IProductReview = {
                  id: currReviews.length + 1,
                  title: title,
                  rating: rating,
                  text: text,
                  date: `${day}.${month}.${date.getFullYear()}`,
                  author: author
                };

                const newReviews: IProductReviews = JSON.parse(JSON.stringify(reviews));
                newReviews[reviewsKey].push(review);
                setReviews(newReviews);
                dispatch(productRatingAdd({productId: reviewsKey, rating: rating}));
                setTitle('');
                setRating(0);
                setText('');
                setAuthor('');
                setWriteReview(false);
              }}
            >
              SUBMIT REVIEW
            </Button>
          </Buttons>
        </>
      }
    </Wrapper>
  );
}




export default ProductReviews;
