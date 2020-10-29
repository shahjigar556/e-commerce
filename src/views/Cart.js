import React from 'react'
import {useContext,useState} from 'react';
import {ProductContext} from '../components/ProductContext';
export default function Cart() {
  const [products,setProducts]=useContext(ProductContext); 
  console.log(products);
  const demo={
      color:products[0].inCart?'green':'red'
  }
    return (
        <div>
            <h3 style={demo}>Hello from cart</h3>
            <h3>{products[0].inCart}</h3>
            
            
        </div>
    )
}
