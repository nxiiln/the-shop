import React, {useState} from 'react';
import styled from 'styled-components';


type Open = {open: boolean};

const Dropdown = styled.div<Open>`
  width: 83px;
  height: 36px;
  position: relative;
  ${props => props.open && `
    height: 68px;
    background-color: #333;
  `}
`;

const Button = styled.button`
  width: 46px;
  height: 12px;
  margin-left: 14px;
  padding: 0;
  font-family: Nunito;
  font-size: 10px;
  text-transform: uppercase;
  text-align: start;
  vertical-align: baseline;
  color: #aaa;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

const ButtonMain = styled(Button)`
  width: 60px;
  margin: 12px 0 12px 14px;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: 17px;
  left: 64px;
  border-top: 4px solid #aaa;
  border-right: 3px solid transparent;
  border-left: 3px solid transparent;
`;


const Language = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [isEnglish, setIsEnglish] = useState<boolean>(true);

  return(
    <Dropdown
      open={open}
      onMouseLeave={(): void => setOpen(false)}
      onClick={() => setOpen(false)}
    >
      <ButtonMain
        type='button'
        onMouseEnter={(): void => setOpen(true)}
      >
        {isEnglish ? 'english' : 'spanish'}
      </ButtonMain>
      <Triangle />

      {open && 
        <Button
          type='button'
          onClick={(): void => setIsEnglish(!isEnglish)}
        >
          {isEnglish ? 'spanish' : 'english'}
        </Button>
      }
    </Dropdown>
  );
}


export default Language;
