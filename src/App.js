import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';

import Quote from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
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
      </>
    );
  }
}

export default App;
