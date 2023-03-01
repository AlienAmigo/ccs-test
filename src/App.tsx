import React from 'react';
import { HashRouter } from 'react-router-dom';
import routes from 'routes';

const App = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <> {routes}</>
    </HashRouter>
  );
};

export default App;
