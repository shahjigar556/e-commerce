import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import logo from '../logo.svg';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const btnStyle={
  cursor:'pointer',
  textDecoration:'none'
}

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Link to='/'>
               <img src={logo} className="mr-5" alt="logo" ></img>
            </Link>

          <Typography variant="h4" className={classes.title}>
             Products
          </Typography>
          <div className="mr-3">
          <Link to='/login'>
              <Button style={btnStyle}startIcon={<ExitToAppIcon />} variant="contained" color="secondary">Login</Button>
          </Link>
          </div>

          <div className="mr-3">
          <Link to='/cart'>  
             <Button style={btnStyle} startIcon={<ShoppingCartIcon/>} variant="contained" color="secondary">Cart</Button>
          </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
