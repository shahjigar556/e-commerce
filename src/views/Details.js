import React from 'react'
import {useContext} from 'react';
import {useState,useEffect} from 'react';
import {ProductContext} from '../components/ProductContext';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


export default function Details(props) {
    const id=props.match.params.id // id ot product clicked
    console.log(id)
    const [product,setProduct]=useState({});   // state for storing data of the current product
    const [products,setProducts]=useContext(ProductContext);

     useEffect(()=>{
       const ans=products.filter(product=>product.id==id);
       console.log(ans[0]);
       setProduct(ans[0]);
     },[])
    const addToCart=()=>{  // method to know if the item has been added to cart
    
        console.log('in event add to cart');
        product.inCart=!product.inCart;
        setProducts(products.map(sproduct=>{
            if(sproduct.id==product.id)
            {
                sproduct.inCart=true;
            }
            return sproduct;
        }))
        if(product.inCart)
        {
            alert('Item Added in cart');
        }
        else
        {
            alert('Item already added');
        }
    }
   const compareUrl=`/compare/${product.id}/${product.company}`// url to compare page
   const LinkStyle={
       textDecoration:'none',
       color:'black'
   }
   const imgUrl=`/${product.img}`
    return (
        
        <div>
            <h3 className="text-center text-primary mt-3">Details</h3>
             <div className="container">
                 <div className="row">
                     <div className='col-xs-12 col-md-6'>
                         <img className="img-fluid" alt={product.title} src={imgUrl}></img>      
                    </div>
                     <div className="col-xs-12 col-md-6">
                         <h2 className="text-center text-success mt-2">{product.title}</h2>
                         <h3 className="text-center mt-2">{product.company}</h3>
                         <h3 className="text-danger text-center mt-2">{product.price} $</h3>
                         <p>{product.info}</p>
                         <Button variant="contained" color="secondary" onClick={addToCart}>Add</Button>
                         
                         <br />
                  <Button variant="contained" color="secondary" className="text-center mb-3 mt-2">
                     <Link to={compareUrl} style={LinkStyle}>Compare</Link>
                 </Button>
                     </div>
                 </div>
             </div>
        </div>
    )
}
