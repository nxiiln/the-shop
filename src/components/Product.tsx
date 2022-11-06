import styled from 'styled-components/macro';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';
import {useParams} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import data from '../data.json';
import {productImages} from '../images/productImages';
import BreadCrumbs from './BreadCrumbs';
import Products from './Products';
import ProductDescription from './ProductDescription';
import ProductReviews from './ProductReviews';
import PageNotFound from './PageNotFound';
import {IProduct} from '../types/IProduct';




const WrapperOuter = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 1100px;
  padding: 0 1.5% 100px;
`;

const Groups = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${smallScreen} {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftGroup = styled.div`
  flex: 4 0 0;
  padding-right: 50px;

  @media ${smallScreen} {
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: center;
  }
`;

const RightGroup = styled.div`
  flex: 3 0 0;
  @media ${smallScreen} {max-width: 550px}
`;

const ProductImage = styled.div`
  max-width: 400px;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  justify-content: center;

  > img {width: 100%}
  
  @media ${mediumScreen}, ${smallScreen} {
    flex-direction: column-reverse;
    align-items: center;
  }
  
  @media ${smallScreen} {width: 100%}
`;

const ProductTriangle = styled.div<{attr: string}>`
  width: 0;
  height: 0;
  position: absolute;
  top: -6px;
  left: -26px;
  border-bottom: ${props => props.attr === 'new' ?
    '40px solid var(--color-triangle-new)' :
    '40px solid var(--color-triangle-sale)'
  };
  border-right: 40px solid transparent;
  border-left: 40px solid transparent;
  transform: rotate(-45deg);
`;

const ProductTriangleDescription = styled.span`
  position: absolute;
  top: 5px;
  left: 4px;
  font-family: var(--font-main);
  font-size: 13px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-text-second);
`;

const WrapperRelatedProducts = styled.article`
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
  const currProduct: IProduct = data.products[productId - 1];
  const screen = useMediaQuery();

  const relatedProducts: JSX.Element =
    <WrapperRelatedProducts>
      <HeaderRelatedProducts>
        <span>RELATED PRODUCTS</span>
        <div />
      </HeaderRelatedProducts>

      <Products
        products={data.products.filter(product =>
          (productId === 3 ? product.id === 4 : product.id === 3) ||
          (productId === 10 ? product.id === 6 : product.id === 10)
        )}
        margin='20px 0 0'
      />
    </WrapperRelatedProducts>;

  
  return(
    <>
      {productId >= 1 && productId <= 12 ?
        <WrapperOuter>
          <WrapperInner>
            <BreadCrumbs
              link={
                <>
                  <HashLink to='/#top'>Home</HashLink>
                  <span>/</span>
                  <HashLink to='/catalog#top'>Catalog</HashLink>
                  <span>/</span>
                  <span>
                    {currProduct.name[0].toUpperCase()}
                    {currProduct.name.substring(1)}
                  </span>
                </>
              }
              marginBottom='20px'
            />

            <Groups>
              <LeftGroup>
                <ProductImage>
                  <img
                    src={productImages[`product${productId}`]}
                    alt='product'
                  />

                  {(currProduct.triangle === 'new' || currProduct.triangle === 'sale') &&
                    <>
                      <ProductTriangle
                        attr={currProduct.triangle === 'new' ? 'new' : 'sale'}
                      />

                      <ProductTriangleDescription>
                        {currProduct.triangle === 'new' ? 'new' : 'sale'}
                      </ProductTriangleDescription>
                    </>
                  }
                </ProductImage>
                
                {!screen.small && relatedProducts}
              </LeftGroup>

              <RightGroup>
                <ProductDescription {...currProduct} />
                <ProductReviews productId={productId} />
                {screen.small && relatedProducts}
              </RightGroup>
            </Groups>
          </WrapperInner>
        </WrapperOuter>
        : 
        <PageNotFound />
      }
    </>
  );
}




export default Product;
