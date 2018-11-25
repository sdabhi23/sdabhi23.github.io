import React from 'react';
import PropTypes from 'prop-types';

import './ParallaxBackground.css';

const ParallaxBackground = (props, context) => {

  return (
    <div className="parallax" style={{ color: "#455A64" }}>
      <div id="stars1" />
      <div id="stars2" />
      <div id="stars3" />
      <div id="stars4" />
    </div>
  );
};

ParallaxBackground.contextTypes = {
  theme: PropTypes.any
};

export default ParallaxBackground;