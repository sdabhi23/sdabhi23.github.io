import React from "react";
import main from "../img/main.jpg";
import "./About.css";

export default class About extends React.Component {
  render() {
    return (
      <div id="about">
        <h1 id="about-title">
          About
          <hr
            style={{
              margin: "0",
              borderColor: "white",
              backgroundColor: "white",
            }}
          />
        </h1>
        <img src={main} id="about-img" alt="Shrey Dabhi" />
        <h2 id="about-text" style={{ margin: "15px 0" }}>
          I am Shrey Dabhi.
        </h2>
        <p id="about-text" style={{ fontSize: "1.25rem" }}>
          A passionate self-taught developer, with a knack for creating engaging
          user experiences and performant systems, currently pursuing the field
          of machine learning and quantum computing. I enjoy learning new skills
          and improving my old ones. I also deploy what I build{" "}
          <span role="img" aria-label="wink">
            😉
          </span>{" "}
        </p>
        <br />
      </div>
    );
  }
}
