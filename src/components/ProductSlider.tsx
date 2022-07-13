import styled from 'styled-components/macro';
import {mediumScreen, smallScreen} from '../mediaQueries';
import {useParams} from 'react-router-dom';
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

const ImageWrapper = styled.div`
  width: 400px;
  position: relative;
  border: 1px solid aqua;

  > img {
    width: 100%;
    max-width: 400px;
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




const ProductSlider = (): JSX.Element => {
  const findProductId = (id: string | undefined): number => {
    if (typeof id === 'string') {
      return +id.replace(/(product)(\d+$)/, '$2') - 1;
    }
    return -1;
  }
  

  return(
    <Slider>
      <ProductTriangle />
      <ProductTriangleDescription>NEW</ProductTriangleDescription>
      <img
        src={productImages[findProductId(useParams().id)]}
        alt='product image'
      />
    </Slider>
  );
}




export default ProductSlider;
