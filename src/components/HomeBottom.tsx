import styled from 'styled-components/macro';
import {mediumScreen, smallScreen} from '../mediaQueries';
import Products from './Products';
import {products} from '../products';
import FromOurBlog from './FromOurBlog';


const WrapperOuter = styled.article`
  width: 100vw;
  margin: 50px 0;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 1100px;
  padding: 0 1%;
  display: flex;
  justify-content: space-between;

  @media ${smallScreen} {
    flex-direction: column;
    align-items: center;
  }
`;

const MostPopularWrapper = styled.article`
  min-width: 420px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: auto;

  @media ${mediumScreen} {max-width: 500px}

  @media ${smallScreen} {
    width: 100%;
    min-width: 0;
    align-content: start;
  }
`;

const MostPopularTitle = styled.h2`
  width: 180px;
  font-family: var(--font-main);
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);
`;

const MostPopularLine = styled.div`
  width: calc(97% - 180px);
  height: 1px;
  background-color: var(--color-border);
`;

const MostPopularTop = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const HomeBottom = (): JSX.Element => (
  <WrapperOuter>
    <WrapperInner>
      <MostPopularWrapper>
        <MostPopularTop>
          <MostPopularTitle>MOST POPULAR</MostPopularTitle>
          <MostPopularLine />
        </MostPopularTop>

        <Products
          products={products.filter(product =>
            product.id === 3 || product.id === 4 || product.id === 10
          )}
          margin='20px 0 0'
        />
      </MostPopularWrapper>

      <FromOurBlog />
    </WrapperInner>
  </WrapperOuter>
);


export default HomeBottom;
