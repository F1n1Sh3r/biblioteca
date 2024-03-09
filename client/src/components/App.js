import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from './Home';
import Loading from './Loading';

const AsyncDynamicPAge = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ './DynamicPage'),
  {
    LoadingComponent: Loading
  }
);
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ './NoMatch'),
  {
    LoadingComponent: Loading
  }
);

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route exact path="/" Component={Home} />
          <Route exact path="/dynamic" Component={AsyncDynamicPAge} />
          <Route Component={AsyncNoMatch} />
        </Routes>
      </div>
    </Router> 
  );
};

export default App;
