import {useState} from 'react';
import styled from 'styled-components/macro';
import BreadCrumbs from './BreadCrumbs';
import CatalogFilters from './CatalogFilters';
import CatalogProducts from './CatalogProducts';
import banner from '../images/banner.png';
import bannerSmall from '../images/bannerSmall.png';




const WrapperOuter = styled.article`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const WrapperInner = styled.div`
  width: 960px;
  height: 1950px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 10px;
  background: var(--color-border);
`;

const Groups = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BannerSmall = styled.div`
  width: 195px;
  height: 312px;
  margin-top: 50px;
  position: relative;

  div {
    width: 119px;
    height: 57px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
    position: absolute;
    top: 255px;
    left: 0px;
    font-family: var(--font-second);
    line-height: 14px;
    font-weight: 300;

    span:first-child {
      font-size: 14px;
      color: #000;
      margin-bottom: 2px;
    }

    span:last-child {
      font-size: 11px;
      color: #aaa;
    }
  }
`;

const HeaderWrapper = styled.div`
  width: 725px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-family: var(--font-main);
    font-size: 24px;
    font-weight: 400;
    color: #000;
  }

  div {
    width: 550px;
    margin: 0;
  }

  span {
    font-family: Arial;
    font-size: 10px;
    font-weight: 400;
    color: #aaa;
  }
`;

const Banner = styled.div`
  margin: 15px 0;
  position: relative;

  span:nth-child(2) {
    position: absolute;
    top: 155px;
    left: 35px;
    font-family: var(--font-main);
    font-size: 48px;
    font-weight: 400;
    color: #000;
  }

  span:nth-child(3) {
    position: absolute;
    top: 220px;
    left: 35px;
    font-family: var(--font-second);
    font-size: 12px;
    font-weight: 300;
    color: #282828;
  }
`;


//Sort-------------------------------------------
const SortWrapper = styled.div`
  width: 160px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  > span {
    font-family: var(--font-second);
    font-size: 10px;
    font-weight: 300;
    color: #000;
  }
`;

const Sort = styled.div<{open: boolean}>`
  width: 105px;
  height: ${props => props.open ? '106px' : '30px'};
  align-self: start;
  border: 1px solid #e4e2e1;
  z-index: 2;
`;

const SortHeader = styled.div<{open: boolean}>`
  height: 30px;
  padding-left: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-family: Arial;
  font-size: 11px;
  font-weight: 400;
  color: #aaa;

  > span {
    margin-right: 5px;
    font-size: 16px;
    color: var(--color-text-main);
    ${props => props.open && 'transform: rotate(90deg);'}
  }
`;

const SortBody = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  background: #fff;
`;

const ButtonSortMode = styled.button`
  margin: 0 0 8px 7px;
  display: flex;
  font-family: Arial;
  font-size: 11px;
  font-weight: 400;
  color: #aaa;
  background: transparent;
  border: none;
  :hover {
    color: #000;
    cursor: pointer;
  }
`;


//Pagination-------------------------------------
const Pagination = styled.div`
  width: 120px;
  height: 20px;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.button`
  padding: 0;
  font-size: 14px;
  background: #fff;
  border: none;
  cursor: pointer;
`;

const Page = styled.button<{curr: boolean}>`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial;
  font-size: 11px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  background: #fff;
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
  const [sortOpen, setSortOpen] = useState<boolean>(false);
  const [sortMode, setSortMode] = useState<string>('Position');
  const [currPage, setCurrPage] = useState<number>(1);


  const renderPages = (): JSX.Element[] => {
    let pages: JSX.Element[] = [];

    for (let i: number = 1; i <= 4; i++) {
      pages.push(
        <Page
          key={i}
          type='button'
          curr={i === currPage}
          onClick={(): void => setCurrPage(i)}
        >
          {i}
        </Page>
      );
    }

    return pages;
  }


  return(
    <WrapperOuter>
      <WrapperInner>
        <BreadCrumbs
          link={
            <>
              <a href='#'>Home</a>
              <span>/</span>
              <span>Women</span>
            </>
          }
          return='#'
          marginBottom='20px'
        />


        <Groups>
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


          <div>
            <HeaderWrapper>
              <h2>WOMEN</h2>
              <Line />
              <span>557 items</span>
            </HeaderWrapper>


            <Banner>
              <img src={banner} alt='banner' />
              <span>LOVE SUNHAT</span>
              <span>NEW SUMMER HAT COLLECTION 2022</span>
            </Banner>

            
            <SortWrapper
              onMouseEnter={(): void => setSortOpen(true)}
              onMouseLeave={(): void => setSortOpen(false)}
              onClick={(): void => setSortOpen(false)}
            >
              <span>SORT BY</span>
              <Sort open={sortOpen}>
                <SortHeader open={sortOpen}>
                  {sortMode}
                  <span>▸</span>
                </SortHeader>

                {sortOpen &&
                  <SortBody>
                    <ButtonSortMode
                      type='button'
                      onClick={(): void => setSortMode('Position')}
                    >
                      Position
                    </ButtonSortMode>

                    <ButtonSortMode
                      type='button'
                      onClick={(): void => setSortMode('Price')}
                    >
                      Price
                    </ButtonSortMode>

                    <ButtonSortMode
                      type='button'
                      onClick={(): void => setSortMode('Name')}
                    >
                      Name
                    </ButtonSortMode>
                  </SortBody>
                }
              </Sort>
            </SortWrapper>


            <CatalogProducts />


            <Pagination>
              <Navigation
                type='button'
                onClick={(): void => {
                  if (currPage === 1) return;
                  setCurrPage((prevCurrPage: number): number => prevCurrPage - 1);
              }}>
                &#10094;
              </Navigation>

              {renderPages()}

              <Navigation
                type='button'
                onClick={(): void => {
                  if (currPage === 3) return;
                  setCurrPage((prevCurrPage: number): number => prevCurrPage + 1);
              }}>
                &#10095;
              </Navigation>
            </Pagination>
          </div>
        </Groups>
      </WrapperInner>
    </WrapperOuter>
  );
}




export default Catalog;
