import React from 'react';
import { Android, Docker, Python, ReactIcon, HTML, CSS, JS, Node, GithubLink, DemoLink, Java, PyPiLink, ReactLink } from '../icons';
import './Work.css';

export default class Work extends React.Component {

  render() {
    return(
      <div id="work">
        <h1 id="work-title">Projects<hr style={{margin: '0', borderColor: 'white', backgroundColor: 'white'}}/></h1>
        <div id="project-line">
          <div id="project-item">
            <h2>Count'em All</h2>
            <p>A simple app to count the number of people attending a gathering. Made it to the honourable mentions on the <a href="https://medium.freecodecamp.org/winners-from-the-2018-freecodecamp-jamstack-hackathon-at-github-2a39bd1db878" target="_blank" rel="noopener noreferrer" >Jamstack Hackathon</a>!</p>
            <p>Languages: <ReactIcon/> <Node/></p>
            <div>
              <a class="btn-link" href="https://github.com/sdabhi23/count-em-all/" target="_blank" rel="noopener noreferrer" ><GithubLink/>Github</a>
              <a class="btn-link" href="https://count-em-all.netlify.com//" target="_blank" rel="noopener noreferrer" ><DemoLink/>Demo</a>
            </div>
          </div>
          <div id="project-item">
            <h2>People Occupation Classifier</h2>
            <p>Automatically classify Wikipedia people articles into occupation categories using multiclass naive bayes classification.</p>
            <p>Languages: <Python/></p>
            <div>
              <a class="btn-link" href="https://github.com/sdabhi23/people-occupations-classifier/" target="_blank" rel="noopener noreferrer" ><GithubLink/>Github</a>
            </div>
          </div>
          <div id="project-item">
            <h2>Twitter Clone</h2>
            <p>A near perfect replica of the UI of Twitter's app for Android using mock hard-coded data wherever required.</p>
            <p>Languages: <Android/> <Java/></p>
            <div>
              <a class="btn-link" href="https://github.com/sdabhi23/HPDF-Task1-Twitter-Clone/" target="_blank" rel="noopener noreferrer" ><GithubLink/>Github</a>
            </div>
          </div>
        </div>
        <div id="project-line">
          <div id="project-item">
            <h2>bsedata</h2>
            <p>Python library for extracting real-time data from Bombay Stock Exchange (India).</p>
            <p>Languages: <Python/></p>
            <div>
              <a class="btn-link" href="https://github.com/sdabhi23/bsedata/" target="_blank" rel="noopener noreferrer" ><GithubLink/>Github</a>
              <a class="btn-link" href="https://pypi.org/project/bsedata/" target="_blank" rel="noopener noreferrer" ><PyPiLink/>PyPi</a>
            </div>
          </div>
          <div id="project-item">
            <h2>Code It Now</h2>
            <p>A self hosted programming platform based on Docker containers.</p>
            <p>Languages: <Python/> <Docker/></p>
            <div>
              <a class="btn-link" href="https://github.com/sdabhi23/Code-It-Now/" target="_blank" rel="noopener noreferrer" ><GithubLink/>Github</a>
            </div>
          </div>
          <div id="project-item">
            <h2>Swallow Server</h2>
            <p>A simple, quick and light-weight FTP server for Android smartphones.</p>
            <p>Languages: <Android/> <Java/></p>
            <div>
              <a class="btn-link" href="https://github.com/sdabhi23/Swallow-Server/" target="_blank" rel="noopener noreferrer" ><GithubLink/>Github</a>
            </div>
          </div>
        </div>
        <div id="project-line">
          <div id="project-item">
            <h2>NSS Gujarat</h2>
            <p>An app for digitizing the WORK DIARY of volunteers</p>
            <p>Languages: <ReactIcon/></p>
            <div>
              <a class="btn-link" href="https://snack.expo.io/@sdabhi23/nss-gujarat/" target="_blank" rel="noopener noreferrer" ><ReactLink/>Expo</a>
            </div>
          </div>
          <div id="project-item">
            <h2>FCC Frontend Projects</h2>
            <p>Github repository for the front-end projects on FreeCodeCamp</p>
            <p>Languages: <HTML/> <CSS/> <JS/></p>
            <div>
              <a class="btn-link" href="https://github.com/sdabhi23/FCC-Projects/" target="_blank" rel="noopener noreferrer" ><GithubLink/>Github</a>
              <a class="btn-link" href="https://sdabhi23.github.io/FCC-Projects/" target="_blank" rel="noopener noreferrer" ><DemoLink/>Demo</a>
            </div>
          </div>
          <div id="project-item">
            <h2>FCC Backend Projects</h2>
            <p>Github repository for the API and Microservices projects on FreeCodeCamp</p>
            <p>Languages: <Node/></p>
            <div>
              <a class="btn-link" href="https://github.com/sdabhi23/FCC-API-Projects/" target="_blank" rel="noopener noreferrer" ><GithubLink/>Github</a>
            </div>
          </div>
        </div>
        <h1 id="work-title">Positions Held<hr style={{margin: '0', borderColor: 'white', backgroundColor: 'white'}}/></h1>
        <div id="work-line">
          <div id="work-item">
            <div className="work-img hasura"></div>
            <div id="work-description">
              <h3>Product Development Fellow (Intern)</h3>
              <p>At Hasura</p>
              <p>Nov 2017 - Feb 2018</p>
              <p>Testing their current platform offerings, API services and scalability of the platform. Developing boilerplate codes. Contributing to their platform documentation.</p>
              <div>
                <a href="https://github.com/sdabhi23/Curren/" target="_blank" rel="noopener noreferrer" ><GithubLink/>Github</a>
                <a href="https://platform.hasura.io/hub/projects/sdabhi23/currency-bot/" target="_blank" rel="noopener noreferrer" ><DemoLink/>Demo</a>
              </div>
            </div>
          </div>
          <div id="work-item">
            <div className="work-img sw"></div>
            <div id="work-description">
              <h3>Web Dev Intern</h3>
              <p>At Silverwing Technologies</p>
              <p>Jul 2017 - Aug 2017</p>
              <p>Developed a website using Bootstrap and PHP as a part of the internship. Obtained knowledge of FTP connections and about configuring deployment servers.</p>
              <div>
                <a href="https://github.com/sdabhi23/SW-Site/" target="_blank" rel="noopener noreferrer" ><GithubLink/>Github</a>
                <a href="https://sdabhi23.github.io/SW-Site/" target="_blank" rel="noopener noreferrer" ><DemoLink/>Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}