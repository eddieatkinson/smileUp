import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './containers/Home';
import SignUp from './containers/SignUp';
import Register from './containers/Register';
import VolunteerTable from './containers/VolunteerTable';
import SignIn from './containers/SignIn';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
          <Route path='/register' component={Register} />
          <Route path='/volunteers' component={VolunteerTable} />
        </div>
      </Router>
    );
  }
}

export default App;
