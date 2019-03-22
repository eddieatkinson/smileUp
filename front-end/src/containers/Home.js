import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  buttonClicked() {
    const url = `${window.apiHost}`;
    axios.get(url);
  }

  render() {
    return (
      <div>
        <p>Home</p>
        <a href='/signup'>To SignUp</a>
        <div>
          <a href='/register'>To Register</a>
        </div>
        <div>
          <button onClick={this.buttonClicked}>Test the backend!</button>
        </div>
      </div>
    )
  }
}

export default Home;
