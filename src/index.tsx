import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {store} from './store';
import {Provider} from 'react-redux';
import App from './components/App';
import GlobalStyles from './globalStyles';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
    <GlobalStyles />
  </React.StrictMode>,
  document.querySelector('#root')
);
