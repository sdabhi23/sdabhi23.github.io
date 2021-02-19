import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Header from "../components/header"
import Work from "../components/work"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
  paper: {
    height: 50,
    width: "100%",
  },
}))

export default function Home() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid container className={classes.root} spacing={2}>
        <Grid key={0} xs={12} lg={3} item>
          <Header />
        </Grid>
        <Grid key={1} xs={12} lg={9} item>
          <Work />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
