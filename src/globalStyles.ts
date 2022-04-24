import {createGlobalStyle} from 'styled-components';
import fonts from './fonts';


const GlobalStyle = createGlobalStyle`
  ${fonts}

  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      background-color: #fff;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #e4e2e1;
      &:hover {
        background-color: #aaa;
      }
    }
  }
`;


export default GlobalStyle;
