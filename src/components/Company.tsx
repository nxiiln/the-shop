import React, {useState} from 'react';
import styled from 'styled-components';


type Open = {open: boolean};

const Dropdown = styled.div<Open>`
  width: 83px;
  height: 36px;
  position: relative;
  ${props => props.open && `
    height: 129px;
    background-color: #333;
  `}
`;

const Button = styled.button`
  width: 54px;
  height: 12px;
  margin: 0 0 8px 14px;
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
  margin: 12px 0 12px 14px;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  top: 17px;
  left: 71px;
  border-top: 4px solid #aaa;
  border-right: 3px solid transparent;
  border-left: 3px solid transparent;
`;


const Company = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const list: string[] = ['about us', 'contact', 'store location'];

  return(
    <Dropdown
      open={open}
      onMouseLeave={(): void => setOpen(false)}
    >
      <ButtonMain
        type='button'
        onMouseEnter={(): void => setOpen(true)}
      >
        company
      </ButtonMain>
      <Triangle />

      {open && list.map((item: string): JSX.Element => {
        return(
          <Button
            type='button'
            key={item}
          >
            {item}
          </Button>
        );
      })}
    </Dropdown>
  );
}


export default Company;
