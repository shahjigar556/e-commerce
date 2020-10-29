import React from 'react'
import {useContext,useState} from 'react';
import {ProductContext} from '../components/ProductContext';
export default function Cart() {
  const [products,setProducts]=useContext(ProductContext);
    return (
        <div>
            <h3>Hello from cart</h3>
            <h3>{products[0].id}</h3>
        </div>
    )
}
