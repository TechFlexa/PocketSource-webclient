import React, { Component } from 'react';
import Navbar from './Components/Navbar/';
import Cover from './Components/Cover/';
import ResourceSection from './Components/ResourcesSection/';
import Collections from './Components/Collections/';
import Footer from './Components/Footer/';
import FooterPin from './Components/Footer/FooterPin.js';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Cover />
        <ResourceSection />
        <Collections />
        <FooterPin />
        <Footer />
      </div>
    );
  }
}

export default App;
