import React from 'react'
import {ProductContext} from '../components/ProductContext';
import {useState,useContext,useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


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
                    {compareProduct.map(product=>{
                        return(
                            <Grid item xs={12} sm={6} md={4} >
                            <Paper >
                                <h3>
                                   {product.title}
                                </h3>
                                <img className="img-fluid" src="https://i.gadgets360cdn.com/products/large/1556860999_635_google_pixel_3a.jpg" alt="img"></img>
                                <h4 className="text-center">
                                   {product.company}
                                </h4>
                                <h4 className="text-center text-primary">
                                    {product.price} $
                                </h4>
                           </Paper>
                       </Grid>  
                        )
                    })}

             </Grid>
        </div>
    )
}
