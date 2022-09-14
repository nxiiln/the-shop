import styled from 'styled-components/macro';
import {mediumScreen, smallScreen} from '../mediaQueries';


interface IButton {
  width: string;
  smallWidth?: string;
  height?: string;
  margin?: string;
  position?: string;
  top?: string;
  left?: string;
  gridArea?: string;
  mediumGridArea?: string;
  mediumJustifySelf?: string;
  mediumAlignSelf?: string;
  opacity?: string;
  icon?: string;
  variant?: 'outline' | 'link';
}

export const Button = styled.button<IButton>`
  width: ${props => props.width};
  height: ${props => props.height || '30px'};
  margin: ${props => props.margin};
  position: ${props => props.position};
  top: ${props => props.top};
  left: ${props => props.left};
  
  grid-area: ${props => props.gridArea};
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-family: var(--font-second);
  font-size: 10px;
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;

  color: var(--color-text-second);
  background: var(--color-background-second);
  opacity: ${props => props.opacity};
  border: none;
  
  &:hover {background: var(--color-button-solid-hover)}

  &::before {
    content: ${props => props.icon};
    padding-right: 7px;
  }
  
  @media ${mediumScreen} {
    grid-area: ${props => props.mediumGridArea};
    justify-self: ${props => props.mediumJustifySelf};
    align-self: ${props => props.mediumAlignSelf};
  }

  @media ${smallScreen} {width: ${props => props.smallWidth}}

  ${props => props.variant === 'outline' && `
    color: var(--color-text-main);
    background: var(--color-background-main);
    border: 1px solid var(--color-border);

    &:hover {background: var(--color-button-outline-hover)}
  `}

  ${props => props.variant === 'link' && `
    color: var(--color-text-main);
    background: transparent;

    &:hover {text-decoration: underline}
  `}

  cursor: pointer;
  user-select: none;
`;
