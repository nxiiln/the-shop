import styled from 'styled-components/macro';
import productRelated1 from '../images/productRelated1.png';
import productRelated2 from '../images/productRelated2.png';
import productRelated3 from '../images/productRelated3.png';
import productRelated4 from '../images/productRelated4.png';
import {mediumScreen, useMediaQuery} from '../mediaQueries';




const Wrapper = styled.article`
  width: 100%;
  height: 310px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.div`
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

const ImagesWrapper = styled.div`
  width: 100%;
  max-width: 610px;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 145px;
  height: 255px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > img {width: 100%}
`;

const Description = styled.span`
  font-family: var(--font-main);
  font-size: 12px;
  font-weight: 400;
  color: var(--color-text-main);
  text-align: center;
`;

const Price = styled.span`
  font-family: var(--font-second);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-text-main);
`;

const ProductTriangle = styled.div<{attr: string}>`
  width: 0;
  height: 0;
  position: absolute;
  top: -5px;
  left: -23px;
  border-right: 35px solid transparent;

  border-bottom: ${props => props.attr === 'new' ?
    '35px solid var(--color-triangle-new)'
    :
    '35px solid var(--color-triangle-sale)'
  };

  border-left: 35px solid transparent;
  transform: rotate(-45deg);
`;

const ProductTriangleDescription = styled.span`
  position: absolute;
  top: 4px;
  left: 4px;
  font-family: var(--font-main);
  font-size: 11px;
  font-weight: 700;
  color: var(--color-text-second);
`;




const RelatedProducts = (): JSX.Element => {
  const screen = useMediaQuery();

  return(
    <Wrapper>
      <Header>
        <span>RELATED PRODUCTS</span>
        <div />
      </Header>

      <ImagesWrapper>
        <ImageWrapper>
          <img src={productRelated1} alt='productRelated1' />
          <Description>DETAILED SWING DRESS</Description>
          <Price>$1875</Price>
          <ProductTriangle attr='new' />
          <ProductTriangleDescription>NEW</ProductTriangleDescription>
        </ImageWrapper>

        <ImageWrapper>
          <img src={productRelated2} alt='productRelated2' />
          <Description>MAXARARZY FRILLED DRESS</Description>
          <Price>$1875</Price>
          <ProductTriangle attr='sale' />
          <ProductTriangleDescription>SALE</ProductTriangleDescription>
        </ImageWrapper>

        <ImageWrapper>
          <img src={productRelated3} alt='productRelated3' />
          <Description>DETAILED SWING DRESS</Description>
          <Price>$1875</Price>
        </ImageWrapper>

        {screen.big &&
          <ImageWrapper>
            <img src={productRelated4} alt='productRelated4' />
            <Description>MAXARARZY FRILLED DRESS</Description>
            <Price>$1875</Price>
          </ImageWrapper>
        }
      </ImagesWrapper>
    </Wrapper>
  );
}




export default RelatedProducts;
