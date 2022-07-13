import styled from 'styled-components/macro';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';
import {Link, useParams} from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';
import RelatedProducts from './RelatedProducts';
import ProductSlider from './ProductSlider';
import ProductDescription from './ProductDescription';
import ProductReviews from './ProductReviews';
import PageNotFound from './404';




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
                <ProductSlider />
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
