import {useState, useEffect} from 'react';
import styled from 'styled-components/macro';
import {smallScreen} from '../mediaQueries';
import {useAppDispatch, useAppSelector} from '../redux-hooks';
import {cartAdd, cartRemove, cartProductSize, cartProductColor} from '../slices/cart';
import {wishListAdd, wishListRemove, wishListProductSize, wishListProductColor} from '../slices/wishList';
import {sizes, colors} from './CatalogFilters';
import {LabelCheckbox} from './Form';
import Button from './Button';
import {IProduct} from '../types/IProduct';
import {IProductReview} from '../types/IProductReview';
import {IProductRating} from '../types/IProductRating';
import data from '../data.json';
import cartSymbol from '../images/cartSymbol.png';
import wishListSymbol from '../images/wishList.png';




const Wrapper = styled.article`
  @media ${smallScreen} {width: 100%}
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
  width: 130px;
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

const Dropdown = styled.div<{open: boolean, openHeight: string}>`
  width: 100%;
  height: 30px;
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
  background: var(--color-background-highlight);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  transition: all 0.15s ease-out;

  &:hover {
    background: var(--color-background-main);
    border-radius: 0;
  }

  ${props => props.open && `
    height: ${props.openHeight};
    background: var(--color-background-main);
    border-radius: 0;
  `}
`;

const DropdownHeader = styled.div<{open: boolean}>`
  width: 100%;
  min-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;

  > span:last-child {
    transform: ${props => props.open ? 'rotate(90deg)' : 'rotate(0deg)'};
    transition: transform 0.15s ease-out;
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
  width: 240px;
  height: 60px;
`;

const CheckboxColorWrapper = styled(CheckboxWrapper)`
  width: 260px;
  height: 100px;
`;

const Buttons = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;

  @media ${smallScreen} {width: 100%}
`;

const Accordion = styled.details`
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
  const cartProduct: IProduct | undefined = cart
    .find((cartProduct: IProduct): boolean => cartProduct.id === product.id);

  const wishList: IProduct[] = useAppSelector(state => state.wishList);
  const ratings = useAppSelector(state => state.productRating);
  const dispatch = useAppDispatch();
  
  const [sizeOpen, setSizeOpen] = useState<boolean>(false);
  const [size, setSize] = useState<string>('');
  const calculatedSize: string = cartProduct?.size || size || product.size;
  
  const [colorOpen, setColorOpen] = useState<boolean>(false);
  const [color, setColor] = useState<string>('');
  const calculatedColor: string = cartProduct?.color || color || product.color;
  
  const reviewsKey = `product${product.id}` as keyof typeof data.productReviews;
  const initialRatings: number[] = data.productReviews[reviewsKey]
    .map((review: IProductReview): number => review.rating);

  const userRatings: number[] = ratings
    .filter((rating: IProductRating): boolean => rating.productId === reviewsKey)
    .map((rating: IProductRating): number => rating.rating);

  const numberReviews: number = initialRatings.length + userRatings.length;
  
  const rating: number = [...initialRatings, ...userRatings]
    .reduce((prevRating: number, currRating: number): number => prevRating + currRating, 0)
    / numberReviews;


  useEffect((): {(): void} => {
    return (): void => {
      setSizeOpen(false);
      setSize('');
      setColorOpen(false);
      setColor('');
    }
  }, [product]);


  return(
    <Wrapper>
      <Id>PR-{product.id}256-08</Id>
      <Name>{product.name}</Name>

      <AboutReviews>
        <Stars rating={rating}>
          <div>★★★★★</div>
          <div>☆☆☆☆☆</div>
        </Stars>
        <NumberReviews>{numberReviews} Reviews</NumberReviews>
      </AboutReviews>

      <Availability>Availability: <span>In stock</span></Availability>
      <SmallDescription>{product.smallDescription}</SmallDescription>
      <Price>${product.price}</Price>


      <Dropdown open={sizeOpen} openHeight='100px'>
        <DropdownHeader open={sizeOpen} onClick={(): void => setSizeOpen(!sizeOpen)}>
          <span>SIZE: {calculatedSize}</span>
          <span>❯</span>
        </DropdownHeader>

        {sizeOpen &&
          <CheckboxSizeWrapper>
            {sizes.map((currSize: string): JSX.Element =>
              <LabelCheckbox
                key={currSize}
                margin='0 0 5px 0'
              >
                <input
                  type='checkbox'
                  checked={currSize === calculatedSize}
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
              </LabelCheckbox>
            )}
          </CheckboxSizeWrapper>
        }
      </Dropdown>


      <Dropdown open={colorOpen} openHeight='140px'>
        <DropdownHeader open={colorOpen} onClick={(): void => setColorOpen(!colorOpen)}>
          <span>COLOR: {calculatedColor}</span>
          <span>❯</span>
        </DropdownHeader>

        {colorOpen &&
          <CheckboxColorWrapper>
            {colors.map((currColor: string): JSX.Element =>
              <LabelCheckbox
                key={currColor}
                margin='0 0 10px 0'
              >
                <input
                  type='checkbox'
                  checked={currColor === calculatedColor}
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
              </LabelCheckbox>
            )}
          </CheckboxColorWrapper>
        }
      </Dropdown>


      <Buttons>
        <Button
          type='button'
          width='40%'
          icon={cartSymbol}
          onClick={(): void => {
            const size: string = calculatedSize;
            const color: string = calculatedColor;
            !cart.some(cartProduct => cartProduct.id === product.id) ?
              dispatch(cartAdd({...product, size, color})) : dispatch(cartRemove(product));
          }}
        >
          {!cart.some(cartProduct => cartProduct.id === product.id) ?
            'ADD TO CART' : 'PRODUCT IN CART'
          }
        </Button>

        <Button
          type='button'
          variant='outline'
          width='40%'
          icon={wishListSymbol}
          onClick={(): void => {
            const size: string = calculatedSize;
            const color: string = calculatedColor;
            !wishList.some(wishListProduct => wishListProduct.id === product.id) ?
              dispatch(wishListAdd({...product, size, color})) : dispatch(wishListRemove(product));
          }}
        >
          {!wishList.some(wishListProduct => wishListProduct.id === product.id) ?
            'WISHLIST' : 'PRODUCT IN WISHLIST'
          }
        </Button>
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
