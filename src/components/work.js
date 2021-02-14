import React from "react";
import {
  Android,
  Docker,
  Python,
  ReactIcon,
  Node,
  GithubLink,
  DemoLink,
  Java,
  PyPiLink,
} from "../icons";
import "./Work.css";

export default class Work extends React.Component {
  render() {
    return (
      <div id="work">
        {/* <h1 id="work-title">
          Positions Held
          <hr
            style={{
              margin: "0",
              borderColor: "white",
              backgroundColor: "white",
            }}
          />
        </h1>
        <div id="work-line">
          <div id="work-item">
            <div className="work-img bosch"></div>
            <div id="work-description">
              <h3>Project Trainee</h3>
              <p>At Robert Bosch Engineering and Business Solutions</p>
              <p>Jan 2020 - Jun 2020</p>
              <ul>
                <li>
                  Surpassed NumPy’s algorithm for eigen decomposition under
                  certain constraints
                </li>
                <li>
                  Built systems using quantum computing and quantum inspired
                  classical algorithms
                </li>
                <li>
                  Surpassed state-of-the-art techniques in graph based machine
                  learning
                </li>
                <li>
                  Published 2 papers, filed 4 invention reports and released 1
                  python package on PyPI
                </li>
              </ul>
            </div>
          </div>
          <div id="work-item">
            <div className="work-img ln"></div>
            <div id="work-description">
              <h3>Software Engineering Trainee</h3>
              <p>At LetsNurture Infotech</p>
              <p>May 2019 - Jul 2019</p>
              <ul>
                <li>
                  Worked on developing POCs for potential and existing clients,
                  and doing research and feasibility studies on new project
                  leads
                </li>
                <li>
                  Projects undertaken include Visual Search, Virtual Try On, IoT
                  in cricket, Nutrition Classification, and Invoice Processing
                  and Classification
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="work-line">
          <div id="work-item">
            <div className="work-img taaraka"></div>
            <div id="work-description">
              <h3>ML Intern</h3>
              <p>At Taaraka Technologies</p>
              <p>Dec 2018 - Feb 2019</p>
              <ul>
                <li>
                  Worked on the math behind the basic algorithms of Machine
                  Learning and Deep Learning
                </li>
                <li>
                  Projects undertaken include applying unsupervised learning on
                  company data to find meaningful trends, and applying and
                  evaluating supervised learning algorithms to classify a subset
                  of BBC’s Hindi language news articles
                </li>
              </ul>
            </div>
          </div>
          <div id="work-item">
            <div className="work-img hasura"></div>
            <div id="work-description">
              <h3>Product Development Fellow</h3>
              <p>At Hasura Technologies</p>
              <p>Dec 2017 - Feb 2018</p>
              <ul>
                <li>
                  Created a basic boilerplate for deploying a chatbot using
                  Dialogflow and Hasura k8s platform
                </li>
                <li>Contributed to the platform’s documentation</li>
              </ul>
            </div>
          </div>
        </div>
        <h1 id="work-title">
          Projects
          <hr
            style={{
              margin: "0",
              borderColor: "white",
              backgroundColor: "white",
            }}
          />
        </h1>
        <div id="project-line">
          <div id="project-item">
            <h2>Count'em All</h2>
            <p>
              A simple app to count the number of people attending a gathering.
              Made it to the honourable mentions on the{" "}
              <a
                href="https://medium.freecodecamp.org/winners-from-the-2018-freecodecamp-jamstack-hackathon-at-github-2a39bd1db878"
                target="_blank"
                rel="noopener noreferrer">
                Jamstack Hackathon
              </a>
              !
            </p>
            <p>
              Languages: <ReactIcon /> <Node />
            </p>
            <div>
              <a
                className="btn-link"
                href="https://github.com/sdabhi23/count-em-all/"
                target="_blank"
                rel="noopener noreferrer">
                <GithubLink />
                Github
              </a>
              <a
                className="btn-link"
                href="https://count-em-all.netlify.com//"
                target="_blank"
                rel="noopener noreferrer">
                <DemoLink />
                Demo
              </a>
            </div>
          </div>
          <div id="project-item">
            <h2>People Occupation Classifier</h2>
            <p>
              Automatically classify Wikipedia people articles into occupation
              categories using multiclass naive bayes classification.
            </p>
            <p>
              Languages: <Python />
            </p>
            <div>
              <a
                className="btn-link"
                href="https://github.com/sdabhi23/people-occupations-classifier/"
                target="_blank"
                rel="noopener noreferrer">
                <GithubLink />
                Github
              </a>
            </div>
          </div>
          <div id="project-item">
            <h2>Twitter Clone</h2>
            <p>
              A near perfect replica of the UI of Twitter's app for Android
              using mock hard-coded data wherever required.
            </p>
            <p>
              Languages: <Android /> <Java />
            </p>
            <div>
              <a
                className="btn-link"
                href="https://github.com/sdabhi23/HPDF-Task1-Twitter-Clone/"
                target="_blank"
                rel="noopener noreferrer">
                <GithubLink />
                Github
              </a>
            </div>
          </div>
        </div>
        <div id="project-line">
          <div id="project-item">
            <h2>bsedata</h2>
            <p>
              Python library for extracting real-time data from Bombay Stock
              Exchange (India).
            </p>
            <p>
              Languages: <Python />
            </p>
            <div>
              <a
                className="btn-link"
                href="https://github.com/sdabhi23/bsedata/"
                target="_blank"
                rel="noopener noreferrer">
                <GithubLink />
                Github
              </a>
              <a
                className="btn-link"
                href="https://pypi.org/project/bsedata/"
                target="_blank"
                rel="noopener noreferrer">
                <PyPiLink />
                PyPi
              </a>
            </div>
          </div>
          <div id="project-item">
            <h2>Code It Now</h2>
            <p>
              A self hosted programming platform based on Docker containers.
            </p>
            <p>
              Languages: <Python /> <Docker />
            </p>
            <div>
              <a
                className="btn-link"
                href="https://github.com/sdabhi23/Code-It-Now/"
                target="_blank"
                rel="noopener noreferrer">
                <GithubLink />
                Github
              </a>
            </div>
          </div>
          <div id="project-item">
            <h2>Swallow Server</h2>
            <p>
              A simple, quick and light-weight FTP server for Android
              smartphones.
            </p>
            <p>
              Languages: <Android /> <Java />
            </p>
            <div>
              <a
                className="btn-link"
                href="https://github.com/sdabhi23/Swallow-Server/"
                target="_blank"
                rel="noopener noreferrer">
                <GithubLink />
                Github
              </a>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
