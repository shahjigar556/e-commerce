import React from 'react'
import {useContext,useState,useEffect} from 'react';
import {ProductContext} from '../components/ProductContext';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';


export default function Cart() {
  const [products,setProducts]=useContext(ProductContext); 
  const [cartProduct,setCartProduct]=useState([]);
  


  const RemoveFromCart=(id)=>{
      console.log("Remove button clicked"+id)
      console.log(products);
       setProducts(products.map(product=>{
           if(product.id==id)
           {
               product.inCart=false
           }
           return product
       }))
      console.log(products)
      setCartProduct(cartProduct.filter(cart=>cart.id!=id))
  }
  useEffect(()=>{
    setCartProduct(products.filter(product=>product.inCart===true));
 },[])

 let subTotal=0
 for(let i=0;i<cartProduct.length;i++)
 {
     subTotal+=cartProduct[i].price;
 }
 const subTotalStyle={
    color: subTotal>0?'green':'red'
 }
  
  console.log(cartProduct)
  if(cartProduct.length!=0)
  {
      console.log(cartProduct[0].img)
  }
    return (
        <div>
            <h1 className="text-center text-success"> Cart</h1>
             <h3 className="mt-2">{cartProduct.length===0?'Your Cart is Currently Empty':'Check Your Cart'}</h3>
             <Grid container spacing={2}>
                 {cartProduct.map(cart=>{
                     return(
                        <Grid item xs={12} sm={6} md={4} >
                        <Paper >
                            <h3>
                               {cart.title}
                            </h3>
                            <img className="img-fluid" src={cart.img} alt="img"></img>
                            <h4 className="text-center">
                               {cart.company}
                            </h4>
                            <h4 className="text-center text-primary">
                                {cart.price} $
                            </h4>
                            <button onClick={()=>RemoveFromCart(cart.id)}>Remove</button>
                       </Paper>
                   </Grid>
                     )
                 })}
             </Grid>
             <h2 className="mt-2 text-center">Subtotal is <b style={subTotalStyle}>{subTotal}</b> $</h2>
        </div>
    )
}
