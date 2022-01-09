import React, {useState} from 'react';
import Banner from '../Banner/Banner';
import WhatsNew from '../WhatsNew/WhatsNew';


const Home = (): JSX.Element => {
  return(
    <div>
      <Banner />
      <WhatsNew />
    </div>
  );
}


export default Home;
