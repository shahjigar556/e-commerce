import React from 'react';

import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import fakeAuth from '../Auth';


const btnStyle={
  cursor:'pointer',
  textDecoration:'none'
}
const LinkStyle={
  textDecoration:'none'
}



export default function ButtonAppBar() {
 

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
                  <div className="col-xs-6 mr-3 ml-5 mt-2 mb-2 " >
                  

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
