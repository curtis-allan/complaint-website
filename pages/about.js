import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import { Grid, Paper, Typography } from "@material-ui/core";

const About = () => (
  <div>
    <Head title="About" />
    <Nav />
    <Grid container spacing={40}>
      <Grid item xs>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h4">About us</Typography>
          <Typography variant="body1">
            Filler text for the about page here
          </Typography>
        </div>
      </Grid>
    </Grid>
  </div>
);

export default About;
