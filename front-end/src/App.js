import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import Home from './containers/Home';
import About from './components/About';
import SignUp from './containers/SignUp';
import Register from './containers/Register';
import VolunteerTable from './containers/VolunteerTable';
import SignIn from './containers/SignIn';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Donate from './components/Donate';
import Sponsor from './components/Sponsor';

class App extends Component {

  render() {
    return (
      <Router>
        <Grid>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
          <Route path='/register' component={Register} />
          <Route path='/volunteers' component={VolunteerTable} />
          <Route path='/facebook' component={() => { 
            window.location.href = 'https://www.facebook.com/smileupfoundation'; 
            return null;
          }} />
          <Route path='/donate' component={Donate} />
          <Route path='/sponsor' component={Sponsor} />
          <Route path='/paypal' component={() => {
            window.location.href = 'https://www.paypal.com/us/fundraiser/charity/1851712';
            return null;
          }}/>
          <Route path='/amazon' component={() => {
            window.location.href = 'https://smile.amazon.com/ch/58-2396294';
            return null;
          }}/>
          <Footer />
        </Grid>
      </Router>
    );
  }
}

export default App;
