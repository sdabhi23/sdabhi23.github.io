import React from "react";
import "./work.css";

import ln from "../img/ln.png";
import rbei from "../img/bosch.png";
import optum from "../img/optum.jpg";
import hasura from "../img/hasura.png";
import taaraka from "../img/taaraka.jpg";

const Work = () => {
  return (
    <div id="work">
      <div>
        <p
          style={{
            fontFamily: "Markazi Text, cursive",
            fontSize: "3em",
            margin: "20px",
          }}>
          Currently Working at:
        </p>
        <img src={optum} />
      </div>
      <div>
        <p
          style={{
            fontFamily: "Markazi Text, cursive",
            fontSize: "3em",
            margin: "20px",
          }}>
          Past Employers:
        </p>
        <div>
          <div id="past-employer">
            <img src={hasura} />
            <p>Hasura</p>
          </div>
          <div id="past-employer">
            <img src={taaraka} />
            <p>Taaraka</p>
          </div>
          <div id="past-employer">
            <img src={ln} />
            <p>Let's Nurture</p>
          </div>
          <div id="past-employer">
            <img src={rbei} />
            <p>Robert Bosch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
