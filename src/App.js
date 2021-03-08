import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import { Home } from './routes/Home';
import Detail from './routes/Detail';

import { GlobalStyle } from './styles/Global';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Route exact path="/" component={Home}/>
      <Route path="/:id" component={Detail}/>
    </Router>
  );
}

export default App;
