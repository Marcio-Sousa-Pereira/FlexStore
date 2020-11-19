import React from 'react';
import GlobalStyles from './style/global';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes/index';

import store from './store/storeConfig'


function App() {
  return (
      <>
        <Provider store={store} >
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          <GlobalStyles />
        </Provider>
      </>
  );
}

export default App;
