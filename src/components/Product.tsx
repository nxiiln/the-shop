import styled from 'styled-components/macro';
import BreadCrumbs from './BreadCrumbs';
import RelatedProducts from './RelatedProducts';
import ProductSlider from './ProductSlider';
import ProductDescription from './ProductDescription';
import ProductReviews from './ProductReviews';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';




const WrapperOuter = styled.main`
  width: 100vw;
  padding: 0 1% 100px;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 1100px;

  > div {
    display: flex;
    justify-content: space-between;

    @media ${mediumScreen} {
      > div {
        margin: 0 20px 0;
      }
    }

    @media ${smallScreen} {
      flex-direction: column;
      align-items: center;
    }
  }
`;




const Product = (): JSX.Element => {
  const screen = useMediaQuery();

  return(
    <WrapperOuter>
      <WrapperInner>
        <BreadCrumbs
          link={
            <>
              <a href='#'>Home</a>
              <span>/</span>
              <a href='#'>Women</a>
              <span>/</span>
              <a href='#'>Tops</a>
              <span>/</span>
              <span>Detailed Swing Dress</span>
            </>
          }
          return='#'
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
  );
}




export default Product;
