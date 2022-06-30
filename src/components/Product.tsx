import styled from 'styled-components/macro';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';
import {Link} from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';
import RelatedProducts from './RelatedProducts';
import ProductSlider from './ProductSlider';
import ProductDescription from './ProductDescription';
import ProductReviews from './ProductReviews';




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
  );
}




export default Product;
