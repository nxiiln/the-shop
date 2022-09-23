import {useState} from 'react';
import styled from 'styled-components/macro';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';
import {HashLink} from 'react-router-hash-link';
import {useAppSelector} from '../redux-hooks';
import {IProduct} from '../types/IProduct';
import BreadCrumbs from './BreadCrumbs';
import CatalogFilters from './CatalogFilters';
import Products from './Products';
import data from '../data.json';
import banner from '../images/banner.png';
import bannerSmall from '../images/bannerSmall.png';




const WrapperOuter = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 1100px;
  padding: 0 1% 50px;
`;

const Groups = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${mediumScreen}, ${smallScreen} {
    justify-content: center;
  }
`;

const BannerSmall = styled.div`
  width: 195px;
  height: 312px;
  margin-top: 50px;
  position: relative;

  > div {
    width: 119px;
    height: 57px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--color-background-main);
    position: absolute;
    top: 255px;
    left: 0px;
    font-family: var(--font-second);
    line-height: 14px;
    font-weight: 300;

    > span:first-child {
      font-size: 14px;
      color: var(--color-text-main);
      margin-bottom: 2px;
    }

    > span:last-child {
      font-size: 11px;
      color: var(--color-text-regular);
    }
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h2 {
    font-family: var(--font-main);
    font-size: 24px;
    font-weight: 400;
    color: var(--color-text-main);
  }

  > div {
    width: calc(95% - 135px);
    height: 1px;
    margin-bottom: 10px;
    background: var(--color-border);
    margin: 0;
  }

  > span {
    font-family: var(--font-regular);
    font-size: 10px;
    font-weight: 400;
    color: var(--color-text-regular);
  }
`;

const Banner = styled.div`
  margin: 15px 0;
  position: relative;

  > img {width: 100%}

  > span:nth-child(2) {
    position: absolute;
    top: 38%;
    left: 5%;
    font-family: var(--font-main);
    font-size: 36px;
    font-weight: 400;
    color: var(--color-text-main);

    @media ${smallScreen} {font-size: 4.8vw}
  }

  > span:nth-child(3) {
    position: absolute;
    top: 52%;
    left: 5.3%;
    font-family: var(--font-second);
    font-size: 12px;
    font-weight: 300;
    color: var(--color-text-main);
  }
`;


// Sort
const SortWrapper = styled.div`
  width: 160px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;

  @media ${mediumScreen}, ${smallScreen} {margin-left: 8px}

  > span {
    font-family: var(--font-second);
    font-size: 10px;
    font-weight: 300;
    color: var(--color-text-main);
  }
`;

const Sort = styled.div<{open: boolean}>`
  width: 110px;
  height: ${props => props.open ? '110px' : '30px'};
  align-self: start;
  background: var(--color-background-main);
  border: 1px solid var(--color-border);
  z-index: 2;
  transition: height 0.15s ease-out;
  cursor: pointer;
`;

const SortHeader = styled.div<{open: boolean}>`
  height: 30px;
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-family: var(--font-regular);
  font-size: 11px;
  font-weight: 400;
  color: var(--color-text-regular);

  > span {
    margin-right: 5px;
    font-size: 16px;
    color: var(--color-text-main);
    transform: ${props => props.open ? 'rotate(90deg)' : 'rotate(0deg)'};
    transition: transform 0.15s ease-out;
  }
`;

const SortBody = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
`;

const ButtonSortMode = styled.button`
  margin: 0 0 8px 7px;
  display: flex;
  font-family: var(--font-regular);
  font-size: 11px;
  font-weight: 400;
  color: var(--color-text-regular);
  background: transparent;
  border: none;

  &:hover {
    color: var(--color-text-main);
    cursor: pointer;
  }
`;


// Pagination
const Pagination = styled.div`
  width: min-content;
  height: 20px;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled(HashLink)`
  margin: 0px 5px;
  padding: 0;
  font-size: 14px;
  text-decoration: none;
  color: #000;
  background: var(--color-background-main);
  border: none;
  cursor: pointer;
`;


interface IPage {
  order?: number;
  curr?: boolean;
  numberPages?: number;
}

const Page = styled(HashLink)<IPage>`
  width: 20px;
  height: 20px;
  margin: 0px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-regular);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  background: var(--color-background-main);
  cursor: pointer;

  ${props => props.curr ?
    `color: #000;
     border: 1px solid #000;`
    :
    `color: #e4e2e1;
     border: 1px solid #e4e2e1;`
  }
`;




const Catalog = (): JSX.Element => {
  const screen = useMediaQuery();
  const [sortOpen, setSortOpen] = useState<boolean>(false);
  const [sortMode, setSortMode] = useState<string>('Popular');
  const [currPage, setCurrPage] = useState<number>(1);
  const {category, sizes, colors} = useAppSelector(state => state.catalogFIlters);


  const filteredProducts: IProduct[] = data.products
    .filter((product: IProduct): boolean =>
      (category === 'all' || product.category === category) &&
      (sizes.length === 0 || sizes.includes(product.size)) &&
      (colors.length === 0 || colors.includes(product.color))
    );


  const sortedProducts: IProduct[] = filteredProducts
    .sort((a: IProduct, b: IProduct): number => 
      sortMode === 'Price decrease' ? b.price - a.price :
        sortMode === 'Price increase' ? a.price - b.price : a.id - b.id
    );

  
  const totalProductsPerPage: number = 9;
  const pageCount: number = Math.ceil(sortedProducts.length / totalProductsPerPage);
  const products: IProduct[] = sortedProducts.slice(
    (currPage - 1) * totalProductsPerPage,
    ((currPage - 1) * totalProductsPerPage) + totalProductsPerPage
  );


  const pagination = (pageCount: number, currPage: number): (number | string)[] => {
    const range = (start: number, end: number): number[] => Array.from(
      {length: end - start + 1},
      ((_, i: number): number => start + i)
    );


    if (pageCount >= 10) {
      if (currPage >= (pageCount - 5)) {
        return [1, '...', ...range(pageCount - 6, pageCount)];
      }
  
      if (currPage >= 7) {
        return [1, '...', ...range(currPage - 2, currPage + 2), '...', pageCount];
      }
  
      return [...range(1, 7), '...', pageCount];
    }
  

    return range(1, pageCount);
  }


  return(
    <WrapperOuter>
      <WrapperInner>
        <BreadCrumbs
          link={
            <>
              <HashLink to='/#top'>Home</HashLink>
              <span>/</span>
              <span>Catalog</span>
            </>
          }
          marginBottom='20px'
        />


        <Groups>
          {screen.big &&
            <div>
              <CatalogFilters />
              <BannerSmall>
                <img src={bannerSmall} alt='bannerSmall' />
                <div>
                  <span>MICHAEL KORS</span>
                  <span>SPRING 2022</span>
                </div>
              </BannerSmall>
            </div>
          }


          <div>
            <HeaderWrapper>
              <h2>CATALOG</h2>
              <div />
              <span>{data.products.length} items</span>
            </HeaderWrapper>


            <Banner>
              <img src={banner} alt='banner' />
              <span>LOVE SUNHAT</span>
              {!screen.small && <span>NEW SUMMER HAT COLLECTION 2022</span>}
            </Banner>

            {!screen.big && <CatalogFilters />}
            
            <SortWrapper id='sort-wrapper'>
              <span>SORT BY</span>
              <Sort
                open={sortOpen}
                onClick={(): void => setSortOpen(!sortOpen)}
              >
                <SortHeader open={sortOpen}>
                  {sortMode}
                  <span>▸</span>
                </SortHeader>

                {sortOpen &&
                  <SortBody>
                    <ButtonSortMode
                      type='button'
                      onClick={(): void => setSortMode('Popular')}
                    >
                      Popular
                    </ButtonSortMode>

                    <ButtonSortMode
                      type='button'
                      onClick={(): void => setSortMode('Price decrease')}
                    >
                      Price decrease
                    </ButtonSortMode>

                    <ButtonSortMode
                      type='button'
                      onClick={(): void => setSortMode('Price increase')}
                    >
                      Price increase
                    </ButtonSortMode>
                  </SortBody>
                }
              </Sort>
            </SortWrapper>


            <Products
              products={products}
              maxWidth='725px'
              margin='40px 0 80px 0'
            />


            <Pagination>
              <Navigation
                to='#sort-wrapper'
                smooth
                onClick={(): void => {
                  if (currPage === 1) return;
                  setCurrPage((currPage: number): number => currPage - 1);
              }}>
                ❮
              </Navigation>

              {pagination(pageCount, currPage)
                .map((page: number | string): JSX.Element =>
                  <Page
                    key={page}
                    to='#sort-wrapper'
                    smooth
                    curr={page === currPage}
                    onClick={(): false | void => typeof page === 'number' && setCurrPage(page)}
                  >
                    {page}
                  </Page>
              )}

              <Navigation
                to='#sort-wrapper'
                smooth
                onClick={(): void => {
                  if (currPage === pageCount) return;
                  setCurrPage((currPage: number): number => currPage + 1);
              }}>
                ❯
              </Navigation>
            </Pagination>
          </div>
        </Groups>
      </WrapperInner>
    </WrapperOuter>
  );
}




export default Catalog;
