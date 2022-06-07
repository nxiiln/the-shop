import {useState} from 'react';
import styled from 'styled-components/macro';
import productMain from '../images/productMain.png';
import productSecond1 from '../images/productSecond1.png';
import productSecond2 from '../images/productSecond2.png';
import productSecond3 from '../images/productSecond3.png';
import productSecond4 from '../images/productSecond4.png';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';




const Slider = styled.article`
  width: 600px;
  display: flex;
  justify-content: space-between;

  @media ${mediumScreen}, ${smallScreen} {
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const ImageSecondWrapper = styled.div`
  width: 80px;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  @media ${mediumScreen}, ${smallScreen} {
    width: 100%;
    max-width: 490px;
    height: auto;
    margin-top: 10px;
    flex-direction: row;
  }
`;

const ButtonUp = styled.button<{rotate: boolean}>`
  width: 20px;
  height: 10px;
  position: relative;
  background: none;
  border: none;
  cursor: default;

  > span {
    font-size: 18px;
    position: absolute;
    top: -9px;
    left: 6px;
    ${props => props.rotate && 'transform: rotate(90deg);'}
  }
`;

const ButtonDown = styled(ButtonUp)`
  > span {
    top: -8px;
    left: 3px;
  }
`;

const ImageSecond = styled.img<{curr: boolean}>`
  width: 80px;
  height: 112px;
  ${props => props.curr && 'border: 1px solid var(--color-border);'}
`;

const ImageMainWrapper = styled.div`
  position: relative;

  > img {
    width: 100%;
    max-width: 490px;
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
  const [imageSecond, setImageSecond] = useState<number>(1);
  const screen = useMediaQuery();


  return(
    <Slider>
      <ImageSecondWrapper>
        <ButtonUp
          type='button'
          rotate={screen.big}
          onClick={(): void => {
            if (imageSecond === 1) return;
            setImageSecond((prevImageSecond: number): number => prevImageSecond - 1);
          }}
        >
          <span>❮</span>
        </ButtonUp>

        <ImageSecond
          src={productSecond1}
          alt='imageSecond1'
          curr={imageSecond === 1}
          onClick={(): void => setImageSecond(1)}
        />

        <ImageSecond
          src={productSecond2}
          alt='imageSecond2'
          curr={imageSecond === 2}
          onClick={(): void => setImageSecond(2)}
        />

        <ImageSecond
          src={productSecond3}
          alt='imageSecond3'
          curr={imageSecond === 3}
          onClick={(): void => setImageSecond(3)}
        />

        {!screen.small &&
          <ImageSecond
            src={productSecond4}
            alt='imageSecond4'
            curr={imageSecond === 4}
            onClick={(): void => setImageSecond(4)}
          />
        }

        <ButtonDown
          type='button'
          rotate={screen.big}
          onClick={(): void => {
            if (imageSecond === 4) return;
            setImageSecond((prevImageSecond: number): number => prevImageSecond + 1);
          }}
        >
          <span>❯</span>
        </ButtonDown>
      </ImageSecondWrapper>


      <ImageMainWrapper>
        <ProductTriangle />
        <ProductTriangleDescription>NEW</ProductTriangleDescription>
        <img src={productMain} alt='imageMain' />
      </ImageMainWrapper>
    </Slider>
  );
}




export default ProductSlider;
