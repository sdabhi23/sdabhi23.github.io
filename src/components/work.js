import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    background: "transparent",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  logo: {
    width: 125,
    height: 125,
    backgroundColor: "white",
    borderRadius: "50%",
  },
  pastEmployer: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "10px",
    },
    marginTop: "0.5em",
    textAlign: "center",
  },
  pastEmployerTitle: {
    fontFamily: "Markazi Text, cursive",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "10px",
    },
  },
  currentEmployerTitle: {
    fontFamily: "Markazi Text, cursive",
  },
  currentEmployer: {
    marginTop: "0.5em",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  currentEmployerLogo: {
    [theme.breakpoints.down("sm")]: {
      width: "200px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    height: "auto",
    width: "150px",
  },
}))

const WorkSkeleton = ({ data }) => {
  const classes = useStyles()

  return (
    <Paper elevation={0} className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Typography className={classes.currentEmployerTitle} variant="h3">
            Currently:
          </Typography>
          <Paper className={classes.currentEmployer}>
            <Grid container spacing={2} direction="row">
              <Grid item xs={12} md={4}>
                <Img
                  className={classes.currentEmployerLogo}
                  fluid={data.allFile.nodes[3].childImageSharp.fluid}
                  alt="Optum Logo"
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <div style={{ padding: "0.5em" }}>
                  <Typography variant="h5">Software Engineer</Typography>
                  <Typography variant="h6">Optum</Typography>
                  <Typography variant="p">
                    Working on migration of legacy mainframe applications to big
                    data environments
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="p">
                    <b>Tech Stack:</b> Hadoop, Hive, Spark, Scala, Python
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography className={classes.pastEmployerTitle} variant="h3">
            Past Employers:
          </Typography>
          <Grid container spacing={2} className={classes.pastEmployer}>
            <Grid item>
              <Img
                className={classes.logo}
                fluid={data.allFile.nodes[0].childImageSharp.fluid}
                alt="Bosch Logo"
              />
              <Typography variant="h6">Robert Bosch</Typography>
            </Grid>

            <Grid item>
              <Img
                className={classes.logo}
                fluid={data.allFile.nodes[1].childImageSharp.fluid}
                alt="Hasura Logo"
              />
              <Typography variant="h6">Hasura</Typography>
            </Grid>

            <Grid item>
              <Img
                className={classes.logo}
                fluid={data.allFile.nodes[2].childImageSharp.fluid}
                alt="Let's Nurture Logo"
              />

              <Typography variant="h6">Let's Nurture</Typography>
            </Grid>

            <Grid item>
              <Img
                className={classes.logo}
                fluid={data.allFile.nodes[4].childImageSharp.fluid}
                alt="Taaraka Logo"
              />

              <Typography variant="h6">Taaraka</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default function Work() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allFile(
            filter: { relativePath: { glob: "company-*" } }
            sort: { fields: name, order: ASC }
          ) {
            nodes {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `}
      render={data => <WorkSkeleton data={data} />}
    />
  )
}
