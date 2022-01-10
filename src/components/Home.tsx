import React, {useState} from 'react';
import Slider from './Slider';
import WhatsNew from './WhatsNew';


const Home = (): JSX.Element => {
  return(
    <div>
      <Slider />
      <WhatsNew />
    </div>
  );
}


export default Home;
