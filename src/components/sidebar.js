import React from 'react';
import logo from '../logo.svg';
import { slide as Menu } from 'react-burger-menu';
import { ContactGithub, ContactTwitter, ContactLinkedIn, ContactMedium, ContactFacebook } from '../icons'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../shrey_resume.pdf'

export default class Sidebar extends React.Component {

  render () {
    return (
      <Menu>
        <img src={logo} className="menu-logo" alt="logo" />
        <AnchorLink className="menu-item" href="#header">Home</AnchorLink>
        <AnchorLink className="menu-item" href="#about">About</AnchorLink>
        <AnchorLink className="menu-item" href="#work">Work</AnchorLink>
        <AnchorLink className="menu-item" href="#contact">Contact</AnchorLink>
        <a className="menu-item" href={resume}>Download Resume</a>
        <div className="social-section">
            <a className="menu-social" href="https://github.com/sdabhi23" target="_blank" rel="noopener noreferrer"><ContactGithub/></a>
            <a className="menu-social" href="https://linkedin.com/in/sdabhi23" target="_blank" rel="noopener noreferrer"><ContactLinkedIn/></a>
            <a className="menu-social" href="https://medium.com/@sdabhi23" target="_blank" rel="noopener noreferrer"><ContactMedium/></a>
            <a className="menu-social" href="https://fb.com/sdabhi23" target="_blank" rel="noopener noreferrer"><ContactFacebook/></a>
            <a className="menu-social" href="https://twitter.com/sdabhi23" target="_blank" rel="noopener noreferrer"><ContactTwitter/></a>
        </div>
      </Menu>
    );
  }
}