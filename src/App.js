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
function App() {
  
  return (
     <React.Fragment>
        <Navbar />
        <Switch>
           <ProductProvider>
           <Route exact path='/' component={ProductList} />
           <Route excat path='/details' component={Details} />
           <Route path='/cart' component={Cart} />
           <Route path='/login' component={Login} />
           <Route component={Default} />
           </ProductProvider>
        </Switch>
     
     </React.Fragment>
  );
}

export default App;
