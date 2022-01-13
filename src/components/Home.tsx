import React from 'react';
import Slider from './Slider';
import WhatsNew from './WhatsNew';
import HomeBottom from './HomeBottom';
import TopBrands from './TopBrands';


const Home = (): JSX.Element => {
  return(
    <main>
      <Slider />
      <WhatsNew />
      <HomeBottom />
      <TopBrands />
    </main>
  );
}


export default Home;
