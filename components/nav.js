import React from 'react';
import Link from 'next/link';
import {AppBar, Toolbar, Typography, IconButton, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 20
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    margin: '-12 20'
  },
};


const navBar = (props) => {
        const {classes} = props;
        return (
          <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Complaint App
            </Typography>
            <Link href="/"><Button color='inherit'>Home</Button></Link>
            <Link href="/submit"><Button color="inherit" >Submit a complaint</Button></Link>
            <IconButton  className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        </div>
    );
        }

        navBar.propTypes = {
          classes: PropTypes.object.isRequired,
        };

export default withStyles(styles)(navBar);