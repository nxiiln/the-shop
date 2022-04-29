import React, {useState} from 'react';
import styled from 'styled-components/macro';


const Wrapper = styled.article`
  width: 326x;
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--color-border);
`;

const Header = styled.h2`
  margin: 15px 0 15px 0;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: var(--font-regular);
  font-size: 11px;
  line-height: 14px;
  font-weight: 400;
  color: var(--color-text-regular);
  background: var(--color-background-highlight);

  span:first-child {
    font-family: var(--font-second);
    font-size: 13px;
    color: var(--color-text-main);
  }

  p {margin: 12px 0 12px 0}
`;

const Stars = styled.div<{rating: number}>`
  width: 70px;
  height: 15px;
  position: relative;
  font-size: 16px;
  line-height: 0.8;
  letter-spacing: 0.5px;

  div:first-child {
    display: inline-block;
    position: absolute;

    --rating: ${props => props.rating / 5 * 100}%;

    background: linear-gradient(
      90deg,
      var(--color-text-highlight) var(--rating),
      var(--color-background-main) var(--rating)
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  div:last-child {
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


interface Review {
  id: number;
  header: string;
  rating: number;
  text: string;
  date: string;
  name: string;
}

const reviewsList: Review[] = [
  {
    id: 1,
    header: 'Must have!',
    rating: 5,
    text: `
      Maximus nisl lorem, a pulvinar arcu mattis vitae.
      Vivamus porta, nisi ut tempor viverra, sed lacinia mauris sapien in lorem.
      Fusce posuere semper eros nec porttitor.
      Proin odio justo, maximus sed eros nec, luctus convallis ligula.`,
    date: 'April 25, 2022',
    name: 'Liya Andrade'
  },
  {
    id: 2,
    header: 'Very good',
    rating: 4,
    text: `
      In sed tortor at sapien accumsan congue.
      Phasellus aliquet, justo eu varius egestas, ex lectus mattis nulla.
      Vivamus rhoncus ante turpis, nec dictum nulla convallis vitae.`,
    date: 'April 29, 2022',
    name: 'Anisa Bell'
  }
]


const ProductReviews = (): JSX.Element => {
  const [reviews, setReviews] = useState<Review[]>(reviewsList);

  return(
    <Wrapper>
      <Header>{reviews.length} REVIEWS</Header>
      {reviews.map((review: Review): JSX.Element => {
        return(
          <Review key={review.id}>
            <span>{review.header}</span>
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
      <Button type='button'>WRITE REVIEW</Button>
    </Wrapper>
  );
}


export default ProductReviews;
