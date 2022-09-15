import styled from 'styled-components/macro';
import {mediumScreen, smallScreen} from '../mediaQueries';


interface IButton {
  width?: string;
  smallWidth?: string;
  maxWidth?: string;
  height?: string;
  margin?: string;
  position?: string;
  top?: string;
  left?: string;

  gridArea?: string;
  mediumGridArea?: string;
  mediumJustifySelf?: string;
  justifySelf?: string;
  alignSelf?: string;
  mediumAlignSelf?: string;

  fontSize?: string;
  icon?: string;
  variant?: 'outline' | 'link';
}


const Button = styled.button<IButton>`
  width: ${props => props.width};
  max-width: ${props => props.maxWidth};
  height: ${props => props.height || '30px'};
  margin: ${props => props.margin};
  position: ${props => props.position};
  top: ${props => props.top};
  left: ${props => props.left};
  
  grid-area: ${props => props.gridArea};
  display: inline-flex;
  justify-content: center;
  justify-self: ${props => props.justifySelf};
  align-items: center;
  align-self: ${props => props.alignSelf};
  
  font-family: var(--font-second);
  font-size: ${props => props.fontSize || '10px'};
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;

  color: var(--color-text-second);
  background: var(--color-button-solid-background);
  border: none;
  transition: background 0.15s ease-out;

  &:hover {background: var(--color-button-solid-hover)}
  &:active {background: var(--color-button-solid-active)}

  &::before {
    content: ${props => props.icon && `url(${props.icon})`};
    padding: 2px 7px 0 0;
  }
  
  @media ${mediumScreen} {
    grid-area: ${props => props.mediumGridArea};
    justify-self: ${props => props.mediumJustifySelf};
    align-self: ${props => props.mediumAlignSelf};
  }

  @media ${smallScreen} {width: ${props => props.smallWidth}}

  ${props => props.variant === 'outline' && `
    color: var(--color-text-main);
    background: var(--color-button-outline-background);
    border: 1px solid var(--color-border);

    &:hover {background: var(--color-button-outline-hover)}
    &:active {background: var(--color-button-outline-active)}
  `}

  ${props => props.variant === 'link' && `
    color: var(--color-text-main);
    background: transparent;

    &:hover {
      background: transparent;
      text-decoration: underline
    }
  `}

  cursor: pointer;
`;


export default Button;
