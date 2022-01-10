import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import GlobalStyles from './globalStyles';


const App = (): JSX.Element => {
  return(
    <div>
      <GlobalStyles />
      <Header />
      <Home />
    </div>
  );
}


export default App;
