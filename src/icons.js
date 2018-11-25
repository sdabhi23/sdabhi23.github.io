import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown, faStroopwafel, faSpinner } from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin, faTwitterSquare, faGithubSquare, faMedium, faGithub, faFacebook,
    faJava, faAndroid, faPython, faDocker, faReact, faHtml5, faCss3Alt, faJs, faNodeJs,
} from '@fortawesome/free-brands-svg-icons';

const contactProps = { fontSize: '50', color: '#e3e3e3' };
const languageProps = { fontSize: '25', color: '#455A64' };

export const ArrowDown = () => <FontAwesomeIcon icon={faChevronCircleDown} style={{ fontSize: '48', color: 'white', marginTop: '5vh', marginBottom: '10vh'}} />

export const ContactLinkedIn= () => <FontAwesomeIcon icon={faLinkedin} style={contactProps} />
export const ContactTwitter= () => <FontAwesomeIcon icon={faTwitterSquare} style={contactProps} />
export const ContactGithub = () => <FontAwesomeIcon icon={faGithubSquare} style={contactProps} />
export const ContactMedium = () => <FontAwesomeIcon icon={faMedium} style={contactProps} />
export const ContactFacebook = () => <FontAwesomeIcon icon={faFacebook} style={contactProps} />

export const Java = () => <FontAwesomeIcon icon={faJava} style={languageProps} />
export const Android = () => <FontAwesomeIcon icon={faAndroid} style={languageProps} />
export const Python = () => <FontAwesomeIcon icon={faPython} style={languageProps} />
export const Docker = () => <FontAwesomeIcon icon={faDocker} style={languageProps} />
export const ReactIcon = () => <FontAwesomeIcon icon={faReact} style={languageProps} />
export const HTML = () => <FontAwesomeIcon icon={faHtml5} style={languageProps} />
export const CSS = () => <FontAwesomeIcon icon={faCss3Alt} style={languageProps} />
export const JS = () => <FontAwesomeIcon icon={faJs} style={languageProps} />
export const Node = () => <FontAwesomeIcon icon={faNodeJs} style={languageProps} />

export const GithubLink = () => <FontAwesomeIcon icon={faGithub} style={{ fontSize: '20', marginRight: '10px' }} />
export const DemoLink = () => <FontAwesomeIcon icon={faStroopwafel} style={{ fontSize: '20', marginRight: '10px' }} />
export const PyPiLink = () => <FontAwesomeIcon icon={faPython} style={{ fontSize: '20', marginRight: '10px' }} />
export const ReactLink = () => <FontAwesomeIcon icon={faReact} style={{ fontSize: '20', marginRight: '10px' }} />

export const LoadingIcon = () => <FontAwesomeIcon icon={faSpinner} style={{ fontSize: '20' }} spin />