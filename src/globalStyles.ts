import {createGlobalStyle} from 'styled-components';
import fonts from './fonts';
import colors from './colors';


const GlobalStyle = createGlobalStyle`
  ${fonts}
  ${colors}

  * {box-sizing: border-box}
  
  body {
    margin: 0;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 6.5px;
      background-color: var(--color-background-main);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-background-second);
    }
  }

  button, label, img {user-select: none}
`;


export default GlobalStyle;
