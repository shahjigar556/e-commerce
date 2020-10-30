import React from 'react'
import {ProductContext} from '../components/ProductContext';
import {useState,useContext,useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Product from '../components/Product';

export default function Compare(props) {
    const id=props.match.params.id;   // id of the product clicked
    const company=props.match.params.company;
    const [products,setProducts]=useContext(ProductContext);
    const [compareProduct,setCompareProduct]=useState([]);
  
   useEffect(()=>{
       setCompareProduct(products.filter(product=>product.company==company));
   },[])
  
   console.log(compareProduct);
    return (
        <div>
            <h2 className='text-center text-success'>Compare</h2>
            <h3 className="text-center mb-3 mt-2"><b className="text-primary">{compareProduct.length}</b> Products Can Be compared</h3>
             <Grid container spacing={2}>
                 {compareProduct.map(product=><Product key={product.id} product={product}/>)}
             </Grid>
        </div>
    )
}
