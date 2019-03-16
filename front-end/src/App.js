import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/Home';
import SignUp from './containers/SignUp';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
