import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/Home';
import SignUp from './containers/SignUp';
import Register from './containers/Register';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={SignUp} />
          <Route path='/register' component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
