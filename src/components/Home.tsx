import React from 'react';
import Slider from './Slider';
import WhatsNew from './WhatsNew';
import HomeBottom from './HomeBottom';
import TopBrands from './TopBrands';
import PurchasesInfo from './PurchasesInfo';


const Home = (): JSX.Element => {
  return(
    <main>
      <Slider />
      <WhatsNew />
      <HomeBottom />
      <TopBrands />
      <PurchasesInfo />
    </main>
  );
}


export default Home;
