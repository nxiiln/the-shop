import styled from 'styled-components/macro';
import ImageA from '../images/whatsNewA.png';
import ImageB from '../images/whatsNewB.png';
import ImageC from '../images/whatsNewC.png';


const Wrapper = styled.article`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-content: space-between;
`;

const WrapperInner = styled.div`
  width: 1100px;
  display: flex;
  flex-wrap: wrap;
  align-content: start;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
`;

const Line = styled.div`
  width: calc(44% - 70px);
  height: 1px;
  margin-top: 15px;
  background-color: var(--color-text-regular);
`;

const Title = styled.h2`
  margin: 0;
  flex: none;
  font-family: var(--font-main);
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);
`;

const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > div {margin-right: 10px}
  > div:last-child {margin: 0}
`;

const ImageWrapper = styled.div`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: auto;
`;

const Image = styled.img`
  width: 100%;
`;

const ImageTitle = styled.span`
  margin-top: 5px;
  font-family: 'Playfair Display SC';
  font-size: 18px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-main);
`;

const ImageDescription = styled.span`
  margin-top: 5px;
  font-family: Nunito;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-text-main);
`;


const WhatsNew = (): JSX.Element => (
  <Wrapper id='whats-new'>
    <WrapperInner>
      <TitleWrapper>
        <Line />
        <Title>WHATS NEW</Title>
        <Line />
      </TitleWrapper>

      <ImagesContainer>
        <ImageWrapper>
          <Image src={ImageA} alt='woman in dress'/>
          <ImageTitle>BLACK & WHITE</ImageTitle>
          <ImageDescription>SPRING COLLECTION 2022</ImageDescription>
        </ImageWrapper>

        <ImageWrapper>
          <Image src={ImageB} alt='handbags'/>
          <ImageTitle>COLOR SUMMER</ImageTitle>
          <ImageDescription>SPRING COLLECTION 2022</ImageDescription>
        </ImageWrapper>

        <ImageWrapper>
          <Image src={ImageC} alt='man in a jacket'/>
          <ImageTitle>VINTAGE FOR HIM</ImageTitle>
          <ImageDescription>SPRING COLLECTION 2022</ImageDescription>
        </ImageWrapper>
      </ImagesContainer>
    </WrapperInner>
  </Wrapper>
);


export default WhatsNew;
