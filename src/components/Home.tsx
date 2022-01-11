import React from 'react';
import Slider from './Slider';
import WhatsNew from './WhatsNew';
import MostPopular from './MostPopular';


const Home = (): JSX.Element => {
  return(
    <div>
      <Slider />
      <WhatsNew />
      <MostPopular />
    </div>
  );
}


export default Home;
