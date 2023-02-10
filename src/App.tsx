import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'components/GlobalStyle';
import PageWrapper from 'components/PageWrapper';
// import Header from 'components/Header';
// import Footer from 'components/Footer';
import routes from 'routes';
import PageContentWrapper from 'components/PageContentWrapper';

const App = () => {
  return (
    <BrowserRouter>
      <> {routes}</>
    </BrowserRouter>
  );
};

export default App;
