import React, { Component } from "react";
import "./App.css";

import Work from "./components/work";
import Contact from "./components/contact";
import ParallaxBackground from "./components/parallaxbackground";
import main from "./img/main.jpg";

import {
  ContactGithub,
  ContactTwitter,
  ContactLinkedIn,
  ContactMedium,
  ContactOrcid,
  ContactDev,
} from "./icons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxBackground />
        <div id="header">
          <img src={main} id="avatar" alt="Shrey Dabhi" />
          <p id="header-title">Shrey Dabhi</p>
          <p id="header-subtitle">
            <span id="subtext">Big Data</span>
            <span id="subtext">Full Stack</span>
            <span id="subtext">Machine Learning</span>
          </p>
          <p id="about-text">
            A passionate self-taught developer, with a knack for creating
            engaging user experiences and performant systems. Able to
            effectively leverage recent and emerging technologies to achieve the
            required functionalities. I enjoy learning new skills, improving old
            ones and{" "}
            <span role="img" aria-label="heart">
              ❤️️
            </span>{" "}
            to deploy whatever I build!
          </p>
          <div id="acc-links">
            <a
              className="about-social"
              href="https://github.com/sdabhi23"
              target="_blank"
              rel="noopener noreferrer">
              <ContactGithub />
            </a>
            <a
              className="about-social"
              href="https://linkedin.com/in/sdabhi23"
              target="_blank"
              rel="noopener noreferrer">
              <ContactLinkedIn />
            </a>
            <a
              className="about-social"
              href="https://medium.com/@sdabhi23"
              target="_blank"
              rel="noopener noreferrer">
              <ContactMedium />
            </a>
            <a
              className="about-social"
              href="https://orcid.org/0000-0002-4364-9892"
              target="_blank"
              rel="noopener noreferrer">
              <ContactOrcid />
            </a>
            <a
              className="about-social"
              href="https://twitter.com/sdabhi23"
              target="_blank"
              rel="noopener noreferrer">
              <ContactTwitter />
            </a>
            <a
              className="about-social"
              href="https://dev.to/sdabhi23"
              target="_blank"
              rel="noopener noreferrer">
              <ContactDev />
            </a>
          </div>
        </div>
        <Work />
        <Contact />
      </div>
    );
  }
}

export default App;
