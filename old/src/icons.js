import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedin,
  faTwitter,
  faMedium,
  faGithub,
  faOrcid,
  faDev,
  faGoodreads,
} from "@fortawesome/free-brands-svg-icons"

const contactProps = { color: "#e3e3e3", fontSize: "2.5em" }

export const ContactLinkedIn = () => (
  <FontAwesomeIcon icon={faLinkedin} style={contactProps} />
)
export const ContactTwitter = () => (
  <FontAwesomeIcon icon={faTwitter} style={contactProps} />
)
export const ContactGithub = () => (
  <FontAwesomeIcon icon={faGithub} style={contactProps} />
)
export const ContactMedium = () => (
  <FontAwesomeIcon icon={faMedium} style={contactProps} />
)
export const ContactOrcid = () => (
  <FontAwesomeIcon icon={faOrcid} style={contactProps} />
)
export const ContactDev = () => (
  <FontAwesomeIcon icon={faDev} style={contactProps} />
)
export const ContactGoodReads = () => (
  <FontAwesomeIcon icon={faGoodreads} style={contactProps} />
)

export const LoadingIcon = () => (
  <FontAwesomeIcon icon={faSpinner} style={{ fontSize: "20" }} spin />
)
