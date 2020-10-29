import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'
export default function Product({product}) {
    const url=`/details/${product.id}`
    const LinkStyle={
        textDecoration:'none',
        color:'black'
    }
    return (
        <Grid item xs={12} sm={6} md={4} >
             <Paper >
                 <h3>
                    {product.title}
                 </h3>
                 <img className="img-fluid" src={product.img} alt="img"></img>
                 <h4 className="text-center">
                    {product.company}
                 </h4>
                 <h4 className="text-center text-primary">
                     {product.price} $
                 </h4>
                 <center>
                 <Button variant="contained" color="secondary" className="text-center mb-3">
                     <Link to={url} style={LinkStyle}>Click For More</Link>
                 </Button>
                 </center>
            </Paper>
        </Grid>    
    )
}
