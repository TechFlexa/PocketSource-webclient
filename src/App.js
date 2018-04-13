import React, { Component } from 'react';
import Navbar from './Components/Navbar/';
import Cover from './Components/Cover/';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Cover />
      </div>
    );
  }
}

export default App;
