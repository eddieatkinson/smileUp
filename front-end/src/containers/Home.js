import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  buttonClicked() {
    console.log('Clicked!');
    const url = `${window.apiHost}`;
    axios.get(url);
  }

  render() {
    return (
      <div>
        <p>Home</p>
        <a href='/signup'>To SignUp</a>
        <div>
          <button onClick={this.buttonClicked}>Test the backend!</button>
        </div>
      </div>
    )
  }
}

export default Home;
