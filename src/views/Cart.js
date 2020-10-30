import React from 'react'
import {useContext,useState,useEffect} from 'react';
import {ProductContext} from '../components/ProductContext';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

export default function Cart() {
  const [products,setProducts]=useContext(ProductContext); 
  const [cartProduct,setCartProduct]=useState([]);
  


  const RemoveFromCart=(id)=>{  // function to remove item from cart
      console.log("Remove button clicked"+id)
      console.log(products);
       setProducts(products.map(product=>{
           if(product.id==id)
           {
               product.inCart=false // removing the clicked item from cart
               product.quantity=1;  // restoring the quantity to 1
               alert(`${product.title} successfully Removed`)
           }
           return product
       }))
      console.log(products)
      setCartProduct(cartProduct.filter(cart=>cart.id!=id))
  }

  const increment=(id)=>{    // function to increase the quantity in cart
    setProducts(products.map(product=>{
        if(product.id===id)
        {
            if(product.quantity<product.total)
            {
                product.quantity+=1
            }
            else
            {
                alert(`Maximum limit reached for ${product.title}`)
            }
   
        }
        return product;
    }))
  }

const decrement=(id)=>{
    setProducts(products.map(product=>{
        if(product.id==id)
        {
           if(product.quantity>0)
                product.quantity-=1;
           if(product.quantity==0)
           {
               product.quantity=1;
               RemoveFromCart(id);
           }
        }
        return product;
    }))
}

  useEffect(()=>{
    setCartProduct(products.filter(product=>product.inCart===true));
 },[])

 let subTotal=0
 for(let i=0;i<cartProduct.length;i++)
 {
     subTotal+=cartProduct[i].price*cartProduct[i].quantity;
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
                            <center>

                            <Button variant="contained" color="secondary" onClick={()=>RemoveFromCart(cart.id)}>Remove</Button>
                            <br></br>
                            <Button className="mt-3 mb-2" variant="contained" color="secondary" onClick={()=>increment(cart.id)}>+</Button>  
                             <Button className="mt-3 mb-2 ml-2" variant="contained" color="secondary" onClick={()=>decrement(cart.id)}>-</Button>
                             <h3>Current Quantity is:<b>{cart.quantity}</b></h3>
                            </center>
                            
                       </Paper>
                   </Grid>
                     )
                 })}
             </Grid>
             <h2 className="mt-2 text-center">Subtotal is <b style={subTotalStyle}>{subTotal}</b> $</h2>
        </div>
    )
}
