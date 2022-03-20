import React from 'react';
import Header from './Header';
import MyAccount from './MyAccount';
import PurchasesInfo from './PurchasesInfo';
import Footer from './Footer';


const App = (): JSX.Element => {
  return(
    <>
      <Header />
      <MyAccount />
      <PurchasesInfo />
      <Footer />
    </>
  );
}


export default App;
