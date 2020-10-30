import React from 'react'
import {useState,useEffect} from 'react';
import {useContext} from 'react';
import {ProductContext} from '../components/ProductContext';
import Grid from '@material-ui/core/Grid';
import Product from '../components/Product';

export default function PriceCompare(props) {
    const price=props.match.params.price;
    const [products,setProducts]=useContext(ProductContext)
    const [rangeProducts,setRangeProducts]=useState([]);// range of products
    useEffect(()=>{
        setRangeProducts(products.filter(product=>product.price<=price))
    },[])
    console.log(rangeProducts)
    return (
        <div>
            <h2 className="text-center text-success">Price Compare</h2>
            <Grid container spacing={2}>
                {rangeProducts.map(product=><Product id={product.id} product={product}/>)}
            </Grid>
        </div>
    )
}
