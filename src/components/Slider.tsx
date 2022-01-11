import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import bannerA from '../images/bannerA.png';
import bannerB from '../images/bannerB.png';
import bannerC from '../images/bannerC.png';


const SliderWrapper = styled.div`
  width: 100vw;
  height: 496px;
  position: absolute;
  top: 160px;
  box-sizing: border-box;
`;

const BannerA = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 1;
`;

const TextBlockA = styled.div`
  width: 37%;
  height: 31%;
  position: absolute;
  top: 33%;
  left: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const DescriptionA = styled.span`
  font-family: Nunito;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  color: #000;
`;

const SpringEssentials = styled.div`
  width: 100%;
  height: 38%;
  margin-top: -4%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: 'Playfair Display SC';
  line-height: 1.2;
  font-weight: 400;
  color: #000;
`;

const Word = styled.span`
  display: inline-flex;
  align-items: flex-end;
  font-size: 55px;
  white-space: pre;
`;

const Letter = styled.span`
  font-size: 60px;
`;

const ButtonBannerA = styled.button`
  width: 249px;
  height: 30px;
  margin: 0;
  display: inline-block;
  font-family: Nunito;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  color: #fff;
  border: none;
  background-color: #000;
  cursor: pointer;
`;

const WrapperSlideB = styled.div`
  display: flex;
  justify-content: center;
`;

const WrapperBannerB = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const BannerB = styled.img`
  width: 675px;
  height: 496px;
`;

const TextBlockB = styled.div`
  width: 350px;
  height: 80px;
  position: absolute;
  top: 205px;
  left: 28%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DescriptionB = styled.div`
  font-family: 'Playfair Display SC';
  font-size: 48px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  color: #fff;
`;

const SpringCollection = styled.div`
  font-family: Nunito;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  color: #fff;
`;

const WrapperBannerC = styled.div`
  min-width: 275px;
  min-height: 496px;
  margin-left: 10px;
  position: relative;
  border: 1px solid #e4e2e1;
`;

const TextBlockC = styled.div`
  width: 100px;
  height: 70px;
  position: absolute;
  top: 25px;
  left: 85px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  color: #000;
  > span:first-child {
    font-family: 'Playfair Display SC';
    font-size: 36px;
  }
  > span:last-child {
    font-family: Nunito;
    font-size: 18px;
  }
`;

const ShopNow = styled.button`
  width: 96px;
  height: 30px;
  position: absolute;
  top: 110px;
  left: 85px;
  font-family: Nunito;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  color: #fff;
  background-color: #000;
  border: none;
  cursor: pointer;
`;

const UseCode = styled.div`
  width: 166px;
  height: 28px;
  position: absolute;
  top: 164px;
  left: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Nunito;
  font-size: 11px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  white-space: pre;
  background-color: #fff;
  z-index: 1;
  > span:first-child {
    color: #aaa;
  }
  > span:last-child {
    color: #000;
  }
`;

const BannerC = styled.img`
  width: 275px;
  position: absolute;
  top: 172px;
`;

const Indicator = styled.div`
  width: 17px;
  height: 8px;
  position: absolute;
  top: 90%;
  box-sizing: border-box;
  z-index: 1;
  cursor: pointer;
`;

type Slide = {slide: number};

const IndicatorA = styled(Indicator)<Slide>`
  left: 48%;
  ${props => props.slide === 1 ? 
    `background-color: #d7d5d4;` :
    `background-color: #fff;
     border: 1px solid #d7d5d4;`
  }
`;

const IndicatorB = styled(Indicator)<Slide>`
  left: calc(48% + 20px);
  ${props => props.slide === 2 ? 
    `background-color: #d7d5d4;` :
    `background-color: #fff;
     border: 1px solid #d7d5d4;`
  }
`;


const Slider = (): JSX.Element => {
  const [slide, setSlide] = useState<number>(1);

  useEffect(() => {
    const interval: NodeJS.Timer = setInterval((): void => {
      if (slide === 1) setSlide(2);
      if (slide === 2) setSlide(1);
    }, 8000);

    return (): void => clearInterval(interval);
  }, [slide]);

  return(
    <SliderWrapper>
      {slide === 1 && 
        <>
          <BannerA 
            src={bannerA}
            alt='woman with accessories'
          />
          <TextBlockA>
            <DescriptionA>
              new accessories collection
            </DescriptionA>
            <SpringEssentials>
              <Word><Letter>S</Letter>PRING</Word>
              <Word><Letter> E</Letter>SSENTIALS</Word>
            </SpringEssentials>
            <ButtonBannerA type='button'>
              shop women’s accessories
            </ButtonBannerA>
          </TextBlockA>
        </>
      }

      {slide === 2 &&
        <WrapperSlideB>
          <WrapperBannerB>
            <BannerB
              src={bannerB}
              alt='woman on sand'
            />
            <TextBlockB>
              <DescriptionB>
                desert lover
              </DescriptionB>
              <SpringCollection>
                spring collection 2022
              </SpringCollection>
            </TextBlockB>
          </WrapperBannerB>

          <WrapperBannerC>
            <TextBlockC>
              <span>sale</span>
              <span>up to 70%</span>
            </TextBlockC>
            <ShopNow type='button'>shop now</ShopNow>
            <UseCode>
              <span>use code: </span>
              <span>sweetsale</span>
            </UseCode>
            <BannerC
              src={bannerC}
              alt='smiling woman'
            />
          </WrapperBannerC>
        </WrapperSlideB>
      }

      <IndicatorA
        slide={slide}
        onClick={(): void => setSlide(1)}
      >
      </IndicatorA>
      <IndicatorB
        slide={slide}
        onClick={(): void => setSlide(2)}
      >
      </IndicatorB>
    </SliderWrapper>
  );
}


export default Slider;
