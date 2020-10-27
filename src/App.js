import logo from './logo.svg';
import './data';
// importing components
import React from 'react'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';// list of products
import Cart from './components/Cart';
import Footer from './components/Footer';
import {Route,Switch,Link } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
function App() {
  
  return (
      <Router>
          <Navbar />
          
      </Router>
  );
}

export default App;
