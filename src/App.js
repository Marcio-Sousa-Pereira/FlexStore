import React from 'react';
import GlobalStyles from './style/global';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/index';

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyles />
      </>
  );
}

export default App;
