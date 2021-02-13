import React, { Component } from "react";
import "./App.css";

import Work from "./components/work";
import Contact from "./components/contact";
import ParallaxBackground from "./components/parallaxbackground";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxBackground />
        <div id="portfolio">
          <Header />
          <Work />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
