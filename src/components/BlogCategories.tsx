import {useState} from 'react';
import styled from 'styled-components/macro';
import {mediumScreen, smallScreen, useMediaQuery} from '../mediaQueries';


const Wrapper = styled.article<{gridArea: string}>`
  width: 275px;
  height: max-content;
  margin-bottom: 20px;
  grid-area: ${props => props.gridArea};
  justify-self: end;
  align-self: center;
  border: 1px solid var(--color-border);

  @media ${mediumScreen}, ${smallScreen} {
    width: 100%;
    justify-self: center;
    align-self: flex-start;
  }
`;

const TitleWrapper = styled.div<{open: boolean}>`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  
  ${props => props.open &&
    'border-bottom: 1px solid var(--color-border);'
  }
`;

const Title = styled.h2`
  margin: 20px 0 25px 20px;
  font-family: var(--font-second);
  font-size: 14px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-text-main);

  @media ${mediumScreen}, ${smallScreen} {margin: 0 0 0 20px}
`;

const Indicator = styled.span<{open: boolean}>`
  margin-right: 15px;
  font-size: 16px;
  color: var(--color-text-main);
  ${props => props.open && 'transform: rotate(90deg);'}
`;

const Category = styled.button`
  margin: 20px 0 20px 15px;
  display: flex;
  font-family: var(--font-second);
  font-size: 11px;
  line-height: 1.2;
  font-weight: 300;
  color: var(--color-text-main);
  background: transparent;
  border: none;
  cursor: pointer;
  
  &:hover {text-decoration: underline}
`;


const BlogCategories = ({gridArea}: {gridArea: string}): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const screen = useMediaQuery();

	return(
    <Wrapper gridArea={gridArea}>
      {screen.big ?
        <>
          <Title>CATEGORIES</Title>
          <Category>CELEBRITY STYLE (39)</Category>
          <Category>FASHION SHOWS (15)</Category>
          <Category>SHOPPING (27)</Category>
          <Category>BEAUTY LOOK (119)</Category>
        </>
        :
        <>
          <TitleWrapper open={open} onClick={(): void => setOpen(!open)}>
            <Title>CATEGORIES</Title>
            <Indicator open={open}>❯</Indicator>
          </TitleWrapper>
          {open &&
            <>
              <Category>CELEBRITY STYLE (39)</Category>
              <Category>FASHION SHOWS (15)</Category>
              <Category>SHOPPING (27)</Category>
              <Category>BEAUTY LOOK (119)</Category>
            </>
          }
        </>
      }
    </Wrapper>
  );
}


export default BlogCategories;
