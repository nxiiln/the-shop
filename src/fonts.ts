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
    --font-main: NunitoPlayfair Display SC;
    --font-second: Nunito;
  }
`;


export default fonts;
