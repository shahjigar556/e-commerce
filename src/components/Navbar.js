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
const LinkStyle={
  textDecoration:'none'
}

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className='container-fluid bg-primary'>
       <div className="row">
           <div className="col-sm-6 col-xs-12">
                <div className='row'>
                     <div className="col-xs-6 ml-5 mt-2 mb-2">
                      
                       <Link to='/' style={LinkStyle}>
                         <img src={logo} alt="logo"></img>
                       </Link>

                    
                     </div>
                     <div className="col-xs-6 ml-5 mt-2 mb-2">
                       
                        <Link to='/' style={LinkStyle}>
                            <h2 className="text-warning font-weight-bold">Products</h2>
                        </Link>

                     </div>
                </div>
           </div>
           <div className='col-sm-6 col-xs-12 ml-auto'>
              <div className="row">
                  <div className="col-xs-6 mr-3 ml-5 mt-2 mb-2">
                  

                  <Link to='/login' style={LinkStyle}>
                     <Button style={btnStyle}startIcon={<ExitToAppIcon />} variant="contained" color="secondary">Login</Button>
                 </Link>
                  
                  </div>
                  <div className="col-xs-6 mt-2 ml-2 mb-2">
                    
                   <Link to='/cart' style={LinkStyle}>  
                      <Button style={btnStyle} startIcon={<ShoppingCartIcon/>} variant="contained" color="secondary">Cart</Button>
                   </Link>

                   
                  </div>

              </div>
           </div>
       </div>

    </div>

  );
}
