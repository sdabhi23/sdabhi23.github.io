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
            margin: "20px 0",
          }}>
          Currently:
        </p>
        <div id="employer">
          <img src={optum} alt="Optum Logo"/>
          <div>
            <h2>Software Engineer @ Optum</h2>
            <p>
              Working on migration of legacy mainframe applications to big data
              environments
            </p>
            <p>
              <b>Tech Stack:</b> Hadoop, Hive, Spark, Scala, Python
            </p>
          </div>
        </div>
      </div>
      <div>
        <p
          style={{
            fontFamily: "Markazi Text, cursive",
            fontSize: "3em",
            margin: "20px 0",
          }}>
          Past Employers:
        </p>
        <div>
          <div id="past-employer">
            <img src={rbei} alt="RBEI Logo"/>
            <p>Robert Bosch</p>
          </div>
          <div id="past-employer">
            <img src={ln} alt="Let's Nurture Logo"/>
            <p>Let's Nurture</p>
          </div>
          <div id="past-employer">
            <img src={taaraka} alt="Taaraka Logo"/>
            <p>Taaraka</p>
          </div>
          <div id="past-employer">
            <img src={hasura} alt="Hasura Logo"/>
            <p>Hasura</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
