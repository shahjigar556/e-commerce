import React, { createContext } from 'react'
import {useState,useContext} from 'react';
import {storeProducts} from '../data';

export const ProductContext=createContext();//creating context to store data 
// use the context where the data is required
// provider is a mechanism by which only children  inside the provider can access the data
export const ProductProvider=(props)=>{
   const [products,setProducts]=useState(storeProducts);
   return(
       <ProductContext.Provider value={[products,setProducts]}>
           {props.children}
       </ProductContext.Provider>
   )
}