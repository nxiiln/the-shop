import styled from 'styled-components/macro';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';
import {Link, useParams} from 'react-router-dom';
import data from '../data.json';
import {productImages} from '../images/productImages';
import BreadCrumbs from './BreadCrumbs';
import Products from './Products';
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

const ProductImage = styled.div`
  width: 400px;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  /* border: 1px solid orange; */

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

const WrapperRelatedProducts = styled.article`
  /* width: 720px; */
  /* height: 310px; */
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const HeaderRelatedProducts = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    width: calc(95% - 240px);
    height: 1px;
    background: var(--color-border);
  }

  > span {
    margin: 0;
    font-family: var(--font-main);
    font-size: 24px;
    line-height: 1.2;
    font-weight: 400;
    color: var(--color-text-main);
  }
`;




const Product = (): JSX.Element => {
  const findProductId = (id: string | undefined): number => {
    if (typeof id === 'string') {
      return +id.replace(/(product)(\d+$)/, '$2');
    }
    return -1;
  }
  
  const productId: number = findProductId(useParams().id);
  const screen = useMediaQuery();

  const relatedProducts: JSX.Element =
    <WrapperRelatedProducts>
      <HeaderRelatedProducts>
        <span>RELATED PRODUCTS</span>
        <div />
      </HeaderRelatedProducts>

      <Products
        products={data.products.filter(product =>
          product.id === 3 || product.id === 4 || product.id === 10
        )}
        margin='20px 0 0'
      />
    </WrapperRelatedProducts>;

  
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
                  <span>
                    {data.products[productId - 1].name[0].toUpperCase()}
                    {data.products[productId - 1].name.substring(1)}
                  </span>
                </>
              }
              marginBottom='20px'
            />

            <div>
              <div>
                <ProductImage>
                  <ProductTriangle />
                  <ProductTriangleDescription>NEW</ProductTriangleDescription>
                  <img
                    src={productImages[`product${productId}`]}
                    alt='product image'
                  />
                </ProductImage>
                
                {!screen.small && relatedProducts}
              </div>

              <div>
                <ProductDescription {...data.products[productId - 1]} />
                <ProductReviews productId={productId} />
                {screen.small && relatedProducts}
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
