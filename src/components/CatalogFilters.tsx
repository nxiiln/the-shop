import {useState} from 'react';
import styled from 'styled-components/macro';




//Dropdown---------------------------------------
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
`;

const DropdownHeader = styled.div`
  width: 100%;
  height: 29px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;


//Button-----------------------------------------
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

const ButtonWomenWrapper = styled.div`
  width: 107px;
  margin-top: 2px;
`;

const ResetFilter = styled.button`
  margin: 24px 0 8px 0;
  font-family: Arial;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-text-regular);
  background: none;
  border: none;
  cursor: pointer;

  &:hover {text-decoration: underline}
`;

const ButtonCategoryWrapper = styled.div`
  width: 115px;
  margin-top: 2px;
`;

const ButtonFilterBold = styled(ButtonFilter)`
  font-weight: 700;
`;

const ButtonFilterSecond = styled(ButtonFilter)`
  margin-left: 12px;
`;


//Checkbox---------------------------------------
const Checkbox = styled.label`
  margin-bottom: 12px;
  font-family: var(--font-second);
  font-size: 10px;
  font-weight: 400;
  color: var(--color-text-main);
  height: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  &:hover {text-decoration: underline}
  
  > input {
    margin: 0 7px 0 0;
    accent-color: var(--color-text-main);
  }
`;

const CheckboxWrapper = styled.div`
  width: 160px;
  height: 180px;
  margin: 10px 0 0 2px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-between;
`;

const CheckboxSizeWrapper = styled(CheckboxWrapper)`
  height: 90px;
`;

const CheckboxColorWrapper = styled(CheckboxWrapper)`
  width: 164px;
`;


//Range------------------------------------------
const RangeWrapper = styled.div`
  width: 160px;
  height: 10px;
  margin-bottom: 80px;
  position: relative;
  background: #e4e2e1;

  input[type='range'] {
    &::-webkit-slider-runnable-track, 
    &::-webkit-slider-thumb, & {
      -webkit-appearance: none;
    }

    width: 100%;
    margin: 0;
    background: none;
    pointer-events: none;

    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 100%;
      background: none;
      border: none;
    }

    &::-webkit-slider-thumb {
      width: 20px;
      height: 20px;
      border-radius: 10px;
      background: var(--color-background-second);
      pointer-events: auto;
    }
  }
`;

const Range1 = styled.input`
  position: absolute;
  left: 0px;
  top: 0px;
`;

const Range2 = styled.input`
  position: absolute;
  left: 0px;
  top: 0px;
`;

const RangeValue = styled.div`
  width: 20px;
  height: 20px;
  margin-top: 20px;
  border: 1px solid #aaa;
`;




const CatalogFilters = (): JSX.Element => {
  const [women, setWomen] = useState<boolean>(true);
  const [category, setCategory] = useState<boolean>(true);
  const [size, setSize] = useState<boolean>(true);
  const [priceRange, setPriceRange] = useState<boolean>(false);
  const [range1, setRange1] = useState<number>(30);
  const [range2, setRange2] = useState<number>(70);
  const [color, setColor] = useState<boolean>(true);
  const [brand, setBrand] = useState<boolean>(true);


  return(
    <>
      <Dropdown open={women}>
        <DropdownHeader onClick={(): void => {
          women ? setWomen(false) : setWomen(true)
        }}>
          <span>WOMEN</span>
          <span>&#10095;</span>
        </DropdownHeader>

        {women &&
          <ButtonWomenWrapper>
            <ButtonFilter>BOTTOMS</ButtonFilter>
            <ButtonFilter>TOPS</ButtonFilter>
            <ButtonFilter>SHOES & MORE</ButtonFilter>
            <ButtonFilter>COLLECTION</ButtonFilter>
          </ButtonWomenWrapper>
        }
      </Dropdown>


      <ResetFilter>Reset Filter</ResetFilter>


      <Dropdown open={category}>
        <DropdownHeader onClick={(): void => {
          category ? setCategory(false) : setCategory(true)
        }}>
          <span>CATEGORY</span>
          <span>&#10095;</span>
        </DropdownHeader>

        {category &&
          <ButtonCategoryWrapper>
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
          </ButtonCategoryWrapper>
        }
      </Dropdown>


      <Dropdown open={size}>
        <DropdownHeader onClick={(): void => {
          size ? setSize(false) : setSize(true)
        }}>
          <span>SIZE</span>
          <span>&#10095;</span>
        </DropdownHeader>

        {size &&
          <CheckboxSizeWrapper>
            <Checkbox>
              <input type='checkbox' name='xs'/>
              XS (34)
            </Checkbox>

            <Checkbox>
              <input type='checkbox' name='s'/>
              S (36)
            </Checkbox>

            <Checkbox>
              <input type='checkbox' name='m' />
              M (38)
            </Checkbox>

            <Checkbox>
              <input type='checkbox' name='l' />
              L (42)
            </Checkbox>

            <Checkbox>
              <input type='checkbox' name='xl' />
              XL (46)
            </Checkbox>

            <Checkbox>
              <input type='checkbox' name='xxl' />
              XXL (52)
            </Checkbox>
          </CheckboxSizeWrapper>
        }
      </Dropdown>


      <Dropdown open={priceRange}>
        <DropdownHeader onClick={(): void => {
          priceRange ? setPriceRange(false) : setPriceRange(true)
        }}>
          <span>PRICE RANGE</span>
          <span>&#10095;</span>
        </DropdownHeader>

        {priceRange && 
          <RangeWrapper>
            <Range1
              type='range'
              min='0'
              value={range1}
              max='100'
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setRange1(+e.target.value);
              }}
            />
        
            <Range2
              type='range'
              min='0'
              value={range2}
              max='100'
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                setRange2(+e.target.value);
              }}
            />

            <RangeValue>{range1}</RangeValue>
            <RangeValue>{range2}</RangeValue>
          </RangeWrapper>
        }
      </Dropdown>


      <Dropdown open={color}>
        <DropdownHeader onClick={(): void => {
          color ? setColor(false) : setColor(true)
        }}>
          <span>COLOR</span>
          <span>&#10095;</span>
        </DropdownHeader>

        {color &&
          <CheckboxColorWrapper>
            <Checkbox>
              <input type='checkbox' name='beige'/>
              BEIGE
            </Checkbox>

            <Checkbox>
              <input type='checkbox' name='black'/>
              BLACK
            </Checkbox>

            <Checkbox>
              <input type='checkbox' name='blue'/>
              BLUE
            </Checkbox>

            <Checkbox>
              <input type='checkbox' name='brown'/>
              BROWN
            </Checkbox>

            <Checkbox>
              <input type='checkbox' name='cream'/>
              CREAM
            </Checkbox>

            <Checkbox>
              <input type='checkbox' name='gold'/>
              GOLD
            </Checkbox>

            <Checkbox>
              <input type='checkbox' name='green'/>
              GREEN
            </Checkbox>

            <Checkbox>
              <input type='checkbox' name='grey'/>
              GREY
            </Checkbox>

            <Checkbox>
              <input type='checkbox' name='navy'/>
              NAVY
            </Checkbox>

            <Checkbox>
              <input type='checkbox' name='orange'/>
              ORANGE
            </Checkbox>

            <Checkbox>
              <input type='checkbox' name='pink'/>
              PINK
            </Checkbox>

            <Checkbox>
              <input type='checkbox' name='purple'/>
              PURPLE
            </Checkbox>
          </CheckboxColorWrapper>
        }
      </Dropdown>


      <Dropdown open={brand}>
        <DropdownHeader onClick={(): void => {
          brand ? setBrand(false) : setBrand(true)
        }}>
          <span>BRAND</span>
          <span>&#10095;</span>
        </DropdownHeader>

        {brand &&
          <CheckboxWrapper>
            <Checkbox>
              <input type='checkbox' name='armany'/>
              ARMANY
            </Checkbox>

            <Checkbox>
              <input type='checkbox' name='burberry'/>
              BURBERRY
            </Checkbox>

            <Checkbox>
              <input type='checkbox' name='chanel'/>
              CHANEL
            </Checkbox>

            <Checkbox>
              <input type='checkbox' name='dolce&gabbana'/>
              DOLCE&GABBANA
            </Checkbox>

            <Checkbox>
              <input type='checkbox' name='escada'/>
              ESCADA
            </Checkbox>

            <Checkbox>
              <input type='checkbox' name='fendi'/>
              FENDI
            </Checkbox>
          </CheckboxWrapper>
        }
      </Dropdown>
    </>
  )
}


export default CatalogFilters;
