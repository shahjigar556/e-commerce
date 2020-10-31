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
import Login from './views/Login';
import {useContext} from 'react';
import {ProductProvider} from './components/ProductContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Compare from './views/Compare';
import PriceCompare from './views/PriceCompare';
import ProtectedRoute from './components/ProtectedRoute'
function App() {
  
  return (
     <React.Fragment>
        <Navbar />
        <Switch>
           <ProductProvider>
           <Route exact path='/' component={ProductList} />
           <ProtectedRoute exact path='/details/:id' component={Details} />
           <ProtectedRoute exact path='/cart' component={Cart} />
           <Route exact path='/login' component={Login} />
           <ProtectedRoute exact path='/compare/:id/:company' component={Compare} />
           <ProtectedRoute exact path='/price/:price' component={PriceCompare} />
           
           </ProductProvider>
        </Switch>
     
     </React.Fragment>
  );
}

export default App;
