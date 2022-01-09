import React, {useState} from 'react';
import styled from 'styled-components';
import searchSymbol from '../../images/searchSymbol.png';


type Focus = {focus: boolean};

const SearchWrapper = styled.div<Focus>`
  width: 100px;
  position: absolute;
  top: 70px;
  left: 74vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${props => props.focus && `
    left: 60vw;
    width: 280px;
  `}
`;

const Line = styled.div`
  width: 1px;
  height: 27px;
  background-color: #4f4f4f;
`;

const Input = styled.input<Focus>`
  width: ${props => props.focus ? '250px' : '70px'};
  font-family: Nunito;
  font-size: 11px;
  line-height: 1.2;
  font-weight: 300;
  text-transform: uppercase;
  color: #282828;
  border: none;
  &:focus {
    outline: none;
  }
`;


const Search = (): JSX.Element => {
  const [focus, setFocus] = useState<boolean>(false);
  
  return(
    <SearchWrapper focus={focus}>
      <Line />
      <img
        src={searchSymbol}
        alt='searchSymbol'
      />
      <Input
        focus={focus}
        type='search'
        placeholder='SEARCH'
        onFocus={(): void => setFocus(true)}
        onBlur={(): void => setFocus(false)}
      >
      </Input>
    </SearchWrapper>
  );
}


export default Search;
