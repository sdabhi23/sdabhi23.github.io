import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown, faStroopwafel, faSpinner } from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin, faTwitterSquare, faGithubSquare, faMedium, faGithub, faFacebook,
    faJava, faAndroid, faPython, faDocker, faReact, faHtml5, faCss3Alt, faJs, faNodeJs,
} from '@fortawesome/free-brands-svg-icons';

const contactProps = { color: '#e3e3e3' };
const languageProps = { color: '#455A64', marginRight: '5px', marginLeft: '5px' };
const linkProps = { marginRight: '10px' };

export const ArrowDown = () => <FontAwesomeIcon icon={faChevronCircleDown} style={{ color: 'white', marginTop: '5vh', marginBottom: '10vh'}} size="3x"/>

export const ContactLinkedIn= () => <FontAwesomeIcon icon={faLinkedin} style={contactProps} size="3x" />
export const ContactTwitter= () => <FontAwesomeIcon icon={faTwitterSquare} style={contactProps} size="3x" />
export const ContactGithub = () => <FontAwesomeIcon icon={faGithubSquare} style={contactProps} size="3x" />
export const ContactMedium = () => <FontAwesomeIcon icon={faMedium} style={contactProps} size="3x" />
export const ContactFacebook = () => <FontAwesomeIcon icon={faFacebook} style={contactProps} size="3x" />

export const Java = () => <FontAwesomeIcon icon={faJava} style={languageProps} transform="grow-6" />
export const Android = () => <FontAwesomeIcon icon={faAndroid} style={languageProps} transform="grow-6" />
export const Python = () => <FontAwesomeIcon icon={faPython} style={languageProps} transform="grow-6" />
export const Docker = () => <FontAwesomeIcon icon={faDocker} style={languageProps} transform="grow-6" />
export const ReactIcon = () => <FontAwesomeIcon icon={faReact} style={languageProps} transform="grow-6" />
export const HTML = () => <FontAwesomeIcon icon={faHtml5} style={languageProps} transform="grow-6" />
export const CSS = () => <FontAwesomeIcon icon={faCss3Alt} style={languageProps} transform="grow-6" />
export const JS = () => <FontAwesomeIcon icon={faJs} style={languageProps} transform="grow-6" />
export const Node = () => <FontAwesomeIcon icon={faNodeJs} style={languageProps} transform="grow-6" />

export const GithubLink = () => <FontAwesomeIcon icon={faGithub} style={linkProps} transform="grow-4" />
export const DemoLink = () => <FontAwesomeIcon icon={faStroopwafel} style={linkProps} transform="grow-4" />
export const PyPiLink = () => <FontAwesomeIcon icon={faPython} style={linkProps} transform="grow-4" />
export const ReactLink = () => <FontAwesomeIcon icon={faReact} style={linkProps} transform="grow-4" />

export const LoadingIcon = () => <FontAwesomeIcon icon={faSpinner} style={{ fontSize: '20' }} spin />