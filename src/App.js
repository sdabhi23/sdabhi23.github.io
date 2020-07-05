import React, { Component } from 'react';
import './App.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Sidebar from './components/sidebar';
import About from './components/about';
import Work from './components/work';
import Contact from './components/contact';
import ParallaxBackground from './components/parallaxbackground';

import { ArrowDown, ContactGithub, ContactTwitter, ContactLinkedIn, ContactMedium, ContactOrcid } from './icons'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div id="nav"></div>
        <Sidebar/>
        <ParallaxBackground />
        <header id="header">
          <h1 id="header-title">Hi, I am Shrey!</h1>
          <h3 id="header-subtitle">Open Source | Artificial Intelligence | Quantum Computing | Full Stack</h3>
          <div className="social-section">
            <a className="about-social" href="https://github.com/sdabhi23" target="_blank" rel="noopener noreferrer"><ContactGithub/></a>
            <a className="about-social" href="https://linkedin.com/in/sdabhi23" target="_blank" rel="noopener noreferrer"><ContactLinkedIn/></a>
            <a className="about-social" href="https://medium.com/@sdabhi23" target="_blank" rel="noopener noreferrer"><ContactMedium/></a>
            <a className="about-social" href="https://orcid.org/0000-0002-4364-9892" target="_blank" rel="noopener noreferrer"><ContactOrcid/></a>
            <a className="about-social" href="https://twitter.com/sdabhi23" target="_blank" rel="noopener noreferrer"><ContactTwitter/></a>
          </div>
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
