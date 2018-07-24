import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { ArrowDown } from './icons';
import Sidebar from './components/sidebar';
import About from './components/about';
import Work from './components/work';
import Contact from './components/contact';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Sidebar/>
        <header id="header">
          <img src={logo} id="header-logo" alt="logo" />
          <h1 id="header-title">Hi, I am Shrey!</h1>
          <h3 id="header-subtitle">Full Stack Web & Mobile App Developer</h3>
          <AnchorLink id="header-arrow" href="#about"><ArrowDown/></AnchorLink>
        </header>
        <About/>
        <Work/>
        <Contact/>
      </div>
    );
  }
}

export default App;
