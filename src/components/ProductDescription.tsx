import React, {useState} from 'react';
import styled from 'styled-components/macro';
import wishList from '../images/wishList.png';




const Wrapper = styled.article`
  width: 330px;
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
  width: 210px;
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
  display: inline-block;
  margin-bottom: 15px;
  font-family: var(--font-second);
  font-size: 18px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-text-main);
`;

const Dropdown = styled.div<{open: boolean}>`
  width: 325px;
  margin-bottom: 7px;
  padding: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-family: var(--font-second);
  font-size: 11px;
  font-weight: 300;
  line-height: 1.2;
  color: #000;
  background: #f7f7f7;
  border: 1px solid #e4e2e1;
  border-radius: 20px;
  span:nth-child(2) {transform: rotate(90deg)}

  &:hover {
    background: #fff;
    border-radius: 0;
  }

  ${props => props.open && `
    background: #fff;
    border-radius: 0;
    span:nth-child(2) {transform: rotate(-90deg)}
  `}
`;

const DropdownHeader = styled.div`
  width: 100%;
  height: 29px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Checkbox = styled.label`
  margin-bottom: 12px;
  font-family: var(--font-second);
  font-size: 10px;
  font-weight: 400;
  color: var(--color-text-main);
  height: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {text-decoration: underline}

  > input {
    margin: 0 7px 0 0;
    accent-color: #000;
    cursor: pointer;
  }
`;

const CheckboxWrapper = styled.div`
  margin: 10px 0 0 2px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-between;
`;

const CheckboxSizeWrapper = styled(CheckboxWrapper)`
  width: 220px;
  height: 60px;
`;

const CheckboxColorWrapper = styled(CheckboxWrapper)`
  width: 150px;
  height: 30px;
`;




const ProductDescription = (): JSX.Element => {
  const sizeList: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const [sizeOpen, setSizeOpen] = useState<boolean>(false);
  const [size, setSize] = useState<string>('');

  const colorList: string[] = ['BLACK', 'BLUE'];
  const [colorOpen, setColorOpen] = useState<boolean>(false);
  const [color, setColor] = useState<string>('');


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
        Interdum et malesuada fames ac ante ipsum.
      </SmallDescription>
      <Price>$1,875.00</Price>


      <Dropdown open={sizeOpen}>
        <DropdownHeader onClick={(): void => {
          sizeOpen ? setSizeOpen(false) : setSizeOpen(true)
        }}>
          <span>SIZE{size && `: ${size}`}</span>
          <span>❯</span>
        </DropdownHeader>

        {sizeOpen &&
          <CheckboxSizeWrapper>
            {sizeList.map((currSize: string): JSX.Element => {
              return(
                <Checkbox key={currSize}>
                  <input
                    type='checkbox'
                    checked={size === currSize}
                    onChange={(): void => {
                      size === currSize ? setSize('') : setSize(currSize);
                    }}
                  />
                  {currSize}
                </Checkbox>
              );
            })}
          </CheckboxSizeWrapper>
        }
      </Dropdown>


      <Dropdown open={colorOpen}>
        <DropdownHeader onClick={(): void => {
          colorOpen ? setColorOpen(false) : setColorOpen(true)
        }}>
          <span>COLOR{color && `: ${color}`}</span>
          <span>❯</span>
        </DropdownHeader>

        {colorOpen &&
          <CheckboxColorWrapper>
            {colorList.map((currColor: string): JSX.Element => {
              return(
                <Checkbox key={currColor}>
                  <input
                    type='checkbox'
                    checked={color === currColor}
                    onChange={(): void => {
                      color === currColor ? setColor('') : setColor(currColor);
                    }}
                  />
                  {currColor}
                </Checkbox>
              );
            })}
          </CheckboxColorWrapper>
        }
      </Dropdown>
    </Wrapper>
  );
}




export default ProductDescription;
