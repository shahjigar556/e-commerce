import logo from './logo.svg';
import './data';
// importing components
import React from 'react'
import Navbar from './components/Navbar';
import ProductList from './views/ProductList'
import Cart from './views/Cart';
import Footer from './components/Footer';
import Details from './views/Details';
import Default from './views/Default';
import {Route,Switch,Link } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  
  return (
     <React.Fragment>
        <Navbar />
        <Switch>
           <Route exact path='/' component={ProductList} />
           <Route excat path='/details/:id' component={Details} />
           <Route path='/cart' component={Cart} />
           <Route component={Default} />
        </Switch>
     </React.Fragment>
  );
}

export default App;
