import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import Chip from "@material-ui/core/Chip"

import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"

import {
  ContactGithub,
  ContactTwitter,
  ContactLinkedIn,
  ContactMedium,
  ContactOrcid,
  ContactDev,
  ContactGoodReads,
} from "../icons"
import ContactModal from "./contact"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    background: "transparent",
    color: "white",
    textAlign: "center",
  },
  avatar: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius: "50%",
    border: "solid white 2px;",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
  },
  title: {
    fontFamily: "Markazi Text, cursive",
    fontSize: "4em",
    margin: "0.15em 0",
  },
  subtitle: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  intro: {
    fontSize: "1.25em",
  },
  socialLink: {
    margin: "0 auto",
  },
  linkContainer: {
    display: "flex",
    width: "90%",
    margin: "1em 0 2em 0",
  },
  chip: {
    margin: theme.spacing(0.5),
    fontSize: "1.15em",
  },
}))

const HeaderSkeleton = ({ data }) => {
  const classes = useStyles()

  return (
    <Paper elevation={0} className={classes.root}>
      <Img
        className={classes.avatar}
        fluid={data.file.childImageSharp.fluid}
        alt="Shrey's picture"
      />
      <p className={classes.title}>Shrey Dabhi</p>
      <p className={classes.subtitle}>
        <li key="bd">
          <Chip label="Data & Analytics" color="" className={classes.chip} />
        </li>
        <li key="fs">
          <Chip label="Full Stack" color="" className={classes.chip} />
        </li>
        <li key="ml">
          <Chip label="ML & MLOps" color="" className={classes.chip} />
        </li>
      </p>
      <p className={classes.intro}>
        A passionate developer, with a knack for creating performant systems and
        engaging experiences. Able to effectively leverage recent and emerging
        technologies to achieve the required outcomes.
      </p>{" "}
      <p className={classes.intro}>
        {" "}
        I enjoy learning new skills, improving old ones and{" "}
        <span role="img" aria-label="heart">
          ❤️️
        </span>{" "}
        to deploy whatever I build!
      </p>
      <div className={classes.linkContainer}>
        <a
          className={classes.socialLink}
          href="https://github.com/sdabhi23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactGithub />
        </a>
        <a
          className={classes.socialLink}
          href="https://linkedin.com/in/sdabhi23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactLinkedIn />
        </a>
        <a
          className={classes.socialLink}
          href="https://medium.com/@sdabhi23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactMedium />
        </a>
        <a
          className={classes.socialLink}
          href="https://orcid.org/0000-0002-4364-9892"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactOrcid />
        </a>
        <a
          className={classes.socialLink}
          href="https://twitter.com/sdabhi23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactTwitter />
        </a>
        <a
          className={classes.socialLink}
          href="https://dev.to/sdabhi23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactDev />
        </a>
        <a
          className={classes.socialLink}
          href="https://www.goodreads.com/user/show/51618430-shrey-dabhi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactGoodReads />
        </a>
      </div>
      <Button variant="contained" size="large" href="/shrey_resume.pdf">
        Download Resume
      </Button>
      <ContactModal />
    </Paper>
  )
}

export default function Header() {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "main.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <HeaderSkeleton data={data} />}
    />
  )
}
