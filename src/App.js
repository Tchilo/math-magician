import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Calculator from './components/calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/App">
        <div className="App">
          <Calculator />
        </div>
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Quote">
        <Quote />
      </Route>
    </Switch>
  </Router>
);

export default App;
