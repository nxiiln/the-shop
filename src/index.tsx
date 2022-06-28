import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import App from './components/App';
import GlobalStyles from './globalStyles';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
    <GlobalStyles />
  </React.StrictMode>,
  document.querySelector('#root')
);
