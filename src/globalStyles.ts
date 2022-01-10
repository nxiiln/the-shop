import {createGlobalStyle} from 'styled-components';
import Nunito from './fonts/Nunito/Nunito-Regular.ttf'
import PlayfairDisplaySC from './fonts/Playfair-Display/PlayfairDisplay-Regular.ttf';


export default createGlobalStyle`
  @font-face {
    font-family: Nunito;
    src: url(${Nunito});
  }
   
  @font-face {
    font-family: Playfair Display SC;
    src: url(${PlayfairDisplaySC});
  }

  
  body {
    margin: 0;
    box-sizing: border-box;
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
