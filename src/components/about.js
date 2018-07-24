import React from 'react';
import main from '../img/main.jpg';
import './About.css';

export default class About extends React.Component {

  render() {
    return (
      <div id="about">
        <h1 id="about-title">About Me<hr style={{margin: '0', borderColor: '#EF233C', backgroundColor: '#EF233C'}}/></h1>
        <img src={main} id="about-img" alt="Shrey Dabhi" />
        <h2 id="about-text" style={{ margin: '15px 0' }}>I am Shrey Dabhi.</h2>
        <p id="about-text" style={{ fontSize: 'large' }}>A passionate open-source developer, with a knack for building intuitive UIs.</p>
        <br/>
        <p id="about-text" style={{ fontSize: 'large' }}>I enjoy learning new skills and improving my old ones. Self-development is a major passion of mine, and I work hard to stay ahead of the curve.</p>
        <br/>
        <h2 id="about-text" style={{ marginTop: '2vh' }}>My Blogs:</h2>
        <br/>
        <a id="about-text" syle={{ fontSize: 'larger' }} href="https://sdabhi23.wordpress.com" target="_blank" rel="noopener noreferrer">Personal Blog</a>
        <br/>
        <a id="about-text" syle={{ fontSize: 'larger' }} href="https://droidlearner.wordpress.com" target="_blank" rel="noopener noreferrer">DroidLearner (about Android)</a>
      </div>
    );
  }
}