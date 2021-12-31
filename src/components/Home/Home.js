import React, {useState} from 'react';
import Banner from '../Banner/Banner';
import WhatsNew from '../WhatsNew/WhatsNew';
import styles from './home.module.scss';


const Home = () => {
  return(
    <div>
      <Banner />
      <WhatsNew />
    </div>
  );
}


export default Home;