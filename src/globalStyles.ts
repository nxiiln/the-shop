import {createGlobalStyle} from 'styled-components';
import fonts from './fonts';
import colors from './colors';


const GlobalStyle = createGlobalStyle`
  ${fonts}
  ${colors}

  * {box-sizing: border-box}

  body {
    margin: 0;
    overflow-y: overlay;

    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
    }

    &::-webkit-scrollbar-thumb {
      background: #555;
    }
  }

  button, a, label, img {user-select: none}
`;


export default GlobalStyle;
