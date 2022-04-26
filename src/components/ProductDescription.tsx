import React, {useState} from 'react';
import styled from 'styled-components/macro';




const Wrapper = styled.article`
  width: 330px;
  height: 640px;
  border: 1px solid aqua;
`;

const Id = styled.span`
  font-family: var(--font-regular);
  font-size: 11px;
  font-weight: 400;
  line-height: 1.2;
  color: var(--color-text-regular);
`;

const Name = styled.h2`
  margin: 0 0 15px 0;
  font-family: var(--font-main);
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;
  color: var(--color-text-main);
`;

const AboutReviews = styled.div`
  width: 230px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const NumberReviews = styled.span`
  font-family: var(--font-regular);
  font-size: 11px;
  font-weight: 400;
  line-height: 1.2;
  color: var(--color-text-main);
`;

const AddReview = styled.button`
  width: 75px;
  font-family: var(--font-regular);
  font-size: 11px;
  font-weight: 400;
  line-height: 1.2;
  color: var(--color-text-main);
  background: none;
  border: none;
  border-left: 1px solid var(--color-text-regular);

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Availability = styled.div`
  margin-bottom: 10px;
  font-family: var(--font-regular);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-regular);

  span {
    color: var(--color-text-highlight);
  }
`;

const SmallDescription = styled.p`
  margin: 0 0 15px 0;
  font-family: var(--font-regular);
  font-size: 11px;
  line-height: 14px;
  font-weight: 400;
  color: var(--color-text-regular);
`;

const Price = styled.span`
  font-family: var(--font-second);
  font-size: 18px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-text-main);
`;




const ProductDescription = (): JSX.Element => {
  return(
    <Wrapper>
      <Id>MU-4587-89</Id>
      <Name>DETAILED SWING DRESS</Name>

      <AboutReviews>
        <Stars rating={4}>
          <div>★★★★★</div>
          <div>☆☆☆☆☆</div>
        </Stars>
        <NumberReviews>2 Reviews</NumberReviews>
        <AddReview type='button'>Add Review</AddReview>
      </AboutReviews>

      <Availability>Availability: <span>In stock</span></Availability>
      <SmallDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer et nisi erat.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
      </SmallDescription>
      <Price>$1,875.00</Price>
    </Wrapper>
  );
}




export default ProductDescription;
