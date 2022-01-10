import React from 'react';
import Header from './Header';
import Home from './Home';
import GlobalStyles from '../globalStyles';


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
