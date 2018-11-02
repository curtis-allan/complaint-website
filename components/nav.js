import React from 'react';
import Link from 'next/link';
import {AppBar, Toolbar, Typography, MenuItem, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'


const navBar = () => (
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Photos
            </Typography>
            <Link href="/" as="MenuItem"><Typography variant="h6" color="inherit" >Home</Typography></Link>
            <Link href="/submit"><MenuItem><Typography variant="h6" color="inherit" >Submit a complaint</Typography></MenuItem></Link>
          </Toolbar>
        </AppBar>
    );

export default navBar;