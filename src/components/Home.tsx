import React from 'react';
import Slider from './Slider';
import WhatsNew from './WhatsNew';
import HomeBottom from './HomeBottom';


const Home = (): JSX.Element => {
  return(
    <main>
      <Slider />
      <WhatsNew />
      <HomeBottom />
    </main>
  );
}


export default Home;
