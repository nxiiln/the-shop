import React, {useState} from 'react';
import Slider from '../Slider/Slider';
import WhatsNew from '../WhatsNew/WhatsNew';


const Home = (): JSX.Element => {
  return(
    <div>
      <Slider />
      <WhatsNew />
    </div>
  );
}


export default Home;
