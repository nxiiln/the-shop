import {useState, useEffect} from 'react';
import styled from 'styled-components/macro';
import bannerA from '../images/bannerA.png';
import bannerB from '../images/bannerB.png';
import bannerC from '../images/bannerC.png';
import {smallScreen, useMediaQuery} from '../mediaQueries';




const SliderWrapper = styled.article`
  width: 100vw;
  height: 496px;
  position: relative;
`;

const WrapperSlideA = styled.div`
  height: 496px;
`;

const BannerA = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
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
`;

const DescriptionA = styled.span`
  font-family: var(--font-second);
  font-size: 16px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  color: var(--color-text-main);
`;

const SpringEssentials = styled.div`
  width: 100%;
  height: 38%;
  margin-top: -4%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-main);
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);
`;

const Word = styled.span`
  display: inline-flex;
  align-items: flex-end;
  font-size: 42px;
  white-space: pre;

  @media ${smallScreen} {font-size: 36px}
`;

const Letter = styled.span`
  font-size: 50px;
  @media ${smallScreen} {font-size: 42px}
`;

const ButtonBannerA = styled.button`
  width: 249px;
  height: 30px;
  margin: 0;
  display: inline-block;
  font-family: var(--font-second);
  font-size: 13px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  color: var(--color-text-second);
  border: none;
  background: var(--color-background-second);
  cursor: pointer;

  @media ${smallScreen} {
    width: 118px;
    height: 30px;
  }
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
  width: 100%;
  flex: auto;
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
  font-family: var(--font-main);
  font-size: 48px;
  line-height: 1.2;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-text-second);
`;

const SpringCollection = styled.div`
  font-family: var(--font-second);
  font-size: 14px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  color: var(--color-text-second);
`;

const WrapperBannerC = styled.div`
  min-width: 275px;
  min-height: 496px;
  margin-left: 10px;
  position: relative;
  border: 1px solid var(--color-border);
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
  color: var(--color-text-main);

  > span:first-child {
    font-family: var(--font-main);
    font-size: 36px;
  }

  > span:last-child {
    font-family: var(--font-second);
    font-size: 18px;
  }
`;

const ShopNow = styled.button`
  width: 96px;
  height: 30px;
  position: absolute;
  top: 110px;
  left: 85px;
  font-family: var(--font-second);
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  color: var(--color-text-second);
  background: var(--color-background-second);
  border: none;
  cursor: pointer;
`;

const UseCode = styled.div`
  width: 166px;
  height: 20px;
  position: absolute;
  top: 172px;
  left: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-second);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  white-space: pre;
  background: var(--color-background-second);
  z-index: 1;

  > span:first-child {color: var(--color-text-regular)}
  > span:last-child {color: var(--color-text-second)}
`;

const BannerC = styled.img`
  width: 275px;
  position: absolute;
  top: 172px;
`;

const Indicator = styled.div<{active: boolean, left: string}>`
  width: 17px;
  height: 8px;
  position: absolute;
  top: 90%;
  left: ${props => props.left};
  box-sizing: border-box;
  cursor: pointer;

  ${props => props.active ? 
    `background-color: #555;` :
    `background-color: transparent;
     border: 1px solid #555;`
  }
`;




const Slider = (): JSX.Element => {
  const [slide, setSlide] = useState<number>(1);
  const screen = useMediaQuery();

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
        <WrapperSlideA>
          <BannerA 
            src={bannerA}
            alt='woman with accessories'
          />

          <TextBlockA>
            <DescriptionA>
              {!screen.small && 'new accessories collection'}
            </DescriptionA>

            <SpringEssentials>
              <Word><Letter>S</Letter>PRING</Word>
              <Word><Letter> E</Letter>SSENTIALS</Word>
            </SpringEssentials>

            <ButtonBannerA type='button'>
              {screen.small ? 'shop now' : 'shop women’s accessories'}
            </ButtonBannerA>
          </TextBlockA>
        </WrapperSlideA>
      }


      {slide === 2 &&
        <WrapperSlideB>
          <WrapperBannerB>
            <BannerB src={bannerB} alt='woman on sand' />

            <TextBlockB>
              <DescriptionB>desert lover</DescriptionB>
              <SpringCollection>spring collection 2022</SpringCollection>
            </TextBlockB>
          </WrapperBannerB>

          {screen.big &&
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

              <BannerC src={bannerC} alt='smiling woman' />
            </WrapperBannerC>
          }
        </WrapperSlideB>
      }

      <Indicator
        active={slide === 1}
        left='48%'
        onClick={(): void => setSlide(1)}
      />
      
      <Indicator
        active={slide === 2}
        left='calc(48% + 20px)'
        onClick={(): void => setSlide(2)}
      />
    </SliderWrapper>
  );
}




export default Slider;
