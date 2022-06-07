import {useState} from 'react';
import styled from 'styled-components/macro';
import {smallScreen} from '../mediaQueries';




const Wrapper = styled.article`
  width: 326px;
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--color-border);

  @media ${smallScreen} {width: 100%}
`;

const Title = styled.h2`
  margin: 15px 0 15px 0;
  text-align: center;
  font-family: var(--font-main);
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);
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
  flex-direction: column;
  font-family: var(--font-second);
  font-size: 10px;
  font-weight: 400;
  color: var(--color-main);

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
  }

  > textarea {height: 76px}
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > button {margin: 0 18px 12px 18px}
`;




interface Review {
  id: number;
  title: string;
  rating: number;
  text: string;
  date: string;
  name: string;
}

const reviewsList: Review[] = [
  {
    id: 1,
    title: 'Must have!',
    rating: 5,
    text: `
      Maximus nisl lorem, a pulvinar arcu mattis vitae.
      Vivamus porta, nisi ut tempor viverra, sed lacinia mauris sapien in lorem.
      Fusce posuere semper eros nec porttitor.
      Proin odio justo, maximus sed eros nec, luctus convallis ligula.`,
    date: '25.04.2022',
    name: 'Liya Andrade'
  },
  {
    id: 2,
    title: 'Very good',
    rating: 4,
    text: `
      In sed tortor at sapien accumsan congue.
      Phasellus aliquet, justo eu varius egestas, ex lectus mattis nulla.
      Vivamus rhoncus ante turpis, nec dictum nulla convallis vitae.`,
    date: '29.04.2022',
    name: 'Anisa Bell'
  }
]




const ProductReviews = (): JSX.Element => {
  const [reviews, setReviews] = useState<Review[]>(reviewsList);
  const [writeReview, setWriteReview] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');


  return(
    <Wrapper>
      {!writeReview ?
        <>
          <Title>{reviews.length} REVIEWS</Title>
          {reviews.map((review: Review): JSX.Element => {
            return(
              <Review key={review.id}>
                <span>{review.title}</span>
                <Stars rating={review.rating}>
                  <div>★★★★★</div>
                  <div>☆☆☆☆☆</div>
                </Stars>
                <p>{review.text}</p>
                <span>{review.date}</span>
                <span>{review.name}</span>
              </Review>
            );
          })}

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
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setName(e.target.value);
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
                setName('');
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

                const review: Review = {
                  id: reviews[reviews.length - 1].id + 1,
                  title: title,
                  rating: rating,
                  text: text,
                  date: `${day}.${month}.${date.getFullYear()}`,
                  name: name
                };

                const newReviews: Review[] = [...reviews];
                newReviews.push(review);

                setReviews(newReviews);
                setTitle('');
                setRating(0);
                setText('');
                setName('');
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
