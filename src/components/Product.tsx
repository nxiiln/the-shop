import styled from 'styled-components/macro';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';
import {Link, useParams} from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';
import RelatedProducts from './RelatedProducts';
import ProductSlider from './ProductSlider';
import ProductDescription from './ProductDescription';
import ProductReviews from './ProductReviews';
import PageNotFound from './404';

import product1 from '../images/product1.png';
import product2 from '../images/product2.png';
import product3 from '../images/product3.png';
import product4 from '../images/product4.png';
import product5 from '../images/product5.png';
import product6 from '../images/product6.png';
import product7 from '../images/product7.png';
import product8 from '../images/product8.png';
import product9 from '../images/product9.png';
import product10 from '../images/mostPopularA.png';

const productImages: string[] = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
];




const WrapperOuter = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 1100px;
  padding: 0 1% 100px;

  > div {
    display: flex;
    justify-content: space-between;

    @media ${mediumScreen} {
      > div {padding: 0 20px}
    }

    @media ${smallScreen} {
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Slider = styled.article`
  width: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  border: 1px solid orange;

  > img {width: 100%}
  
  @media ${mediumScreen}, ${smallScreen} {
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
  }

  @media ${smallScreen} {

    > img {
      /* width: 100%; */
      /* object-fit: cover; */
      /* max-width: 400px; */
      /* min-width: 400px; */
    }
  }
`;

const ProductTriangle = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: -6px;
  left: -26px;
  border-bottom: 40px solid var(--color-triangle-new);
  border-right: 40px solid transparent;
  border-left: 40px solid transparent;
  transform: rotate(-45deg);
`;

const ProductTriangleDescription = styled.span`
  position: absolute;
  top: 5px;
  left: 4px;
  font-family: var(--font-main);
  font-size: 14px;
  line-height: 1.2;
  font-weight: 700;
  color: var(--color-text-second);
`;




const Product = (): JSX.Element => {
  const screen = useMediaQuery();

  const findProductId = (id: string | undefined): number => {
    if (typeof id === 'string') {
      return +id.replace(/(product)(\d+$)/, '$2');
    }
    return -1;
  }

  const productId: number = findProductId(useParams().id);

  
  return(
    <>
      {productId >= 1 && productId <= 10 ?
        <WrapperOuter>
          <WrapperInner>
            <BreadCrumbs
              link={
                <>
                  <Link to='/'>Home</Link>
                  <span>/</span>
                  <Link to='/catalog'>Catalog</Link>
                  <span>/</span>
                  <span>Detailed Swing Dress</span>
                </>
              }
              marginBottom='20px'
            />

            <div>
              <div>
                <Slider>
                  <ProductTriangle />
                  <ProductTriangleDescription>NEW</ProductTriangleDescription>
                  <img
                    src={productImages[(productId - 1)]}
                    alt='product image'
                  />
                </Slider>
                {!screen.small && <RelatedProducts />}
              </div>

              <div>
                <ProductDescription />
                <ProductReviews />
                {screen.small && <RelatedProducts />}
              </div>
            </div>
          </WrapperInner>
        </WrapperOuter>
        : 
        <PageNotFound />
      }
    </>
  );
}




export default Product;
