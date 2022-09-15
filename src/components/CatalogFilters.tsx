import {useState} from 'react';
import styled from 'styled-components/macro';
import {mediumScreen, smallScreen} from '../mediaQueries';
import {LabelCheckbox} from './Form';




// Dropdown
const Dropdown = styled.div<{open: boolean}>`
  width: 195px;
  margin-bottom: 7px;
  padding: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-family: var(--font-second);
  font-size: 11px;
  font-weight: 300;
  color: var(--color-text-main);
  background: var(--color-background-highlight);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  transition: all 0.15s ease-out;
  
  &:hover {
    background: var(--color-background-main);
    border-radius: 0;
  }
  
  > span:nth-child(2) {transform: rotate(90deg)}

  ${props => props.open && `
    background: var(--color-background-main);
    border-radius: 0;

    > span:nth-child(2) {transform: rotate(-90deg)}
  `}

  @media ${mediumScreen}, ${smallScreen} {width: 100%}
`;

const DropdownHeader = styled.div<{open: boolean}>`
  width: 100%;
  height: 29px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  > span:last-child {
    transform: ${props => props.open && 'rotate(90deg)'};
  }
`;


// Button
const ButtonFilter = styled.button`
  margin-left: 4px;
  font-family: var(--font-second);
  font-size: 10px;
  line-height: 24px;
  font-weight: 400;
  color: var(--color-text-main);
  background: var(--color-background-main);
  border: none;
  cursor: pointer;
  
  &:hover {text-decoration: underline}
`;

const ResetFilter = styled.button`
  margin-bottom: 8px;
  font-family: var(--font-regular);
  font-size: 10px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-regular);
  background: none;
  border: none;
  cursor: pointer;

  &:hover {text-decoration: underline}
`;

const CategoryWrapper = styled.div`
  width: 115px;
  margin-top: 2px;
`;

const ButtonFilterBold = styled(ButtonFilter)`
  font-weight: 700;
`;

const ButtonFilterSecond = styled(ButtonFilter)`
  margin-left: 12px;
`;


// Checkbox
const CheckboxWrapper = styled.div`
  height: 180px;
  margin: 10px 0 0 2px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-between;
`;

const CheckboxSizeWrapper = styled(CheckboxWrapper)`
  width: 140px;
  height: 90px;
`;

const CheckboxColorWrapper = styled(CheckboxWrapper)`
  width: 165px;
`;




export const sizes: string[] = ['xs', 's', 'm', 'l', 'xl', 'xxl'];
export const colors: string[] = [
  'beige',
  'black',
  'blue',
  'brown',
  'cream',
  'gold',
  'green',
  'grey',
  'navy',
  'orange',
  'pink',
  'purple'
];




const CatalogFilters = (): JSX.Element => {
  const [category, setCategory] = useState<boolean>(false);
  const [size, setSize] = useState<boolean>(false);
  const [color, setColor] = useState<boolean>(false);


  return(
    <>
      <ResetFilter>Reset Filter</ResetFilter>


      <Dropdown open={category}>
        <DropdownHeader
          open={category}
          onClick={(): void => category ? setCategory(false) : setCategory(true)}
        >
          <span>CATEGORY</span>
          <span>❯</span>
        </DropdownHeader>

        {category &&
          <CategoryWrapper>
            <ButtonFilterBold>BOTTOMS</ButtonFilterBold>
            <ButtonFilterSecond>TOPS</ButtonFilterSecond>
            <ButtonFilterSecond>SHOES & MORE</ButtonFilterSecond>
            <ButtonFilterSecond>COLLECTION</ButtonFilterSecond>
            <ButtonFilterBold>TOPS</ButtonFilterBold>
            <ButtonFilterSecond>JACKETS & COATS</ButtonFilterSecond>
            <ButtonFilterSecond>SHIRTS</ButtonFilterSecond>
            <ButtonFilterSecond>T-SHIRTS</ButtonFilterSecond>
            <ButtonFilterSecond>KNITWEAR</ButtonFilterSecond>
            <ButtonFilterSecond>SWEATS</ButtonFilterSecond>
          </CategoryWrapper>
        }
      </Dropdown>


      <Dropdown open={size}>
        <DropdownHeader
          open={size}
          onClick={(): void => size ? setSize(false) : setSize(true)}
        >
          <span>SIZE</span>
          <span>❯</span>
        </DropdownHeader>

        {size &&
          <CheckboxSizeWrapper>
            {sizes.map((size: string): JSX.Element =>
              <LabelCheckbox
                key={size}
                margin='0 0 5px 0'
              >
                <input type='checkbox' name={size}/>
                {size}
              </LabelCheckbox>
            )}
          </CheckboxSizeWrapper>
        }
      </Dropdown>

      <Dropdown open={color}>
        <DropdownHeader
          open={color}
          onClick={(): void => color ? setColor(false) : setColor(true)}
        >
          <span>COLOR</span>
          <span>❯</span>
        </DropdownHeader>

        {color &&
          <CheckboxColorWrapper>
            {colors.map((color: string): JSX.Element =>
              <LabelCheckbox
                key={color}
                margin='0 0 8px 0'
              >
                <input type='checkbox' name={color}/>
                {color}
              </LabelCheckbox>
            )}
          </CheckboxColorWrapper>
        }
      </Dropdown>
    </>
  )
}


export default CatalogFilters;
