import {useState} from 'react';
import styled from 'styled-components/macro';
import {smallScreen} from '../mediaQueries';
import {IProduct} from '../IProduct';
import {sizes, colors} from './CatalogFilters';
import wishListSymbol from '../images/wishList.png';
import {useAppDispatch, useAppSelector} from '../redux-hooks';
import {cartAdd, cartRemove, cartProductSize, cartProductColor} from '../slices/cart';
import {wishListAdd, wishListRemove, wishListProductSize, wishListProductColor} from '../slices/wishList';




const Wrapper = styled.article`
  width: 100%;
  max-width: 330px;

  @media ${smallScreen} {
    width: 100%;
    max-width: 490px;
  }
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
  text-transform: uppercase;
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

  > span {color: var(--color-text-highlight)}
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
  width: 100%;
  margin-bottom: 7px;
  padding: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-family: var(--font-second);
  font-size: 11px;
  font-weight: 300;
  line-height: 1.2;
  color: var(--color-text-main);
  background: var(--color-background-regular);
  border: 1px solid var(--color-border);
  border-radius: 20px;

  > span:nth-child(2) {transform: rotate(90deg)}

  &:hover {
    background: var(--color-background-main);
    border-radius: 0;
  }

  ${props => props.open && `
    background: var(--color-background-main);
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
  text-transform: uppercase;
  cursor: pointer;
`;

const Checkbox = styled.label`
  height: 18px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  font-family: var(--font-second);
  font-size: 10px;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-text-main);
  cursor: pointer;

  &:hover {text-decoration: underline}

  > input {
    margin: 0 7px 0 0;
    accent-color: var(--color-text-main);
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
  width: 100%;
  height: 100px;
`;

const Quantity = styled.label`
  width: 60px;
  height: 45px;
  margin: 10px 10px 20px 10px;
  display: grid;
  align-content: space-between;
  font-family: var(--font-second);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-text-main);

  > input {
    width: 58px;
    height: 30px;
    padding-left: 24px;
    font-family: var(--font-second);
    font-size: 12px;
    font-weight: 300;
    color: var(--color-text-main);
    border: 1px solid var(--color-border);

    &:focus {outline: none}
  }
`;

const Buttons = styled.div`
  width: 325px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;

  @media ${smallScreen} {width: 100%}

  > button {
    width: 155px;
    height: 30px;
    font-family: var(--font-second);
    font-size: 10px;
    font-weight: 300;
    cursor: pointer;
  }

  > button:first-child {
    color: var(--color-text-second);
    background: var(--color-background-second);
    border: none;
  }

  > button:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-text-main);
    background: var(--color-background-main);
    border: 1px solid var(--color-border);
    img {margin-right: 7px}
  }
`;

const Accordion = styled.details`
  width: 325px;
  border-top: 1px solid var(--color-border);

  @media ${smallScreen} {width: 100%}

  > summary {
    padding: 12px 0 12px 0;
    display: flex;
    justify-content: space-between;
    font-family: var(--font-main);
    font-size: 14px;
    line-height: 1.2;
    font-weight: 400;
    color: var(--color-text-main);
    list-style-type: none;
    cursor: pointer;
    user-select: none;
  }

  > summary > span:last-child {
    font-size: 9px;
    transform: rotate(-45deg);
  }

  &[open] {
    > summary > span:last-child {
      transform: rotate(45deg);
    }
  }

  > p {
    margin: 8px 0 12px 0;
    font-family: var(--font-regular);
    font-size: 11px;
    line-height: 14px;
    font-weight: 400;
    color: var(--color-text-regular);
  }
`;

const Tag = styled.button`
  margin-right: 10px;
  padding: 4px 8px 4px 8px;
  font-family: var(--font-regular);
  font-size: 14px;
  font-weight: 400;
  color: var(--color-text-main);
  background: var(--color-background-highlight);
  border: 1px solid var(--color-border);
  border-radius: 15px;
  cursor: pointer;
  &:hover {text-decoration: underline}
`;




const ProductDescription = (product: IProduct): JSX.Element => {
  const cart: IProduct[] = useAppSelector(state => state.cart);
  const cartProduct: IProduct | undefined = cart.find(cartProduct => cartProduct.id === product.id);
  const wishList: IProduct[] = useAppSelector(state => state.wishList);
  const dispatch = useAppDispatch();
  
  const [sizeOpen, setSizeOpen] = useState<boolean>(false);
  const initialSize: string = typeof cartProduct === 'undefined' ? product.size : cartProduct.size;
  const [size, setSize] = useState<string>(initialSize);
  
  const [colorOpen, setColorOpen] = useState<boolean>(false);
  const initialColor: string = typeof cartProduct === 'undefined' ? product.color : cartProduct.color;
  const [color, setColor] = useState<string>(initialColor);
  
  
  return(
    <Wrapper>
      <Id>PR-{product.id}256-08</Id>
      <Name>{product.name}</Name>

      <AboutReviews>
        <Stars rating={4.5}>
          <div>★★★★★</div>
          <div>☆☆☆☆☆</div>
        </Stars>
        <NumberReviews>2 Reviews</NumberReviews>
        <AddReview type='button'>Add Review</AddReview>
      </AboutReviews>

      <Availability>Availability: <span>In stock</span></Availability>
      <SmallDescription>{product.smallDescription}</SmallDescription>
      <Price>${product.price}</Price>


      <Dropdown open={sizeOpen}>
        <DropdownHeader onClick={(): void => setSizeOpen(!sizeOpen)}>
          <span>SIZE: {size}</span>
          <span>❯</span>
        </DropdownHeader>

        {sizeOpen &&
          <CheckboxSizeWrapper>
            {sizes.map((currSize: string): JSX.Element =>
              <Checkbox key={currSize}>
                <input
                  type='checkbox'
                  checked={currSize === size}
                  onChange={(): void => {
                    setSize(currSize);
                    const size: string = currSize;
                    
                    if (cart.some(cartProduct => cartProduct.id === product.id)) {
                      dispatch(cartProductSize({...product, size}));
                    }

                    if (wishList.some(wishListProduct => wishListProduct.id === product.id)) {
                      dispatch(wishListProductSize({...product, size}));
                    }
                  }}
                />
                {currSize}
              </Checkbox>
            )}
          </CheckboxSizeWrapper>
        }
      </Dropdown>


      <Dropdown open={colorOpen}>
        <DropdownHeader onClick={(): void => setColorOpen(!colorOpen)}>
          <span>COLOR: {color}</span>
          <span>❯</span>
        </DropdownHeader>

        {colorOpen &&
          <CheckboxColorWrapper>
            {colors.map((currColor: string): JSX.Element =>
              <Checkbox key={currColor}>
                <input
                  type='checkbox'
                  checked={currColor === color}
                  onChange={(): void => {
                    setColor(currColor);
                    const color: string = currColor;

                    if (cart.some(cartProduct => cartProduct.id === product.id)) {
                      dispatch(cartProductColor({...product, color}));
                    }

                    if (wishList.some(wishListProduct => wishListProduct.id === product.id)) {
                      dispatch(wishListProductColor({...product, color}));
                    }
                  }}
                />
                {currColor}
              </Checkbox>
            )}
          </CheckboxColorWrapper>
        }
      </Dropdown>


      <Buttons>
        <button
          type='button'
          onClick={(): void => {
            !cart.some(cartProduct => cartProduct.id === product.id) ?
            dispatch(cartAdd({...product, size, color})) : dispatch(cartRemove(product));
          }}
        >
          {!cart.some(cartProduct => cartProduct.id === product.id) ?
            'ADD TO CART' : 'PRODUCT IN CART'
          }
        </button>

        <button
          type='button'
          onClick={(): void => {
            !wishList.some(wishListProduct => wishListProduct.id === product.id) ?
            dispatch(wishListAdd({...product, size, color})) : dispatch(wishListRemove(product));
          }}
        >
          <img src={wishListSymbol} alt='wishList' />
          {!wishList.some(wishListProduct => wishListProduct.id === product.id) ?
            'WISHLIST' : 'PRODUCT IN WISHLIST'
          }
        </button>
      </Buttons>


      <Accordion>
        <summary>
          <span>DESCRIPTION</span>
          <span>◢</span>
        </summary>
        <p>{product.description}</p>
      </Accordion>

      <Accordion>
        <summary>
          <span>ADDITIONAL INFO</span>
          <span>◢</span>
        </summary>
        <p>{product.additionalInfo}</p>
      </Accordion>

      <Accordion>
        <summary>
          <span>TAGS</span>
          <span>◢</span>
        </summary>
        <p>
          {product.tags.map((tag: string): JSX.Element =>
            <Tag key={tag} type='button'>{tag}</Tag>
          )}
        </p>
      </Accordion>
    </Wrapper>
  );
}




export default ProductDescription;
