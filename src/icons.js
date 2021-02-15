import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitter,
  faMedium,
  faGithub,
  faOrcid,
  faDev,
  faGoodreads,
} from "@fortawesome/free-brands-svg-icons";

const contactProps = { color: "#e3e3e3" };

export const ContactLinkedIn = () => (
  <FontAwesomeIcon icon={faLinkedin} style={contactProps} size="2x" />
);
export const ContactTwitter = () => (
  <FontAwesomeIcon icon={faTwitter} style={contactProps} size="2x" />
);
export const ContactGithub = () => (
  <FontAwesomeIcon icon={faGithub} style={contactProps} size="2x" />
);
export const ContactMedium = () => (
  <FontAwesomeIcon icon={faMedium} style={contactProps} size="2x" />
);
export const ContactOrcid = () => (
  <FontAwesomeIcon icon={faOrcid} style={contactProps} size="2x" />
);
export const ContactDev = () => (
  <FontAwesomeIcon icon={faDev} style={contactProps} size="2x" />
);
export const ContactGoodReads = () => (
  <FontAwesomeIcon icon={faGoodreads} style={contactProps} size="2x" />
);

export const LoadingIcon = () => (
  <FontAwesomeIcon icon={faSpinner} style={{ fontSize: "20" }} spin />
);
