import React from 'react'
import Product from '../components/Product';
import {useState,useEffect} from 'react';
import {storeProducts} from '../data';
import Grid from '@material-ui/core/Grid';
import Title from '../components/Title';

export default function ProductList() {
    const [products,setProducts]=useState(storeProducts);// creating state of products
    console.log(products);
    return (
     <div className="container">
         <Title name="Our" title="Products" />
         <Grid  container spacing={2}>
             {products.map(product=><Product key={product.id} product={product} />)}
         </Grid>
        <div className='row'>
            
        </div>
     </div>
    )
}
