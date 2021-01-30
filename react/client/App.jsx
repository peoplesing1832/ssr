import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from 'client/components/Header';
import Main from 'client/components/Main';
import Footer from 'client/components/Footer';
import routerConfig from '../router';

const App = () => {
  return (
    <div>
      <Header />
      <Main>
        {
          renderRoutes(routerConfig)
        }
      </Main>
      <Footer />
    </div>
  );
};

export default App;
