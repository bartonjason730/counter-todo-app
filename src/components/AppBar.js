import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";

const AppBarComponent = () => {
  return (
    <Grid container>
      <AppBar position="static">
        <Toolbar>
          <Grid item xs={1}>
            <IconButton edge="start" color="inherit" aria-label="menu">
            <GitHubIcon/>
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              Counter App: Made with React, Redux, and Material UI
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button color="inherit" style={{textAlign: 'right'}}>Email me</Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default AppBarComponent;
