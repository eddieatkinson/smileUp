import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

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
import Testimonials from './components/Testimonials';
import Events from './components/Events';

class App extends Component {
  scrollToBottom() {
    scroll.scrollToBottom();
  }

  render() {
    return (
      <Router>
        <Grid>
          <Navbar scrollToBottom={this.scrollToBottom} />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/events' component={Events} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
          <Route path='/register' component={Register} />
          <Route path='/volunteers' component={VolunteerTable} />
          <Route path='/donate' component={Donate} />
          <Route path='/sponsor' component={Sponsor} />
          <Route path='/testimonials' component={Testimonials} />
          <Footer />
        </Grid>
      </Router>
    );
  }
}

export default App;
