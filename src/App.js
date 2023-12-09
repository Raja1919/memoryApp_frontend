// App.js

import React from "react";
import "./App.css";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import memories from "./components/Images/download.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

function App() {
  return (
    <Container maxWidth="lg" className="container">
      <AppBar position="static" color="inherit" className="app-bar">
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          <Grid item>
            <Typography variant="h2" align="center" className="app-title">
              memories
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={memories}
              alt="memories"
              height={100}
              width={100}
              className="app-logo"
            />
          </Grid>
        </Grid>
      </AppBar>
      <Grow in className="grow-container">
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
            className="posts-container"
          >
            <Grid item xs={12} sm={7} className="posts-item">
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4} className="form-item">
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
