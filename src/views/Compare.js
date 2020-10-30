import React from 'react'
import {ProductContext} from '../components/ProductContext';
import {useState,useContext,useEffect} from 'react'
export default function Compare(props) {
    const id=props.match.params.id;   // id of the product clicked
    const [products,setProducts]=useContext(ProductContext);
    const [compareProduct,setCompareProduct]=useState([]);
    const currProduct=products.filter(product=>product.id==id)
    const company=currProduct[0].company;   // name of company
    
   
  
   useEffect(()=>{
       setCompareProduct(products.filter(product=>product.company==company));
   },[])
  
   console.log(compareProduct);
    return (
        <div>
            <h2 className='text-center text-success'>Compare</h2>
             <h3>{id}</h3>
             <h3>{company}</h3>
             <h3>{compareProduct.length}</h3>
        </div>
    )
}
