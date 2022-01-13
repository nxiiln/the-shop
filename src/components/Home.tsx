import React from 'react';
import Slider from './Slider';
import WhatsNew from './WhatsNew';
import MostPopular from './MostPopular';


const Home = (): JSX.Element => {
  return(
    <main>
      <Slider />
      <WhatsNew />
      <MostPopular />
    </main>
  );
}


export default Home;
