import React, { createContext } from 'react'
import {useState,useContext} from 'react';
import {storeProducts} from '../data';

export const ProductContext=createContext();
export const ProductProvider=(props)=>{
   const [products,setProducts]=useState(storeProducts);
   return(
       <ProductContext.Provider value={[products,setProducts]}>
           {props.children}
       </ProductContext.Provider>
   )
}