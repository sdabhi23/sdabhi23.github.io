import React from "react";
import logo from "../logo-alt.png";
import { slide as Menu } from "react-burger-menu";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../shrey_resume.pdf";

export default class Sidebar extends React.Component {
  render() {
    return (
      <Menu>
        <img src={logo} className="menu-logo" alt="logo" />
        <AnchorLink className="menu-item" href="#header">
          Home
        </AnchorLink>
        <AnchorLink className="menu-item" href="#about">
          About
        </AnchorLink>
        <AnchorLink className="menu-item" href="#work">
          Work
        </AnchorLink>
        <AnchorLink className="menu-item" href="#contact">
          Contact
        </AnchorLink>
        <a className="menu-item" href={resume}>
          Download Resume
        </a>
      </Menu>
    );
  }
}
