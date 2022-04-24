import React, {useState} from 'react';
import styled from 'styled-components/macro';


type Open = {open: boolean};

const Dropdown = styled.div<Open>`
  width: 53px;
  height: 36px;
  position: relative;
  ${props => props.open && `
    height: 68px;
    background-color: #333;
  `}
`;

const Button = styled.button`
  width: 24px;
  height: 12px;
  margin-left: 14px;
  padding: 0;
  font-family: var(--font-second);
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
  width: 38px;
  margin: 12px 0 12px 14px;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: 17px;
  left: 41px;
  border-top: 4px solid #aaa;
  border-right: 3px solid transparent;
  border-left: 3px solid transparent;
`;


const Currency = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [isUsd, setIsUsd] = useState<boolean>(true);

  return(
    <Dropdown
      open={open}
      onClick={(): void => setOpen(false)}
      onMouseLeave={(): void => setOpen(false)}
    >
      <ButtonMain
        type='button'
        onMouseEnter={(): void => setOpen(true)}
      >
        {isUsd ? 'usd' : 'eur'}
      </ButtonMain>
      <Triangle />

      {open &&
        <Button
          type='button'
          onClick={(): void => setIsUsd(!isUsd)}
        >
          {isUsd ? 'eur' : 'usd'}
        </Button>
      }
    </Dropdown>
  );
}


export default Currency;
