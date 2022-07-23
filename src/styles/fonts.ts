import Nunito from './fonts/Nunito-Regular.ttf'
import PlayfairDisplaySC from './fonts/PlayfairDisplay-Regular.ttf';


const fonts: string = `
  @font-face {
    font-family: Nunito;
    src: url(${Nunito});
  }
   
  @font-face {
    font-family: Playfair Display SC;
    src: url(${PlayfairDisplaySC});
  }

  html {
    --font-main: Playfair Display SC;
    --font-second: Nunito;
    --font-regular: Arial;
  }
`;


export default fonts;
