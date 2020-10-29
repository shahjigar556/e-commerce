import React from 'react'
import {useContext} from 'react';
import {useState,useEffect} from 'react';
import {ProductContext} from '../components/ProductContext';
import pixel from '../pixel.jpg'

export default function Details(props) {
    const id=props.match.params.id // id ot product clicked
    console.log(id)
    const [product,setProduct]=useState({});
    const [products,setProducts]=useContext(ProductContext);

     useEffect(()=>{
       const ans=products.filter(product=>product.id==id);
       console.log(ans[0]);
       setProduct(ans[0]);
     },[])
    const addToCart=()=>{  // method to know if the item has been added to cart
        let flag=0
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
 
     console.log("product is ")
     console.log(product)
     const url=product.img;
     console.log(url)
    return (
        
        <div>
            <h3 className="text-center text-primary mt-3">Details</h3>
             <div className="container">
                 <div className="row">
                     <div className='col-xs-12 col-md-6'>
                         <img className="img-fluid" alt={product.title} src="https://i.gadgets360cdn.com/products/large/1556860999_635_google_pixel_3a.jpg"></img>      
                    </div>
                     <div className="col-xs-12 col-md-6">
                         <h2 className="text-center text-success mt-2">{product.title}</h2>
                         <h3 className="text-center mt-2">{product.company}</h3>
                         <h3 className="text-danger text-center mt-2">{product.price} $</h3>
                         <p>{product.info}</p>
                         <button onClick={addToCart}>Add</button>
                         <p>{url}</p>
                     </div>
                 </div>
             </div>
        </div>
    )
}
