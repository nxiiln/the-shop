import React from 'react';
import Header from './Header';
import Product from './Product';
import TopBrand from './TopBrands';
import PurchasesInfo from './PurchasesInfo';
import Footer from './Footer';


const App = (): JSX.Element => {
  return(
    <>
      <Header />
      <Product />
      <TopBrand />
      <PurchasesInfo />
      <Footer />
    </>
  );
}


export default App;
