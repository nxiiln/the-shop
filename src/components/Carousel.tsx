import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components/macro';
import {smallScreen, useMediaQuery} from '../mediaQueries';
import {Link} from 'react-router-dom';
import bannerA from '../images/bannerA.png';
import bannerB from '../images/bannerB.png';
import bannerC from '../images/bannerC.png';




const CarouselWrapper = styled.article`
  width: 100vw;
`;

const Slides = styled.div`
  height: 496px;
  position: relative;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  
  &::-webkit-scrollbar {height: 0px}
  > div {scroll-snap-align: start}
`;

const WrapperSlide1 = styled.div`
  position: relative;
  height: 496px;
`;

const Banner1 = styled.img`
  width: 100vw;
  height: 100%;
  position: relative;
  object-fit: cover;

  @media ${smallScreen} {object-position: -550px}
`;

const TextBlock1 = styled.div`
  width: 37%;
  height: 31%;
  position: absolute;
  top: 33%;
  left: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${smallScreen} {
    width: auto;
    height: auto;
    top: 65%;
    left: 55%;
  }
`;

const Description1 = styled.span`
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
`;

const Letter = styled.span`
  font-size: 50px;
`;

const LinkBanner1 = styled(Link)`
  width: 200px;
  height: 30px;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-second);
  font-size: 13px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-text-second);
  border: none;
  background: var(--color-background-second);

  &:hover {background: var(--color-button-solid-hover)}
  @media ${smallScreen} {width: 130px}
`;

const WrapperSlide2 = styled.div`
  min-width: 100vw;
  height: 496px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const WrapperBanner2 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const TextBlock2 = styled.div`
  width: 350px;
  height: 80px;
  position: absolute;
  top: 205px;
  left: 28%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Description2 = styled.div`
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

const WrapperBanner3 = styled.div`
  min-width: 275px;
  min-height: 496px;
  margin-left: 10px;
  position: relative;
  border: 1px solid var(--color-border);
`;

const TextBlock3 = styled.div`
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

const ShopNow = styled(Link)`
  width: 96px;
  height: 30px;
  position: absolute;
  top: 110px;
  left: 85px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-second);
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-text-second);
  background: var(--color-background-second);
  border: none;

  &:hover {background: var(--color-button-solid-hover)}
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

const Banner3 = styled.img`
  width: 275px;
  position: absolute;
  top: 172px;
`;

const Indicators = styled.div`
  width: 50px;
  margin: 10px 0 0 calc(50% - 25px);
  display: flex;
  justify-content: space-between;
`;

const Indicator = styled.div<{active: boolean}>`
  width: 20px;
  height: 10px;
  cursor: pointer;

  ${props => props.active ? 
    `background-color: #000;`
    :
    `background-color: #fff;
     border: 1px solid #000;`
  }
`;




const Carousel = (): JSX.Element => {
  const [slide, setSlide] = useState<number>(1);
  const refSlides = useRef<HTMLDivElement>(null);
  const refWrapperSlide1 = useRef<HTMLDivElement>(null);
  const refWrapperSlide2 = useRef<HTMLDivElement>(null);
  const screen = useMediaQuery();

  
  useEffect((): {(): void} => {
    const interval: NodeJS.Timer = setInterval((): void => {
      refSlides.current
        ?.querySelectorAll(':scope > div')
        [slide < 2 ? slide : 0]
        .scrollIntoView({behavior: 'smooth', block: 'nearest'});
    }, 5000);
    
    return (): void => clearInterval(interval);
  }, [slide]);
  

  const handleIndicator = (slideNum: number): void => {
    refSlides.current
      ?.querySelectorAll(':scope > div')
      [slideNum - 1]
      .scrollIntoView({behavior: 'smooth', block: 'nearest'});
  }


  return(
    <CarouselWrapper>
      <Slides
        ref={refSlides}
        onScroll={(): void => {
          if (refSlides.current) {
            refSlides.current.scrollLeft < window.innerWidth * 0.5 ?
              setSlide(1) : setSlide(2);
          }
        }}>

        <WrapperSlide1 ref={refWrapperSlide1}>
          <Banner1 src={bannerA} alt='woman with accessories' />

          <TextBlock1>
            {!screen.small &&
              <>
                <Description1>new accessories collection</Description1>

                <SpringEssentials>
                  <Word><Letter>S</Letter>PRING</Word>
                  <Word><Letter> E</Letter>SSENTIALS</Word>
                </SpringEssentials>
              </>
            }

            <LinkBanner1 to='catalog'>shop now</LinkBanner1>
          </TextBlock1>
        </WrapperSlide1>


        <WrapperSlide2 ref={refWrapperSlide2}>
          {!screen.small && 
            <WrapperBanner2>
              <img src={bannerB} alt='woman on sand' />

              <TextBlock2>
                <Description2>desert lover</Description2>
                <SpringCollection>spring collection 2022</SpringCollection>
              </TextBlock2>
            </WrapperBanner2>
          }

          {!screen.medium &&
            <WrapperBanner3>
              <TextBlock3>
                <span>sale</span>
                <span>up to 70%</span>
              </TextBlock3>

              <ShopNow to='catalog'>shop now</ShopNow>

              <UseCode>
                <span>use code: </span>
                <span>sweetsale</span>
              </UseCode>

              <Banner3 src={bannerC} alt='smiling woman' />
            </WrapperBanner3>
          }
        </WrapperSlide2>
      </Slides>


      <Indicators>
        <Indicator
          active={slide === 1}
          onClick={(): void => handleIndicator(1)}
        />
        <Indicator
          active={slide === 2}
          onClick={(): void => handleIndicator(2)}
        />
      </Indicators>
    </CarouselWrapper>
  );
}




export default Carousel;
