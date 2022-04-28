import {createGlobalStyle} from 'styled-components';
import fonts from './fonts';
import colors from './colors';


const GlobalStyle = createGlobalStyle`
  ${fonts}
  ${colors}

  * {box-sizing: border-box}
  
  body {
    margin: 0;
    overflow: overlay;

    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--color-text-regular);
      border-radius: 4px;
    }
  }

  button, label, img {user-select: none}
`;


export default GlobalStyle;
